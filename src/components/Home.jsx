import React from 'react';

import Beers from '../assets/beers.png';
import RandomBeer from '../assets/random-beer.png';
import NewBeer from '../assets/new-beer.png';

import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div>
            <Link to="/beers">
                <img className="object-cover w-full" src={Beers} alt=""></img>
                <h1 className="text-3xl text-blue-600 hover:text-blue-800 visited:text-purple-600>Beers">All Beers</h1>
                <p>
                Excepteur minim mollit fugiat culpa sint veniam qui proident
            proident. Commodo cillum ea irure nostrud laboris velit exercitation
            pariatur dolore. Quis proident commodo qui sint duis id ad do nisi
            occaecat nostrud. 
                </p>
            </Link>
            <Link to="/random-beer">
                <img className="object-cover w-full" src={RandomBeer} alt=""></img>
                <h1 className="text-3xl text-blue-600 hober:text-blue-800 visited:text-purple-600>Beers">Random Beer</h1>
                <p>
                Exercitation deserunt adipisicing labore laborum tempor dolore
            ullamco id elit aliquip pariatur ullamco adipisicing reprehenderit.
            Do exercitation eiusmod sit dolor officia veniam reprehenderit. Ut
            elit eiusmod velit ad. 
                </p>
            </Link>
            <Link to="/new-beer">
                <img className="object-cover w-full"src={NewBeer} alt=""></img>
                <h1 className="text-3xl text-blue-600 hover:text-blue-800 visited:text-purple-600>Beers">New Beer</h1>
                <p>
                Dolor nostrud sunt fugiat Lorem amet dolor do sit laboris. Eu
            deserunt sunt excepteur dolore in elit officia ex aute proident
            laboris aute eu. Lorem cupidatat non sint laborum culpa sunt.    
                </p>
            </Link>
        </div>

    )
}

export default Home; 