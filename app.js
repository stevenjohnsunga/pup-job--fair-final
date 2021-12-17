const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const router = express.Router();

// __dirname : It will resolve to project folder.
// router.get('/',function(req,res){
//   res.sendFile(path.join(__dirname + '/index.html'));
// });

// router.get('/stud_login', function(req,res){
//   res.sendFile(path.join(__dirname + '/stud_login.html'));
// });

// path for all the files inside the project
app.use(express.static(path.join(__dirname, '/')));

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

// add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');