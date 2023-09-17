import React from "react";
import './search-input.css'
const SearchInput = ({placeText})=>{
    return(
        <input
            className="form-control search-input"
            type="text" placeholder={placeText}
        />
    )
}

export default SearchInput