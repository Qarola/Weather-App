import React from 'react';
import './Card.css';

import Card from './Card';


export default function Cards({cities, onClose}) { 
  console.log(cities);
  if(cities) {
    return (
      <div className='cards'>
        {cities.map(c => <Card 
            id = {c.id}
            key={c.id}
            max={c.max}
            min={c.min}
            name={c.name}
            img={c.img}
            onClose={() => onClose(c.id)}
            
          /> )}
      </div>
    );
  } else {
    return(
      <div>No cities</div>
    )
  }
}
