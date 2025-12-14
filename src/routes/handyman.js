const router = require('express').Router();

// Portfolio home page
router.get('/', (req, res) => {
  res.render('handyman/index', { path: 'handyman' });
});

// Services page
router.get('/services', (req, res) => {
  res.render('handyman/services', { path: 'handyman-services' });
});

// Portfolio/Gallery page
router.get('/portfolio', (req, res) => {
  res.render('handyman/portfolio', { path: 'handyman-portfolio' });
});

// About page
router.get('/about', (req, res) => {
  res.render('handyman/about', { path: 'handyman-about' });
});

// Contact page
router.get('/contact', (req, res) => {
  res.render('handyman/contact', { path: 'handyman-contact' });
});

module.exports = router;