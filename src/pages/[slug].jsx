import axios from "axios"
import styles from "../../styles/details.module.scss"

export default function Country({country}){

    return(
      <div className={styles.container}>

        <img src={country.flags} alt="country_flag" />

        <content>
          <div className={styles.mainInformation}>
            <li>Nome: {country.name}</li>
            <li>Capital: {country.capital}</li>
            <li>População: {Intl.NumberFormat().format(country.population)}</li>
            <li>Moeda: {country.currencies[Object.keys(country.currencies)[0]].symbol} {country.currencies[Object.keys(country.currencies)[0]].name} </li>
            <li>{country.currencies[Object.keys(country.currencies)[1]]?.name} </li>
          </div>
         
          <ul> Faz divisa com: {country.borders.map(border => {return(<li key={border}>{border}</li>)})}</ul>
          <ul>Time-zones: {country.timeZone.map(time => {return(<li key={time}>{time}</li>)})}</ul>
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