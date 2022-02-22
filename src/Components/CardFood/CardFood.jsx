import React from 'react'
import { AddButton, Btn, Card, Control, Count, Details, Visual } from './CardFoodStyles'

/* Falta modificar Diseño */

const CardFood = () => {
  return (
    <Card>
        <Visual />
        <Details>
            <h2>Jamón y Morron</h2>
            <h3>$450</h3>
            <Count>
                <p>Cantidad</p>
                <Control>
                  <Btn>-</Btn>
                  <input defaultValue={0}/>
                  <Btn>+</Btn>
                </Control>
                
            </Count>
            <AddButton>Agregar</AddButton>
        </Details>
    </Card>
  )
}

export default CardFood