import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>My portoflio!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/image-2.jpg'
              text='A app to record your personal Expenses with Python'
              label='Expense-list'
              path='https://expense-list001.herokuapp.com/'
            />
            <CardItem
              src='images/image-3.png'
              text='An inventory Management App with Node.JS, Express and MongoDB'
              label='Inventory Management'
              path to='http://project-2bryan.herokuapp.com/'
            />
            <CardItem
              src='images/image-4.png'
              text='An Covid tracker App for Mexico made with HTML, JavaScript, JSON and JQuery'
              label='Mexico Covid Tracker'
              path='https://jocular-belekoy-567b32.netlify.app/'
            />
          </ul>
          {/* <ul className='cards__items'>
            <CardItem
              src='images/image-2.jpg'
              text='A app to record your personal Expenses with Python'
              label='Expense-list'
              path='/services'
            />
            <CardItem
              src='images/image-2.jpg'
              text='An inventory Management App with Node.JS, Express and MongoDB'
              label='Inventory Management'
              path to='/services'
            />
            <CardItem
              src='images/image-2.jpg'
              text='An Covid tracker App for Mexico made with HTML, JavaScript, JSON and JQuery'
              label='Mexico Covid Tracker'
              path='/services'
            />
          </ul> */}
        </div>
      </div>
    </div>
  );
}

export default Cards;