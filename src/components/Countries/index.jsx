import styles from "./contry.module.scss"

export function Countries({countries}) {
    

    return(
        
        <ul className={styles.container}>

            {            
            countries.map(country => {return(
                <a key={country.name} className={styles.card} href={`/${country.name.common}`}>
                    <li  className={styles.country}>
                        <img src={country.flags.svg} alt="country_flag" />
                        
                        <ul>
                            <li>Nome: {country.name.common}</li>
                            <li>Sigla: {country.cca2}</li>
                            <li>Nome: {country.name.common}</li>
                            
                        </ul>
                    </li>
                </a>
                    
            )})}
            
        </ul>
    )
}