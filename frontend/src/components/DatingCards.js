import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './Card.css';
import axios from './axios';

const DatingCards = () => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get("/api/dating/cards");
            setPeople(req.data);
        }
        fetchData();
    }, []);

    return (
        <div className="datingCards">
            <div className="datingCards__cardContainer">
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person._id} // Asegúrate de usar un identificador único
                        preventSwipe={['up', 'down']}
                    >
                        <div
                            style={{ backgroundImage: `url(${person.imageUrl})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        </div>
    );
};

export default DatingCards;