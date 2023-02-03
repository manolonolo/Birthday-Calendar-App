import React from "react";
import { Link } from 'react-router-dom'
import './index.css';

const GiftCard = ({ title, price, imgURL, category, id  }) => {
    return(
        <Link className='link' to = {`/gifts/${id}`}>
            <div className="gift-card">
                <img className='gift-image' src={imgURL} alt="not found"/>
                <h3 className='gift-title'>{title}</h3>
                <h5 className='gift-price'>{price}</h5>
                <h5 className='gift-category'>Category: {category}</h5>
            </div>
        </Link>
    )
}

export default GiftCard;