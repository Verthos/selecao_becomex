import styles from "./contry.module.scss"

export function Contry(props) {

    if(props.loading){
        return ( 
            <h1>LOADING...</h1>
        )
    }


    return(
        <li className={styles.contry}>
            <img src={props.flag} alt="country_flag" />
            {props.name}
        </li>
    )
}