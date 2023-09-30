import React, {Component} from 'react';

import './item-list.css'
class ItemList extends Component {
    render() {
        return (
            <ul className='item-list list-group'>
                <li className='list-group-item'>
                    Rick Sanchez
                </li>
                <li className='list-group-item'>
                    Morty Smith
                </li>
                <li className='list-group-item'>
                    Summer Smith
                </li>
                <li className='list-group-item'>
                    Beth Smith
                </li>
            </ul>
        );
    }
}

export default ItemList;