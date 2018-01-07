const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const email = require('./models/email.js')
var app = express()
var bodyParser = require('body-parser');
app.use(express.static(path.join(__dirname, 'public')))
//app.use(bodyParser().json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => res.render('pages/send'))

app.post('/',function(req,res,next){

var lead = {
name: req.body.name,
mobile:req.body.mobile,
income:req.body.inc,
email:req.body.email,
property:req.body.property
};
console.log(lead);
email.sendEmail(lead)
    return  res.render("pages/banksuggest.ejs")
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
