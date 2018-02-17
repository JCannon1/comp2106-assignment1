/* Internal Documentation
File Name: index.js
Author's Name: Jesse Cannon
Website Name: https://jcannon-comp2106-assignment1.herokuapp.com/
File Description: My index.js page for all of my text
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { 
    title: 'Jesse Cannon Portfolio',
    message: 'my Portfolio. Hello, my name is Jesse Cannon and my goal of this portfolio site is to show you all of my web design skills I have acquired from my time at Georgian College. My Projects page will display all of the top pieces of work I have done so far for visuals. While the Contact page will ask you for your contact information in order to reach me. I hope my page is of great use to you. '
   });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('about', { 
    title: 'About Me',
    message: 'My name is Jesse Cannon and this is my portfolio. Throughout my portfolio I display several skills that I have aquired and believe will bring a new style to the industry of web design. I have always been a very artistic person and my love and interest for computers has also allowed me to hone my skills over the years. My portfolio page displays several of my previous pieces of work and I hope you enjoy viewing each of them.',
    message2: 'Feel free to have a look around at the different pages to see all of my work, my skills and how you can contact me. Each of my projects are accessible by clicking on the image that corresponds to the project. Thank you for visiting my portfolio. I look forward to hearing from you soon.'
   });
});

/* GET projects page. */
router.get('/projects', (req, res, next) => {
  res.render('projects', { 
    title: 'Projects',
    message: 'Here are a list of my projects. To visit the live site, please click anywhere on the images and it will send you to the website.'
   });
});

/* GET skills page. */
router.get('/skills', (req, res, next) => {
  res.render('skills', { 
    title: 'Skills',
    message: 'Here are a few of my useful skills.'
   });
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('contact', { 
    title: 'Contact Me',
    message: 'Please fill out the form below with your information to get in touch with me.'
   });
});




// Making a functional contact form with nodemailer
// var nodemailer = require('nodemailer');

// var router = express.Router();
// app.use('/sayHello', router);
// router.post('/', handleSayHello); 

// function handleSayHello(req, res) {
//     var transporter = nodemailer.createTransport({
//         service: 'Hotmail',
//         auth: {
//             user: 'jessecannon1@hotmail.com', 
//             pass: '' 
//         }
//     });
// }
// var text = 'Hello world from \n\n' + req.body.name;

// var mailOptions = {
//   from: 'jessecannon1@hotmail.com>', 
//   to: 'jessecannon1@hotmail.com', 
//   text: text 
// };

// transporter.sendMail(mailOptions, function(error, info){
//   if(error){
//       console.log(error);
//       res.json({yo: 'error'});
//   }else{
//       console.log('Message sent: ' + info.response);
//       res.json({yo: info.response});
//   };
// });

module.exports = router;
