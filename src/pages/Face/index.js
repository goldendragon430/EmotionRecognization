import React from 'react'
import BaseLayout from '../../components/BaseLayout';
import { useNavigate } from 'react-router-dom';
import { Container,StyledButton,Title} from './styles';
import Webcam from "react-webcam";

  
const Face = (props) => {
  return (
    <BaseLayout children = {<FaceContent/>}>
    </BaseLayout>
  )
}
export default Face;
const FaceContent = () =>{ 
  const navigate = useNavigate()
  const width = window.innerWidth;
  const camWidth = width>768?400:300;
  const handleClick = ()=>{
    navigate('/photo')
  }
  const webcamRef = React.useRef(null);
  const capture = async  () => {
    if(webcamRef.current)
    {
      const imageBase64String = await webcamRef.current.getScreenshot();
      console.log(imageBase64String) 
    }
  }
  return (
    <Container>
      <Title>Ajuste a sua face dentro desta imagem:</Title>
      <Webcam
        audio={false}
        screenshotFormat="image/png"
        ref = {webcamRef} 
        width = {camWidth}
        height = {camWidth}
 />
      <StyledButton onClick={handleClick} >AVANÇAR</StyledButton>
         </Container>
  )
}