import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGifts } from "../../Redux/actions";
import GiftCard from "../GiftCard";

const Catalog = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGifts())
    }, [dispatch]);

    const allGifts = useSelector((state) => state.gifts);

    return(
        <div className="Catalog">
            {
                allGifts.map((gift) => {
                    return(
                        <div>
                            <GiftCard
                                title={gift.title}
                                description={gift.description}
                                price={gift.price}
                                imgURL={gift.imgURL}
                                category={gift.category} 
                                id={gift.id} />
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Catalog;