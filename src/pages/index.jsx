import { Header } from "../components/Header";
import  HomePage  from "../components/HomePage";
import { Footer } from "../components/Footer";
import axios from "axios"



export default function Home(props) {

  return (
    <>
      <Header/>
      <HomePage countries={props.countries}/>
      <Footer/>
    </>
  )
}


export const getServerSideProps = async () => {
  const res = await axios.get("https://restcountries.com/v3.1/all")
  const countries = await res.data


  return{
    props:{
      countries
    }
  }
}
