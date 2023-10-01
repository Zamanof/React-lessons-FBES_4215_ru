import React, {Component} from 'react';

import './item-list.css'
import RMService from "../../api-services/RMService";
class ItemList extends Component {
    service = new RMService()
    state = {
        characters: []
    }
    componentDidMount() {
        this.service.getAllCharacters()
            .then((characters)=>{
                this.setState((old_state)=>{
                    return {
                        characters: characters
                    }
                })
            })
    }

    renderCharacters = (items)=>{
        return items.map((item)=>{
            return(
                <li className='list-group-item'
                    key={item.id}
                    onClick={()=>{
                        this.props.onCharacterSelected(item.id)
                    }}
                >
                    {item.name}
                </li>
            );
        });

    }
    render() {
        const {characters} = this.state
        return (
            <ul className='item-list list-group'>
                {this.renderCharacters(characters)}
            </ul>
        );
    }
}

export default ItemList;