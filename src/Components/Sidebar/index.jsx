import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllGifts } from "../../Redux/actions";
import SearchBar from "../SearchBar";
import './index.css';

const Sidebar = ({ byPrice, byCategory, byTitle, byCombo }) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGifts())
    }, [dispatch]);


    function handleclick(e){
        e.preventDefault();
        dispatch(getAllGifts());
    }

    return(
        <div className="sidebar">
            <div className="searchbar-container">
                <SearchBar />
            </div>
            <div className="filters-container">
                <select className="filter" onChange={(e) => byPrice(e)}>
                    <option value="none" selected disabled hidden >Sort by price</option>
                    <option value='Lower price' key='Lower price' >Lower price</option>
                    <option value='Highest price' key='Highest price' >Highest price</option>
                </select>
                <select className="filter" onChange={(e) => byCategory(e)}>
                    <option value="none" selected disabled hidden >Sort by category</option>
                    <option value="Food" key='Food'>Food</option>
                    <option value="Gift Cards" key='Gift Cards'>Gift Cards</option>
                    <option value="Electronics" key='Electronics'>Electronics</option>
                    <option value="Health & Beauty" key='Health & Beauty'>Health & Beauty</option>
                    <option value="Clothing & Accessories" key='Clothing & Accessories'>Clothing & Accessories</option>
                    <option value="Miscelaneous" key='Miscelaneous'>Miscelaneous</option>
                </select>
                <select className="filter" onChange={(e) => byTitle(e)}>
                    <option value="none" selected disabled hidden >Sort alphabetically</option>
                    <option value="asc" key='asc'>A to Z</option>
                    <option value="desc" key='desc'>Z to A</option>
                </select>
                <select className="filter" onChange={(e) => byCombo(e)}>
                    <option value="none" selected disabled hidden >Combo packages</option>
                    <option value='combo' key='combo'>Show</option>
                    <option value='not combo' key='not combo'>Don't show</option>
                </select>
            </div>
            <button className="r-filters" onClick={(e) => {handleclick(e)}}>Remove Filters</button>
        </div>
    )
}

export default Sidebar;