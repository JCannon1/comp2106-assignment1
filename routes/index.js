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
    message: 'My name is Jesse Cannon and here is my portfolio with all of my best work.'
   });
});

/* GET projects page. */
router.get('/projects', (req, res, next) => {
  res.render('projects', { 
    title: 'Projects',
    message: 'Here are all of my projects.'
   });
});

/* GET services page. */
router.get('/services', (req, res, next) => {
  res.render('services', { 
    title: 'Services',
    message: 'Here are my services.'
   });
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('contact', { 
    title: 'Contact Me',
    message: 'Here is my contact info.'
   });
});

module.exports = router;
