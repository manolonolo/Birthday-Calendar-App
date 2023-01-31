import React, { useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getGiftById } from "../../Redux/actions";

const Details = () => {

    const dispatch = useDispatch();

    const { id } = useParams();

    const giftDetail = useSelector((state) => state.giftId)

    useEffect(() => {
        dispatch(getGiftById(id))
    }, [dispatch, id]);

    return(
        <div className="details">
            <img src={giftDetail.imgURL} alt='gift'/>
            <h1>{giftDetail.title}</h1>
            <h3>{giftDetail.description}</h3>
            <h3>{giftDetail.price}</h3>
            <h5>{giftDetail.category}</h5>
        </div>
    )

}

export default Details;