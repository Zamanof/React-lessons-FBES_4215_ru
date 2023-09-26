import React, {Component} from 'react';

import './header.css'
class Header extends Component {
    render() {
        return (
            <div className="header d-flex">
                <h3>
                    <a href="#">
                        R & M
                    </a>
                </h3>

                <ul className="d-flex">
                    <li>
                        <a href="#">
                            Characters
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Episodes
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            Locations
                        </a>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;