 const express = require('express'); // Loading express on our server
 const hbs = require('hbs'); // loads handlebars

 const app = express(); // install express on our server
app.set("view engine", "hbs"); //tells Express what to use for rendering templates


app.use(express.static(__dirname + '/public')); // VERY IMPORTANT!! Make sure to add a '/'
    
app.get('/shows', (req, res) =>{
    	const favoriteShow=["GOT", 'Rick and Morty', 'Family Guy', 'Louie', 'Robot Chicken'];
    res.render('/shows', {
        data: req.query.favoriteShow
    

    });
});


    






    const port = process.env.Port || 3000;
    app.listen(port,( )=>{
    	console.log('Server started on port' + port);

    });