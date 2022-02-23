import React, {useState, useEffect} from 'react';
/*import {pizzas} from '../../assets/Constants/Constants';*/
import {Container, H1, Snipper} from '../../Components/BasicStyles/BasicStyles';
import CardFood from '../../Components/CardFood/CardFood';
import { getAllProducts } from '../../Axios/Axios';

const Pizza = () => {

    const [arrayPizzas, setArrayPizzas] = useState([]);
    const [loading, setLoading] = useState(false);

    const onGetAllProducts = async () =>{
        try{
            const response = await getAllProducts();
            setArrayPizzas(response.data);
        }
        catch(error){
            alert(error);
        }
    }
    useEffect( () => {
        setLoading(true);
        /*setArrayPizzas(pizzas);*/
        onGetAllProducts();
        setTimeout(() => {

            setLoading(false);
        }, 1500);

    },[])
    

  return (
      <>
        <H1>NUESTRAS PIZZAS</H1>
        <Container>
            {   
                loading ?
                    <Snipper />
                :
                arrayPizzas?.map( pi => (
                    <CardFood dato={pi} key={pi.id} />
                )) 
            }
        </Container>
      </>

  )
}

export default Pizza