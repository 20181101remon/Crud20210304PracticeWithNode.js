var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  var db = req.con;
  var data = "";

  db.query('SELECT * FROM account', function(err, rows) {
      if (err) {
          console.log(err);
      }
      var data = rows;
  res.render('index', { title: 'Express' });
});


});
module.exports = router;
