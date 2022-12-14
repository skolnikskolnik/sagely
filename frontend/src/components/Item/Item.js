import React from 'react'
import { Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card'
import PropTypes from 'prop-types'

import styles from './Item.module.scss'
import { text } from '../../constants/constants'

const Item = ({ item }) => (
    <Card className={styles.card}>
        <Card.Body className={styles.innerBody}>
            <Card.Title className={styles.text}>{item.title || `${text.noTitle}, topics: ${item.manual_tags}`}</Card.Title>
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

Item.propTypes = {
    item: PropTypes.shape({}),
}

export default Item