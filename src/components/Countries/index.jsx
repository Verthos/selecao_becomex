import styles from "./contry.module.scss"
import Image from "next/image"

export function Countries({countries}) {
    

    return(
        
        <ul className={styles.container}>

            {            
            
            countries.map(country => {return(
                <li key={country.name} className={styles.country}>
                    <Image src={country.flags.svg} alt="country_flag" />
                    
                    <ul>
                        <li>Nome: {country.name.common}</li>
                        <li>sigla: {country.cca2}</li>
                        <li>Nome: {country.name.common}</li>
                        <li>
                            {country.currencies !== undefined ? 
                            <>
                                <span className={styles.coinSymbol}>{country.currencies[Object.keys(country.currencies)[0]].symbol}</span>
                                <span className={styles.coinName}>{country.currencies[Object.keys(country.currencies)[0]].name}</span>
                            </>
                            : "Sem moeda informada"}
                        </li>
                    </ul>
                    
                </li>    
            )})}
            
        </ul>
    )
}