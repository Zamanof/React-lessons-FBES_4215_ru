import React from "react";

const SearchInput = ({placeText})=>{
    const searchStyle = {
        fontSize: '30px',
        color: 'red'
    }

    return(
        <input 
            style={searchStyle}
            type="text" placeholder={placeText}
        />
    )
}

export default SearchInput