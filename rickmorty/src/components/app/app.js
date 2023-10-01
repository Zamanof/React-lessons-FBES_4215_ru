import React, {Component} from "react";
import './app.css'
import Header from "../header";
import RandomEpisodes from "../random-episodes";
import ItemList from "../item-list";
import CharacterDetails from "../character-details";

class App extends Component {
    state = {
        selectedCharacter: 3
    }
    onCharacterSelected = (id)=>{
        this.setState((state)=>{
            return{
                selectedCharacter : id
            }
        })
    }
    render() {
        return (
            <div>
                <Header/>
                <RandomEpisodes/>
                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onCharacterSelected={this.onCharacterSelected}/>
                    </div>
                    <div className="col-md-6">
                        <CharacterDetails selectedId={this.state.selectedCharacter}/>
                    </div>

                </div>
            </div>
        )
    }
}

export default App