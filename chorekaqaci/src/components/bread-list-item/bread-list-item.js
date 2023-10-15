import React from 'react';
import './bread-list-item.css'

const BreadListItem = ({bread}) => {
    const {name, manufacturer} = bread
    return (
        <div>
            <>
                <span>{name}</span>
                <span>{manufacturer}</span>
            </>
        </div>
    );
};

export default BreadListItem;