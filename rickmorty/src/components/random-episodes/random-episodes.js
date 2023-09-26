import React, {Component} from 'react';
import './random-episodes.css'
class RandomEpisodes extends Component {
    render() {
        return (
            <div
                className="random-episodes alert alert-dismissible alert-light rounded">
                <img className="episode-image"
                     src='https://m.media-amazon.com/images/M/MV5BNzlhNGI0MTUtOWZlNS00ZmQ2LTk2NTYtMGMwMzRmOGViZWIyXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg'/>
            <div>
                <h4>Pilot</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className='term'>Year:</span>
                        <span>2013</span>
                    </li>
                    <li className="list-group-item">
                        <span className='term'>Director:</span>
                        <span>Justin Roiland</span>
                    </li>
                    <li className="list-group-item">
                        <span className='term'>Plot: </span>
                        <span>A strangely eccentric genius scientist and inventor moves into the home of his daughter and her family and begins to strongly influence his young grandson.</span>
                    </li>
                </ul>
            </div>
            </div>
        );
    }
}

export default RandomEpisodes;