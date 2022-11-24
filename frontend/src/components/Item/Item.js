import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types'

import styles from './Item.module.scss'
import { text } from '../../constants/constants'

// should do more styling on the button - hover classes, etc. 
const Item = ({ item }) => {
    return (
        <Card className={styles.card}>
            <Card.Body className={styles.innerBody}>
                <Card.Title>{item.title || `${text.noTitle}, topics: ${item.manual_tags}`}</Card.Title>
                <div className={styles.button}>
                    <Link
                        to={item._id}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {text.seeMore}
                    </Link>
                </div>
            </Card.Body>
        </Card>
    )
}

Item.propTypes = {
    item: PropTypes.shape({}),
}

export default Item