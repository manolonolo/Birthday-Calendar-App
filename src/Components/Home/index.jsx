import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllGifts } from "../../Redux/actions";

const Home = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGifts())
    }, [dispatch]);

    const allGifts = useSelector((state) => state.gifts);

    return(
        <div className="Home">
            {
                allGifts.map((gift) => {
                    return(
                        <div>
                        <h1>{gift.title}</h1>
                        <h1>{gift.description}</h1>
                        <h1>{gift.price}</h1>
                        <h1>{gift.image}</h1>
                        <h1>{gift.category}</h1>
                    </div>
                    )
                })
            }
        </div>
    )
}

export default Home;