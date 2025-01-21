import React, { useState, useEffect, useMemo } from 'react';
import Header from './components/Header';
import Card from './components/Card';
import './App.css';
import PersonIcon from '@mui/icons-material/Person';

function App() {
    const cardData = useMemo(() => [
        {
            title: "Ejemplo de Título 1",
            content: "Este es un ejemplo de contenido.",
            icon: <PersonIcon />,
            imageUrl: "https://media.istockphoto.com/id/1944687241/photo/portrait-of-young-girl-with-beautiful-skin-and-make-up.jpg?s=1024x1024&w=is&k=20&c=UNX9HiriILz16EuJ1M1RYB7JPB2FBlxQfjv9FV9U0gg="
        },
        {
            title: "Ejemplo de Título 2",
            content: "Este es un ejemplo de contenido.",
            icon: <PersonIcon />,
            imageUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Ejemplo de Título 3",
            content: "Este es un ejemplo de contenido.",
            icon: <PersonIcon />,
            imageUrl: "https://images.unsplash.com/photo-1543096222-72de739f7917?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "Ejemplo de Título 4",
            content: "Este es un ejemplo de contenido.",
            icon: <PersonIcon />,
            imageUrl: "https://plus.unsplash.com/premium_photo-1674776598522-c80e12f96e1f?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }
    ], []);

    const [shuffledCards, setShuffledCards] = useState([]);

    useEffect(() => {
        const shuffleArray = (array) => {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
            return array;
        };

        setShuffledCards(shuffleArray([...cardData]));
    }, [cardData]);

    return (
        <div className="App">
            <Header />
            {shuffledCards.map((card, index) => (
                <Card 
                    key={index}
                    title={card.title} 
                    content={card.content} 
                    icon={card.icon} 
                    imageUrl={card.imageUrl} 
                />
            ))}
        </div>
    );
}

export default App;