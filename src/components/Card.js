import React from 'react';

const Card = ({ card }) => (
  <div className={`window active card card-${card.type || 'memory'}`}>
    <div className="title-bar card-type">
      <div className="title-bar-text">
        {card.type} - {card.name}
      </div>
      <div className="title-bar-controls">
        <button aria-label="Minimize"></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close"></button>
      </div>
    </div>
    {/* <img src={card.imageUrl} alt={card.name} className="card-image" /> */}
    <div className="window-body has-space">
      <p className="card-description">{card.description}</p>
      <div class="combobox">
        <ul role="listbox" className="card-tags">
          {card.tags.map((tag, index) => (
            
            <li key={index} className="" role="option">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Card;