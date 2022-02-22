import React, {useState, useEffect} from 'react';
import {pizzas} from '../../assets/Constants/Constants';
import {Container, H1} from '../../Components/BasicStyles/BasicStyles';
import CardFood from '../../Components/CardFood/CardFood';

const Pizza = () => {

    const [arrayPizzas, setArrayPizzas] = useState([]);
    
    useEffect( () => {
        setArrayPizzas(pizzas);
    },[])
    

  return (
      <>
        <H1>NUESTRAS PIZZAS</H1>
        <Container>
            {
                arrayPizzas.map( pi => (
                    <CardFood dato={pi} key={pi.id} />
                ))
            }
        </Container>
      </>

  )
}

export default Pizza