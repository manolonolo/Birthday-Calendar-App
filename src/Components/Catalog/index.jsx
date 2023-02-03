import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGifts } from "../../Redux/actions";
import GiftCard from "../GiftCard";
import './index.css';

const Catalog = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGifts())
    }, [dispatch]);

    const allGifts = useSelector((state) => state.gifts);

    return(
        <div className="Catalog">
            <div className="gifts-container">
                {
                    allGifts.map((gift) => {
                        return(
                            <div className="gifts">
                                <GiftCard
                                    title={gift.title}
                                    price={gift.price}
                                    imgURL={gift.imgURL}
                                    category={gift.category} 
                                    id={gift.id} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Catalog;