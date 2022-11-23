import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import PropTypes from 'prop-types'

import styles from './Item.module.scss'
import { text } from '../../constants/constants'

const Item = ({ item }) => {
    const onClick = () => console.log(item._id)

    return (
        <Card className={styles.card}>
            <Card.Body className={styles.innerBody}>
                <Card.Title>{item.title || `${text.noTitle}, topics: ${item.manual_tags}`}</Card.Title>
                <Button className={styles.button} onClick={onClick}>{text.seeMore}</Button>
            </Card.Body>
        </Card>
    )
}

Item.propTypes = {
    item: PropTypes.shape({}),
}

export default Item