import styled from 'styled-components'

export const Container = styled.div`
 z-index:1;
 color:white;
 display: grid;
 justify-items: center;
 background:#00205b;
 padding-bottom:30px;
 
`
export const StyledButton = styled.button`
    width: 150px;
    height: 30px;
    background:'white';
    font-family: sans-serif;
    font-size: 15px;
    font-weight: 700;
    margin-top:50px;
    @media (max-width: 768px) {
      margin-top:30px;
    }
    `
export const Title1 = styled.h1`
width : 65%;
@media (max-width: 768px) {
  width : 90%;
}

`
export const Title2 = styled.h1`
width : 80%;
text-align:center;
@media (max-width: 768px) {
  width : 90%;
}

`
export const Subtitle = styled.p`
width:65% !important;
margin-top:30px;
font-size:18px !important;
@media (max-width: 768px) {
  width : 90% !important;
}
`
export const Subtitle2 = styled.div`
 padding:20px;

`
export const Content = styled.p`
margin-top:0px;
margin-bottom:25px;
`