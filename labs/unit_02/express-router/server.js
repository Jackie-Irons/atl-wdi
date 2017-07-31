const express = require('express');
const hbs = require('hbs');

const app = express();
app.set('view engine','hbs');
app.use(express.static(__dirname + '/public'));


/* Add stuff above this */
const port = process.env.PORT || 3000;
app.listen(port,()=>{
   console.log('Server started on port' + port);
});