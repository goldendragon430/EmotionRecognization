import React,{useEffect, useState,useRef } from 'react'
import BaseLayout from '../../components/BaseLayout';
import { Navigate, useNavigate } from 'react-router-dom';
import { Container,StyledButton,Title} from './styles';
import Webcam from "react-webcam";
import photo1 from '../../assets/photo1.png'
import photo2 from '../../assets/photo2.png'
import photo3 from '../../assets/photo3.png'
import photo4 from '../../assets/photo4.jpg'
import photo5 from '../../assets/photo5.jpg'
import photo6 from '../../assets/photo6.jpg'
import {Buffer} from 'buffer'
const AWS = require('aws-sdk')
AWS.config.update({
  accessKeyId: 'AKIAYV2545V5MOLFORW5',
   secretAccessKey: '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',
   region: 'us-east-1'
 });

const client = new AWS.Rekognition();
const Photo = (props) => {
  return (
    <BaseLayout children = {<PhotoContent/>}>
    </BaseLayout>
  )
}
export default Photo;
const PhotoContent = () =>{ 
  const width = window.innerWidth;
  const camWidth = width>768?400:300;
  const step = useRef(0);
  const [photo,setPhoto] = useState(photo1)
  const webcamRef = React.useRef(null);
  const navigate = useNavigate()
  const result1 = useRef(0) ,result2 = useRef(0)
  useEffect(() => {
    const timeout = setInterval(() => {

      if(step.current==6) 
      {
       var val = (result1.current - result2.current)/3
       var result = 0;
       if(val <= -60) result = 6
       else if(val <= -40 && val > -60) result = 5
       else if(val <= -20 && val > -40) result = 4
       else if(val <= 0 && val > -20) result = 3
       else if(val <= 20 && val > 0) result = 2
       else if(val <= 40 && val > 20) result = 1
       else if(val <= 60) result = 0

        navigate('/Result',{state:result })
      }   
      if(step.current < 6)
        capture()
      }, 3000);
  
     return () => clearInterval(timeout);
  }, []);


  const capture = async  () => {
    if(webcamRef.current)
    {
      const imageBase64String = await webcamRef.current.getScreenshot();
      const base64Image = imageBase64String.split(';base64,').pop();  
        const imageBuffer = new Buffer(base64Image, 'base64');    
        const params = {
         Image: {
          "Bytes" : imageBuffer,
         },
        Attributes: [
            "ALL"
        ]
        }
     try{
            client.detectFaces(params, function(err, response) {
              if (err) {
                console.log(err, err.stack); // an error occurred
              } else {
                step.current += 1
                switch(step.current){
                  case 1: setPhoto(photo2);break;
                  case 2: setPhoto(photo3);break;
                  case 3: setPhoto(photo4);break;
                  case 4: setPhoto(photo5);break;
                  case 5: setPhoto(photo6);break;
                }
                
                if(response.FaceDetails)
                {
                  var  res = response.FaceDetails[0].Emotions
                  var temp = 0
                  res.forEach(ele => {
                    if(ele.Type == "CALM")   temp += ele.Confidence *1
                    if(ele.Type == "HAPPY")   temp += ele.Confidence *3
                    if(ele.Type == "SURPRISED")   temp += ele.Confidence *2
                    if(ele.Type == "FEAR")   temp += ele.Confidence *(-2)
                    if(ele.Type == "SAD")   temp += ele.Confidence *(-3)
                    if(ele.Type == "ANGRY")   temp += ele.Confidence *(-3)
                    if(ele.Type == "DISGUSTED")   temp += ele.Confidence *(-3)
                    if(ele.Type == "CONFUSED")   temp += ele.Confidence *1
                  });
                  step.current%2 == 0? result1.current += temp/17:result2.current +=temp/17
                }
                console.log("val1",result1.current,"val2",result2.current)
              }          
            })
          }
     catch(error){
         console.log(error)
     }
        
    }
  }
  return (
    <Container>
      <Title>Ajuste a sua face dentro desta imagem:</Title>
      <Webcam
        audio={false}
        height={100}
        screenshotFormat="image/png"
        width={100}
        ref = {webcamRef}
      />
      <img src = {photo} style ={{width:camWidth}}/>
      {/* <button onClick={()=>{navigate('/Result',{state:30})}} >Avacar</button> */}
         </Container>
  )
}