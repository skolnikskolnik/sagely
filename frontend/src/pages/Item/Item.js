import React, { useEffect } from "react"
import { useParams } from "react-router-dom"

import styles from './Item.module.scss'

const Item = () => {
    const { itemId } = useParams()

    return (
        <div className={styles.container}>
            individual item
        </div>
    )
}

export default Item