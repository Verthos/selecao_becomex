import React from "react";
import styles from "./home.module.scss"
import { useState } from "react";
import { Countries } from "../Countries";
import { Pagination } from "../Pagination";


export default function HomePage(props) {

    const [countryList, setCountryList] = useState(props.countries)
    const [currentPage, setCurrentPage] = useState(1);
    const [filterType, setFilterType] = useState("initials")
    const [argument, setArgument] = useState("")

    const [countryPerPage] = useState(30)    
    const indexOfLastCountry = currentPage * countryPerPage;
    const indeOfFirstCountry = indexOfLastCountry - countryPerPage;
    const [currentCountryPagination, setCurrentCountryPagination] = useState(props.countries.slice(indeOfFirstCountry, indexOfLastCountry));


    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const handleFilter = (argument) => {
        filterType === "name" ? 
            setCurrentCountryPagination(countryList.filter(country => {return(country.name.common === argument || country.name.official === argument)}).slice(indeOfFirstCountry, indexOfLastCountry))
        : 
        filterType === "coin" ?
            setCurrentCountryPagination(countryList.filter(country => {return(country.currencies?.hasOwnProperty(argument))}).slice(indeOfFirstCountry, indexOfLastCountry))
        :
        filterType === "initials" ?
            setCurrentCountryPagination(countryList.filter(country => {return(country.cca2 === argument || country.cca3 === argument || country.cioc === argument)}).slice(indeOfFirstCountry, indexOfLastCountry))
        : ""
    }




    return(
        
        <div className={styles.home}>
            
            <div className={styles.search}>
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
