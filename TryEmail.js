const functions=require('firebase-functions');
const {WebhookClient}=require('dialogflow-fulfillment');
const nodemailer=require('nodemailer');

const transporter=nodemailer.createTransport({

    service:'gmail',
    auth:{
user:'vrushjyotik@gmail.com',
pass:'pqlamzpqlamz'

    }
});




//const agent =new WebhookClient({request,response});



function sendEmailHandler(agent){
const{email,name}=agent.parameters;

const mailOptions={
from:'vrushjyotik@gmail.com',
to:email,
subject:'email from chatbot',
text: 'hello'

};

transporter.sendMail(mailOptions,function (err,info) {
    if(err)
    {
        console.log(err);
    }
});

}


let intentMap=new Map();
intentMap.set('sendEmail',sendEmailHandler);

agent.handleRequest(intentMap);