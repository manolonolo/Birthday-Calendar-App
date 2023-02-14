import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getGiftByTitle } from "../../Redux/actions";

const SearchBar = () => {

    const dispatch = useDispatch();
    const [title, setTitle] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        if(title !== ''){
            dispatch(getGiftByTitle(title));
            setTitle('');
        } else {
            alert('Please enter a country name')
        }
    }

    function handleChange(e){
        e.preventDefault();
        setTitle(e.target.value);
    }
    
    return(
        <div className="searchbar">
            <input className="input" type='text' value={title} placeholder='Search for a gift...' onChange={(e) => handleChange(e)}/>
            <button className='btnsearch' type='submit' onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    )
}

export default SearchBar;