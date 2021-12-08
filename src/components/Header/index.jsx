import React from "react";
import styles from "./header.module.scss"

export function Header() {
    return(
        <header className={styles.styledHeader}>
            <h1>BECOME<span>X</span></h1>
            <h2>Processo seletivo, por <span>William Kszan</span></h2>
        </header>
    )
}