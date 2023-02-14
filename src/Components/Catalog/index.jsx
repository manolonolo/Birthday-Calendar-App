import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGifts, sortByPrice, orderByTitle, sortByCategory, showCombo } from "../../Redux/actions";
import GiftCard from "../GiftCard";
import Sidebar from "../Sidebar";
import './index.css';

const Catalog = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGifts())
    }, [dispatch]);

    const allGifts = useSelector((state) => state.gifts);
    console.log(allGifts);

    function byPrice(e){
        e.preventDefault();
        dispatch(sortByPrice(e.target.value));
    }

    function byTitle(e){
        e.preventDefault();
        dispatch(orderByTitle(e.target.value));
    }

    function byCategory(e){
        e.preventDefault();
        dispatch(sortByCategory(e.target.value));
    }

    function byCombo(e){
        e.preventDefault();
        dispatch(showCombo(e.target.value));
    }

    return(
        <div className="Catalog">
            <div className="catalog-container">
                <div className="sidebar-container">
                    <Sidebar
                        byPrice={byPrice}
                        byTitle={byTitle}
                        byCategory={byCategory}
                        byCombo={byCombo}
                    />
                </div>
                <div className="gifts-container">
                {
                    allGifts ? allGifts.map((gift) => {
                        return(
                            <div className="gifts">
                                <GiftCard
                                    title={gift.title}
                                    price={gift.price}
                                    imgURL={gift.imgURL}
                                    category={gift.category} 
                                    id={gift.id}
                                />
                            </div>
                        )
                    }) : 
                    <div className="not-found">
                        <h3>Sorry, there are no gifts like that.</h3>
                    </div>
                }
                </div>
            </div>
        </div>
    )
}

export default Catalog;