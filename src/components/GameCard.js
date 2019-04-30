import React from 'react';
import styled from 'styled-components';


function GameCard({cardColor,active}){

  return(
    <Card
      cardColor={cardColor}
      active={active}
    />
  );
}

const Card = styled.div`
  width:250px;
  height:300px;
  border-radius:4px;
  border:1px solid #ffffff;

  background-color:${props => (props.active === true && props.cardColor) || 'grey'};

`
export default GameCard;
