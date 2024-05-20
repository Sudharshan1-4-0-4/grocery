// var http = require('http');
// var fs = require('fs');
// var url = require('url');
// var uc = require('uppercase');
const path = require('path');



// var address = 'http://localhost:4005/home.html?year=2020&month=feb';

// const q = url.parse(address, true);

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
   service : 'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "siddumsn1@gmail.com",
    pass: "ecdn dobk dvff shey",
  },
});

var options = {
    from: 'siddumsn1@gmail.com', // sender address
    to: "siddumsn2@gmail.com", // list of receivers
    subject: "msg from sudharshan...", // Subject line
    text: "hello this is from siddumsn1@gmail.com can you receive this one....", // plain text body
    html: "<b>Hello home ajkdjakhfiudf</b>", // html body
    attachments : [
      {
          filename : 'rough.pdf',
          path : path.join(__dirname, 'rough.pdf'),
          contentType : 'application/pdf'
      },
    ]
  }


// async..await is not allowed in global scope, must use a wrapper
async function main() {
    // send mail with defined transport object
    const info = await transporter.sendMail(options);
  
    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
  }
  
  main().catch(console.error);


// console.log(q.host);
// console.log(q.pathname);
// console.log(q.search);

// http.createServer((req, res) => {
//     res.write(`Sudharshan`.toUpperCase());
//     res.end();
//     console.log("Server is Running....");
// }).listen(4004);


// http.createServer((req, res) => {
//     fs.readFile('test.txt', (err, data) => {
//         res.write(data);
//         res.end();
//     })
//     console.log("Server is Running....");
// }).listen(4005);

// http.createServer((req, res) => {
//     fs.appendFile('test.txt','thank you', ( data) => {
//         res.write(data);
//         res.end();
//     })
//     console.log("Server is Running....");
// }).listen(4005);

// http.createServer((req, res) => {
//     fs.writeFile('test.txt','thank you', (data) => {
//         res.write(data);
//         res.end();
//     })
//     console.log("Server is Running....");
// }).listen(4005);

// http.createServer((req, res) => {
//     fs.unlink('test.txt', (err) => {
//        if(err) throw err;
//        else{
//         console.log("deleted...");
//        }
//     })
//     console.log("Server is Running....");
// }).listen(4005);