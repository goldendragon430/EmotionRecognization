import React  from 'react'
import mark from '../assets/mark.png'
import foot from '../assets/footer.png'
import { Container, Content,Header,MainBody,Footer,LogoImg } from './styles'
const BaseLayout = (props)=>{
    const {children} = props
    return (
        <Container >
            <Content >
               <Header className = "header">
                    <LogoImg src = {mark}/>
                </Header>
                <MainBody className='content'>
                    {children}
                </MainBody>
                <Footer className='footer'>
                    <img src = {foot}/>
                </Footer>
            </Content>
        </Container>
    )
}
export default BaseLayout