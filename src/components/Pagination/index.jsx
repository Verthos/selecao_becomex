import React from "react";
import styles from "./pagination.module.scss"

export function Pagination(props) {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(250 / props.countryPerPage); i++) {
        pageNumbers.push(i)
    }

    return(
        <nav className={styles.styledNav}>
            <ul>
                {pageNumbers.map(i => (
                    <li key={i}>
                        <a onClick={() => props.paginate(i)} href="#">{i}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}