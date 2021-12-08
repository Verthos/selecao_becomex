import axios from "axios"
import styles from "../../styles/details.module.scss"

export default function Country({country}){

    return(
      <div className={styles.container}>

        <img src={country.flags} alt="country_flag" />

        <content>
          <h1>Nome: {country.name}</h1>
          <h1>Capital: {country.capital}</h1>
          <h1>População: {country.population}</h1>
          <ul>Moedas: 
              <li>{country.currencies[Object.keys(country.currencies)[0]].name} </li>
              <li>{country.currencies[Object.keys(country.currencies)[1]]?.name} </li>
          </ul>
          <ul>{country.borders.map(border => {return(<li>{border}</li>)})}</ul>
          <ul>Time-zones: {country.timeZone.map(time => {return(<li>{time}</li>)})}</ul>
        </content>
      </div>
    )
}


export const getStaticPaths = () => {
    return {
        paths: [],
        fallback: "blocking"
    }
}

export const getStaticProps = async ({params}) => {

    const { slug } = params;
    const response = await axios.get(`https://selecao-becomex.vercel.app/api?name=${slug}`)
    const data = await response.data

    const country = {
      name: data[0].name.common,
      flags: data[0].flags.svg,
      timeZone: data[0].timezones,
      currencies: data[0].currencies,
      languages: data[0].languages,
      capital: data[0].capital,
      population: data[0].population,
      borders: data[0].borders

    }

    return{
        props:{
          country
        }
      }
}