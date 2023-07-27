var nodemailer=require('nodemailer');
var transporter=nodemailer.createTransport({
    service:'gmail',
    auth:{
        user: 'ramyasriyarramsetty@gmail.com',
        pass: 'avzbsslzoddaekgm'
    }

});
var mailOptions={
    from:'ramysriyarramsetty@gmail.com',
    to:'pravin.consensus@gmail.co',
    subject:'sending mail from Node-JS',
    text:'Ramyasri',
    text: '20A21A05J0'
};
transporter.sendMail(mailOptions,function(error,info){
    if(error)
    {
        console.log(error);
    }
    else{
        console.log('Email sent:'+ info.response);
    }
});