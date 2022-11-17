import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';

export const Header = (props) => {

    return (
        <div>
            <header>
                <Link to="/" className="homeLink">
                    <FontAwesomeIcon icon={faHouse} size="3x" className='homeButton'/>
                </Link>
                <h1>Kogan App - {props.pageName}</h1>
            </header>
        </div>
    )

};