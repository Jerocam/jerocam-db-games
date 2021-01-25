import React, { useEffect, useState } from 'react';
import { Jumbotron, Button } from 'react-bootstrap';
import { FaGamepad } from 'react-icons/fa';

export default function InfoGames(){

    const [games, setGames] = useState([]);

    useEffect(()=>{
        const dataGames = () => {
        fetch('https://rawg.io/api/collections/must-play/games')
        .then(resp => resp.json())
        .then(({results}) => setGames(results))
       
        }
        dataGames()
    });
    
    return(
        <div className="fluid-container">
            <Jumbotron className="bg-img">
                <h1>Hello, Videogamer! <FaGamepad className="fsize"/></h1>
                <h4>
                    This is a simple videogame unit, using react <br/>to call API from RAWG videogames Database <br/>and get an information about top games and others.
                </h4>
                <div>
                    <Button href="https://rawg.io/" variant="light" size="lg" target="_blank">Learn More</Button>
                </div>
            </Jumbotron>
            <div className="container">
            <h2>Games 2020 Top</h2>
                <div className="row">
                    <ol>
                        {games.map((game, key) => (
                            <li className="shadow imgSize" key={key}>
                                <img className="mr-3 border border-dark" src={game.background_image} alt="imgame" />
                                <h3>{game.name}</h3>
                            </li>
                        ))} 
                    </ol>
                </div>
               
            </div>
           
        </div>
    );
}


