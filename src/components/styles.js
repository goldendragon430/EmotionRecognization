import styled from 'styled-components'
export const Container = styled.div`
width:100%;
height:100%;
background:gray;
display:flex;
justify-content:center;
align-items:center
`
export const Content = styled.div`
width:1024px;
height:768px;
 background:#00205b;
 display:block;
 justify-content:center;
 align-items:center;
 @media (max-width: 768px) {
    width:100%;
    height:100%;
 }
 
` 
export const Header = styled.div`
margin-right:20px;
margin-top:20px;
display:flex;
justify-content:right;
`
export const MainBody = styled.div`
margin-top:50px;
 
`
export const Footer = styled.div`
position:absolute;
margin-left:20px;
bottom:2%;
@media (max-width: 768px) {
  display:none;
 }
`
export const LogoImg = styled.img`
@media (max-width: 768px) {
    width:36%;
   }
  
`