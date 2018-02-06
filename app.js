const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
var upload = multer({ dest: 'uploads/' });


const app = express();


// Body-Parser Middleware
app.use(bodyParser.json());


// Read Public folder
app.use(express.static(__dirname + '/public'));


app.post('/upload', upload.single('file'), (req, res, next) => {
	return res.json({ size: req.file.size });
});




app.listen(process.env.PORT || 9000, () => {
	console.log('Server is running on port 9000');
});
