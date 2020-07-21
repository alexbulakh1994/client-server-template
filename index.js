const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://admin:aHdHzvLCPKzm56S@cluster0.n8n1x.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true	
}).then(() => {
	console.log('db connected');
}).catch((err) => console.error(err));



app.get('/', (req,res) => {
	res.send('hello');
});

app.listen(5000);