import axios from "axios"
import React, {useState, useEffect}from "react"
import HomePage from "../components/HomePage"
import styles from "../components/HomePage/home.module.scss"
import { Pagination } from "../components/Pagination"
import { Countries } from "../components/Countries"

export default function Home(props) {

    const [countryList, setCountryList] = useState(props.countries)
    const [currentPage, setCurrentPage] = useState(1);
    const [filterType, setFilterType] = useState("Nome")
    const [argument, setArgument] = useState("")
    const buttons = ["Todos", "Nome", "Sigla", "Moeda"]
    const [isSelected, setIsSelected] = useState("Todos");

    const [countryPerPage] = useState(10)    
    const indexOfLastCountry = currentPage * countryPerPage;
    const indeOfFirstCountry = indexOfLastCountry - countryPerPage;
    const [currentCountryPagination, setCurrentCountryPagination] = useState(props.countries.slice(indeOfFirstCountry, indexOfLastCountry));

    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber)
    }
    const handleFilterType = (button) => {
      setFilterType(button);
      setIsSelected(button);
  }

  const handleFilter = (argument) => {
      filterType === "Nome" ? 
          setCurrentCountryPagination(countryList.filter(country => {return(country.name.common === argument || country.name.official === argument)}).slice(indeOfFirstCountry, indexOfLastCountry))
      : 
      filterType === "Moeda" ?
          setCurrentCountryPagination(countryList.filter(country => {return(country.currencies?.hasOwnProperty(argument))}).slice(indeOfFirstCountry, indexOfLastCountry))
      :
      filterType === "Sigla" ?
          setCurrentCountryPagination(countryList.filter(country => {return(country.cca2 === argument || country.cca3 === argument || country.cioc === argument)}).slice(indeOfFirstCountry, indexOfLastCountry))
      : ""
  }

  useEffect(() => {
    setCurrentCountryPagination(props.countries.slice(indeOfFirstCountry, indexOfLastCountry))
  },[currentPage, setCurrentCountryPagination, indeOfFirstCountry, indexOfLastCountry])


    return(
        
      <div className={styles.home}>
          
          <div className={styles.search}>
              <div className={styles.filtros}>
                  {buttons.map(button => {return(<button key={button} className={isSelected === button ? styles.isSelected: ""} onClick={() => handleFilterType(button)}>{button}</button>)})}
              </div>
              <input  placeholder="Digite aqui..." type="text" onChange={(event) => setArgument(event.target.value)}/>
              <button onClick={() => handleFilter(argument)}>
                  Pesquisar
              </button>
          </div>
          <Pagination paginate={paginate} countryPerPage={countryPerPage}></Pagination>
          <Countries countries={currentCountryPagination}/>
          
      </div>
  )
  
}


export const getServerSideProps = async () => {
  const res = await axios.get("https://selecao-becomex.vercel.app/api?all")
  const countries = await res.data


  return{
    props:{
      countries
    }
  }
}
