const express = require('express');
const bodyParser = require('body-parser');

const port = 3000;

const app = express();

const items = [];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
	
	let today = new Date();

	let options = {
		weekday: "long",
		day: "numeric",
		month: "long"
	};

	let day = today.toLocaleDateString("en-US", options);

	res.render("list", {kindOfDay: day, newListItems: items});

});

app.post("/", function(req, res){
	const item = req.body.newItem;

	items.push(item); 

	res.redirect("/");
})

app.listen(port, function(){
	console.log(`Server started on port: ${port}`);
});