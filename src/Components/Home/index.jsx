import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGifts } from "../../Redux/actions";
import GiftCard from "../GiftCard";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGifts())
    }, [dispatch]);

    const allGifts = useSelector((state) => state.gifts);

    const topGifts = allGifts.slice(-3);
    console.log(topGifts);

    return(
        <div className="Home">
            <div className="welcome section">
                <h1 className="welcome-title">Welcome to Giftify!!</h1>
                <h4 className="welcome-text">
                    Here you can keep track of your loved ones special date! While you are at it, don't miss on the perfect gift for that special ocassion. We've got a wide variety of options for friends, family, loved ones, even those we've not seen in a long time!
                </h4>
            </div>
            <div className="top-gifts section">
                <h3 className="top-gifts">Here's a selection of our most popular gifts!</h3>
                <div className="top-gifts container">
                {
                    topGifts?.map((gift) => {
                        console.log(gift.imgURL);
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
            </div>
        </div>
    )
}

export default Home;