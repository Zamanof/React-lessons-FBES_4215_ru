import React, {Component} from "react";
import './app.css'
import Header from "../header";
import RandomEpisodes from "../random-episodes";
import CharactersPage from "../characters-page";
import EpisodesPage from "../episodes-page";


import RMService from "../../api-services/RMService";

class App extends Component {
    service = new RMService()
    render() {
        return (
            <div>
                <Header/>
                <RandomEpisodes/>
                <CharactersPage getData = {this.service.getAllCharacters}/>
                <EpisodesPage getData = {this.service.getAllEpisodes}/>

            </div>
        )
    }
}

export default App