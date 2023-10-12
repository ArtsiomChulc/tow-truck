import React from 'react';
import {DBPrice} from "./DB";

import s from './priceBlock.module.scss'

const PriceBlock = () => {

    const element = DBPrice.map(el => {
        return (
            <li key={el.id} className={s.liPrice}>
                <span className={s.title}>{el.title}</span>
                <span className={s.descriptionPrice}>{el.description}</span>
                <span className={s.price}>{el.price}</span>
            </li>
        )
    })

    return (
        <ul>
            {element}
        </ul>
    );
};

export default PriceBlock;