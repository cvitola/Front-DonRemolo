import React ,{useState} from 'react'
import { ContainerCount, Control, Btn} from './CountStyles';

const Count = () => {

  const [cant, setCant] = useState(0);
  const handleAdd = () =>{
    
    setCant(cant+1)
  }

  const handleSubs = () =>{
    if (cant > 0) {
      setCant(cant-1)
    } else {
      alert("No se puede quitar mas")
    }
  }
  return (
    <ContainerCount>
      <p>Cantidad</p>
      <Control>
          <Btn onClick={handleSubs}>-</Btn>
          <input name={cant} value={cant} disabled/>
          <Btn onClick={handleAdd}>+</Btn>
      </Control>
</ContainerCount>
  )
}

export default Count