import React from "react";
import styles from "./home.module.scss"
import { useState, useEffect } from "react";
import axios from "axios";
import { Contry } from "../Country";
import { Pagination } from "../Pagination";


export default function HomePage({text}) {

    const [contryList, setContryList] = useState([]);
    const [fetching, setFetching] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [countryPerPage, setContryPerPage] = useState(20)


    useEffect(()=> {
        const fetchPosts = async () => {    
            setFetching(true);
            const res = await axios.get("http://localhost:3000/api?all");
            setContryList(res.data);
            setFetching(false);
        }

        fetchPosts();
    },[])

    

    const indexOfLastCountry = currentPage * countryPerPage;
    const indeOfFirstCountry = indexOfLastCountry - countryPerPage;
    const currentCountryPagination = contryList.slice(indeOfFirstCountry, indexOfLastCountry);
   



    return(
        
        <main className={styles.home}>
            <h1>{text}</h1>
            {currentCountryPagination.map(contry => <Contry loading={fetching} key={contry.name.common} flag={contry.flags.svg} name={contry.name.common}/>)}
            <Pagination countryPerPage={countryPerPage} totalCountries={contryList.lengh}></Pagination>

        </main>
    )


}

export const getServerSideProps = async () => {
    return {
        props: {
            text: "test"
        }
    }

}