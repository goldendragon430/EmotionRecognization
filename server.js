const AWS = require('aws-sdk')
const fs = require('fs');

AWS.config.update({
  accessKeyId: 'AKIAYV2545V5MOLFORW5',
   secretAccessKey: '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',
   region: 'us-east-1'
 });

async function readfile(filepath){
   var bitmap = fs.readFileSync(filepath);
   return Buffer.from(bitmap,"base64");
}

async function mainfun(filepath){

  const client = new AWS.Rekognition();
  const data = await readfile(filepath)
 
  const params = {
     Image: {
      "Bytes" : data,
     },
    Attributes: [
        "ALL"
    ]
  }

 client.detectFaces(params, function(err, response) {
     if (err) {
       console.log(err, err.stack); // an error occurred
     } else {
       
       response.FaceDetails.forEach(data => {
              console.log(data)
           }) // for response.faceDetails
     } // if
   }); 
}
mainfun("photo1.png")