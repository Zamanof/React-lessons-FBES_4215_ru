import React, {Component} from 'react';
import './random-episodes.css'
import RMService from "../../api-services/RMService";

class RandomEpisodes extends Component {
    service = new RMService()
    state = {
        name: null,
        year: null,
        director: null,
        description:null,
        image: null
    }
    constructor() {
        super();
        this.updateResources()
    }
    updateResources = ()=>{
        const id = Math.floor(Math.random()*20 + 1)
        this.service.getEpisodeById(id)
            .then((episode)=>{
                this.setState((old_state)=>{
                    const year = episode.air_date.split(', ')[1]
                    const s = episode.episode.slice(1, 3)
                    const e = episode.episode.slice(4, 6)
                    this.getEpisodeData(s, e)
                    return{
                        name: episode.name,
                        year: year
                    }
                })
            })
    }
    getEpisodeData = (season, episode)=>{
        this.service.getOMDBData(season, episode)
            .then((data)=>{
                this.setState((old_state)=>{
                    return{
                        image: data.Poster,
                        director: data.Director,
                        description: data.Plot
                    }
                })
            })

    }
    render() {
        const {name, year, director, description, image} = this.state
        return (

            <div
                className="random-episodes alert alert-dismissible alert-light rounded">
                <img className="episode-image"
                     src={image}/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className='term'>Year:</span>
                        <span>{year}</span>
                    </li>
                    <li className="list-group-item">
                        <span className='term'>Director:</span>
                        <span>{director}</span>
                    </li>
                    <li className="list-group-item">
                        <span className='term'>Description: </span>
                        <span>{description}</span>
                    </li>
                </ul>
            </div>
            </div>
        );
    }
}

export default RandomEpisodes;