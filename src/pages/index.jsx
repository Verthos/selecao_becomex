import axios from "axios"
import HomePage from "../components/HomePage"


export default function Home(props) {

  return (
      <HomePage countries={props.countries}/>
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
