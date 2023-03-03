import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import BaseLayout from '../../components/BaseLayout';
import { Container,StyledButton,Title1,Title2,Subtitle,Content,Subtitle2 } from './styles';
const Home = (props) => {
  return (
    <BaseLayout children = {<HomeContent/>}>
    </BaseLayout>
  )
}

const HomeContent = () =>{ 
  const [step,setStep] = useState(0)
  const navigate = useNavigate()
  const handleClick = ()=>{
    if(step == 1) {
      navigate('/face')
    }
    setStep(step + 1)
  }
 
  return(
    <Container>
        {step==0?(<Title1 >O que as suas emoções dizem sobre a sua preferência  no segundo turno das eleições?</Title1>):
            (<Title2 >Como funciona o teste:</Title2>)
        }
        {step==0?
        (<Subtitle>Estou ciente de que este teste utiliza a minha webcam e captura as minhas expressões faciais para análise por inteligência artificial. Minhas imagens não ficarão armazenadas em nenhum banco de dados.  A minha participação neste teste não dá autorização ao IPESO para divulgar a minha imagem. O IPESO declara que não utiliza nenhum meio de rastreamento do meu perfil tais como cookies e acesso a dados armazenados no cache do meu navegador e informações que permitam me identificar.
            Eu autorizo o IPESO a registrar apenas o resultado matemático da análise das imagens obtidas para efeito de aprendizado de máquina.
        </Subtitle>):
        (<Subtitle2>
            <Content >
               1. Você vai assistir a uma sequência de fotos com a sua webcam ligada.
            </Content>
            <Content  >
                 2. A webcam vai registrar as suas expressões faciais durante o teste.
            </Content>
            <Content   >
                 3. As imagens serão analisadas pelo algoritmo do emotionlab IPESO.
            </Content>
            <Content  >
                 4. O algoritmo vai apontar a sua favorabilidade a cada um dos candidatos.
            </Content>
          </Subtitle2>)
        }
        <StyledButton onClick={handleClick} >Realizar o teste</StyledButton>
    </Container>
  ) 
}
export default Home;