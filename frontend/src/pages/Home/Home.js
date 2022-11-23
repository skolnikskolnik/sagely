import React, { useState, useEffect } from 'react'

import Item from '../../components/Item/Item'

import { text } from '../../constants/constants'
import styles from './Home.module.scss'

const Home = () => {
    const [items, setItems] = useState(null)

    // initial fetch for all of the items
    useEffect(() => {
        const fetchItems = async () => {
            const response = await fetch('/api/items/')
            const json = await response.json()

            if (response.ok) {
                setItems(json)
            }
        }

        fetchItems()
    }, [])

    return (
        <div>
            <div className={styles.container}>
                <h1>{text.header}</h1>
            </div>
            {items && items.map(item => <Item item={item} />)}
        </div>
    )
}

export default Home