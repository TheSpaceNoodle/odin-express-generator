import express from 'express';

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date(),
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date(),
  },
];

const router = express.Router();

/* GET home page. */
router.get('/', function (_, res) {
  res.render('index', { title: 'Express', messages });
});

router.get('/new', function (_, res) {
  res.render('form', { title: 'Express', messages });
});

router.post('/new', function (req, res) {
  messages.push({
    user: req.body.user,
    text: req.body.text,
    added: new Date(),
  });
  res.redirect('/');
});

export default router;
