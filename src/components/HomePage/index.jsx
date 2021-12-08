import React from "react";
import styles from "./home.module.scss"
import { useState } from "react";
import { Countries } from "../Countries";
import { Pagination } from "../Pagination";


export default function HomePage(props) {

    const [countryList, setCountryList] = useState(props.countries)
    const [currentPage, setCurrentPage] = useState(1);
    const [countryPerPage] = useState(20)

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    
    const indexOfLastCountry = currentPage * countryPerPage;
    const indeOfFirstCountry = indexOfLastCountry - countryPerPage;
    const currentCountryPagination = props.countries.slice(indeOfFirstCountry, indexOfLastCountry);

    return(
        
        <div className={styles.home}>
            <Pagination paginate={paginate} countryPerPage={countryPerPage}></Pagination>
            <Countries countries={currentCountryPagination}/>
            
            
        </div>
    )
}
