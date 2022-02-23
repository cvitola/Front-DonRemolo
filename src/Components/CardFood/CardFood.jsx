import React from 'react'
import { Button } from '../BasicStyles/BasicStyles';
import { Card } from './CardFoodStyles';
import  Count  from './Count/Count';
import jamonYMorron from '../../assets/img/jamonymorron.jpg';

/* Falta modificar Diseño */

const CardFood = ({dato}) => {
  return (
    <Card>
      <img src={jamonYMorron} alt="img1" />
      <h4>{dato.productName}</h4>
      <p>{dato.price}</p>
      <Count />
      <Button>Agregar</Button>
    </Card>

  )
}

export default CardFood