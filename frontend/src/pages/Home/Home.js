import React from 'react'

import { text } from '../../constants/constants'
import styles from './Home.module.scss'

const Home = () => {
    return (
        <div className={styles.container}>
            <h1>{text.header}</h1>
        </div>
    )
}

export default Home