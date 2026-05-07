import React from 'react';

const Card = ({ card }) => (
    <div className={`card card-${card.type || 'memory'}`}>
        <div className="card-type">{card.type?.toUpperCase()}</div>
        {/* <img src={card.imageUrl} alt={card.name} className="card-image" /> */}
        <h2>{card.name}</h2>
        <p className="card-description">{card.description}</p>
        <div className="card-tags">
            {card.tags.map((tag, index) => (
                <span key={index} className="tag">
                    {tag}
                </span>
            ))}
        </div>
    </div>
);

export default Card;