import React, { useState, useEffect } from 'react'

import Item from '../../components/Item/Item'

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
            {items && items.map(item => <div key={item._id}><Item item={item} /></div>)}
        </div>
    )
}

export default Home