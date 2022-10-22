import React from 'react';
import './GameCards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className='cards'>
      <h1>Select Games</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem 
              src='images/count.gif'
              label='Counting'
              text='Game Description'
              path='/games'
            />
            <CardItem
              src='images/add.gif'
              label='Addition'
              text='Game Description'
              path='/games'
            />
            <CardItem
              src='images/subtract.gif'
              label='Subtraction'
              text='Game Description'
              path='/games'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/mul.gif'
              label='Multiplication'
              text='Game Description'
              path='/games'
            />
            <CardItem
              src='images/div.gif'
              label='Division'
              text='Game Description'
              path='/games'
            />
            <CardItem
              src='images/wordproblem.gif'
              label='Word Problem'
              text='Game Description'
              path='/games'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;