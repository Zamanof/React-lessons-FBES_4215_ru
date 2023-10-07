import React, {Component} from 'react';
import './item-list.css'

class ItemList extends Component {

    state = {
        itemList: []
    }
    componentDidMount() {
        const {getData} = this.props
        getData()
            .then((itemList)=>{
                this.setState({itemList})
            })
    }

    renderCharacters = (items)=>{
        return items.map(({id, name})=>{
            return(
                <li className='list-group-item'
                    key={id}
                    onClick={()=>{
                        this.props.onCharacterSelected(id)
                    }}
                >
                    {name}
                </li>
            );
        });

    }
    render() {
        const {itemList} = this.state
        return (
            <ul className='item-list list-group'>
                {this.renderCharacters(itemList.slice(0, 5))}
            </ul>
        );
    }
}

export default ItemList;