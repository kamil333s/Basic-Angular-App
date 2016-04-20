'use strict';

let express = require('express');
let app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
	res.render('index.html');
})

app.listen(3000, () =>{
  console.log('Server started on 3000');
});
