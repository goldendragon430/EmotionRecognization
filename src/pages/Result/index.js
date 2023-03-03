import React, { useState } from 'react'
import BaseLayout from '../../components/BaseLayout';
import { useNavigate } from 'react-router-dom';
import { Container,StyledButton} from './styles';

import photo0 from '../../assets/value0.png'
import photo1 from '../../assets/value1.png'
import photo2 from '../../assets/value2.png'
import photo3 from '../../assets/value3.png'
import photo4 from '../../assets/value4.png'
import photo5 from '../../assets/value5.png'
import photo6 from '../../assets/value6.png'

import { useLocation } from "react-router-dom";
const Result = (props) => {
  return (
    <BaseLayout children = {<ResultContent/>}>
    </BaseLayout>
  )
}
export default Result;
const ResultContent = () =>{ 
  const navigate = useNavigate()
  const data = useLocation(); 
  var photo;
  switch(data.state){
    case 0:photo = photo0;break;
    case 1:photo = photo1;break;
    case 2:photo = photo2;break;
    case 3:photo = photo3;break;
    case 4:photo = photo4;break;
    case 5:photo = photo5;break;
    case 6:photo = photo6;break;
  }
  const width = window.innerWidth;
  const camWidth = width>768?400:350;
  const [step,setStep] = useState(1)
  const handleClick = ()=>{
     setStep(step + 1)
  }
  return (
    <Container>
      {  step==0 ? <h1 style = {{width:'80%'}}>
        Aguarde enquanto nosso algoritmo avalia
        as emoções que foram
          mapeadas na sua face...
        </h1>:
        <h1 style = {{width:'80%'}}>Veja o que as suas emoções dizem sobre a sua preferência:
        </h1>
        }
         
      {
          step == 0 ? <StyledButton onClick={handleClick}>
          next
        </StyledButton>:
        <div>
          
        <img src = {photo} style = {{width:camWidth}}/>
         
        </div>
      }
    </Container>
  )
}