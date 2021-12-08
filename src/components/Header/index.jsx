import React from "react";
import styles from "./header.module.scss"

export function Header() {
    return(
        <header className={styles.styledHeader}>
            <h2>Processo seletivo</h2>
            <h1>BECOME<span>X</span></h1>
            <h2> por <span>William Kszan</span>.</h2>
        </header>
    )
}