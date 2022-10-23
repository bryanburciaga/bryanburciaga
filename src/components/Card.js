import React from 'react';
import CardItem from './CardItem';

function Card() {
  return (
    <div className='cards'>
        <h1>Check out these Epic Works</h1>
        <div className="cards__container">
            <ul className="cards__item">
                <CardItem />
            </ul>
        </div>
    </div>
  )
}

export default Card