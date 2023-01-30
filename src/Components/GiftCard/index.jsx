import React from "react";
import { Link } from 'react-router-dom'

const GiftCard = ({ title, description, price, image, category, id  }) => {
    return(
        <Link className='link' to = {`/gifts/details/${id}`}>
            <div className="gift-card">
                <img className='image' src={image} alt="not found" width='100px' height='50px'/>
                <h3 className='text'>{title}</h3>
                <h5 className='text'>{description}</h5>
                <h5 className='text'>{price}</h5>
                <h5 className='text'>Category: {category}</h5>
            </div>
        </Link>
    )
}

export default GiftCard;