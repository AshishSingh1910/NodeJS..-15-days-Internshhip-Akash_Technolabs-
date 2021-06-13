var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('master', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Express' });
});

router.get('/myform', function(req, res, next) {
  res.render('form');
});

router.post('/form-process', function(req, res, next) {
  
  var a=parseInt(req.body.txt1);
  var b=parseInt(req.body.txt2);
  var c=a+b;
  var msg=" ";
  var mycolor="";
  if(c>100){
    msg = "pass";
    mycolor = "green";
  }
  else{
    msg = "fail";
    mycolor = "red";
  }
  console.log(req.body);
  console.log("A value is: "+a+" B value is: "+b);
  res.render('ans',{mya:a,myb:b,myc:c,mymsg:msg,mycolor:mycolor});
});









//router.get('/form-process', function(req, res, next) {
  //var a = req.body.txt1;
  //var b = req.body.txt2;
  //console.log(req.body);
  //console.log("A value is"+ a + " B value is" + b);

  //res.render('ans',{mya:a,myb:b});
//});


module.exports = router;
