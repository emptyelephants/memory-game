import React, {Component} from 'react';
import styled from 'styled-components';

import GameCard from './GameCard.js';



class GameBoard extends Component{

  getColors(){
    const arrayOfColors = ['red', 'blue', 'green','pink','cyan'];
    return arrayOfColors;
  }
  assembleCards(){

  }
  render(){
    return(
      <GameGrid>
        <GameCard
          cardColor={'red'}
          active
         />
        <GameCard
        cardColor= {'blue'}
      active
    />
        <GameCard />
      </GameGrid>
    );
  }
}



const GameGrid = styled.div`
  display:flex;
  flex-wrap:wrap;
  justify-content: space-around;
  max-width:1200px;


`
export default GameBoard;
