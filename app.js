const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + "/date.js");

const port = 3000;

const app = express();

const items = ["Try me"];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get('/', function(req, res){
	
	const day = date.getDate();

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