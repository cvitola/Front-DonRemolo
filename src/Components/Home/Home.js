import React from 'react'
import { Button, H1, H2, P } from '../BasicStyles/BasicStyles'
import { Container, ImgHome } from './HomeStyles'
import logo from '../../assets/img/logo.jpg';
import delivery from '../../assets/img/deliveryLogo.png';

const Home = () => {
  return (
    <Container>
        <H1>Benvenuto a Don Remolo!</H1>
        <ImgHome src={logo} alt= "imagen home" />
        <P>Podés hacer tu pedido online ahora y lo retirás en la pizzeria cuando esté listo!</P>
        <P>También te lo podemos enviar con nuestro delivery</P>
        <ImgHome small="true" src={delivery} alt ="delivery" />
        <P>Recordá que el pago se realiza en efectivo cuando recibis tu pedido</P>
        <H2>Grazie por elegirnos</H2>
        <Button>Comenzar</Button>
    </Container>
  )
}

export default Home