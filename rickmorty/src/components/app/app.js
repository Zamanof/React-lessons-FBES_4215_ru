import React, {Component} from "react";
import './app.css'
import Header from "../header";
import RandomEpisodes from "../random-episodes";
import ItemList from "../item-list";
import CharacterDetails from "../character-details";

class App extends Component{
    render() {
        return(
            <div>
                <Header/>
                <RandomEpisodes/>
                <ItemList/>
                <CharacterDetails/>
            </div>
        )
    }
}
export default App