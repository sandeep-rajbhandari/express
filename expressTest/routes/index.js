var express = require('express');
var app = module.exports = express();
var router = express.Router();

/* GET home page. */
app.engine('.html', require('jade').__express);
app.set('views', __dirname + '/views');

// Without this you would need to
// supply the extension to res.render()
// ex: res.render('users.html').
app.set('view engine', 'html');
router.get('/', function(req, res) {
  res.render('index');
});

module.exports = router;
