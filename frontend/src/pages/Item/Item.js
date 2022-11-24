import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import text from "../../constants/constants"
import styles from './Item.module.scss'

const TextRow = ({ leftText, rightText }) => (
    <>
        <div className={styles.row}>
            <div className={styles.leftColumn}><p>{leftText}</p></div>
            <div className={styles.rightColumn}><p>{rightText || text.notAvailable}</p></div>
        </div>
        <hr></hr>
    </>
)


const Item = () => {
    const { itemId } = useParams()
    const [item, setItem] = useState(null)

    // initial fetch for all of the item
    useEffect(() => {
        const fetchItem = async () => {
            const response = await fetch(`/api/items/${itemId}`)
            const json = await response.json()

            if (response.ok) setItem(json)
        }

        fetchItem()
    }, [itemId])


    return (
        <div className={styles.container}>
            {item ? (
                <div className={styles.itemContainer}>
                    <TextRow leftText={text.title} rightText={item.title} />
                    <TextRow leftText={text.author} rightText={item.author} />
                    <TextRow leftText={text.publicationYear} rightText={item.publication_year} />
                    <TextRow leftText={text.abstractNote} rightText={item.abstract_note} />
                    <TextRow leftText={text.itemType} rightText={item.item_type} />
                    <TextRow leftText={text.manualTags} rightText={item.manual_tags} />
                    <TextRow leftText={text.dateAdded} rightText={item.date_added} />
                    <TextRow leftText={text.dateModified} rightText={item.date_modified} />
                    <TextRow leftText={text.date} rightText={item.date} />
                    <div className={styles.row}>
                        <div className={styles.leftColumn}><p>{text.link}</p></div>
                        <div className={styles.rightColumn}>
                            {item.url ? <a href={item.url} target="_blank" rel="noreferrer" >
                                <p>{text.clickToOpenInNewTab}</p>
                            </a> : <p>{text.notAvailable}</p>}
                        </div>
                    </div>
                </div>
            ) :
                <div><p>{text.noItemFound}</p></div>
            }
        </div>
    )
}

export default Item