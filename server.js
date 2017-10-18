const url = require('url');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();


app.set('port', (process.env.PORT || 8080));
app.use(express.static('public'));
app.listen(app.get('port'), function() {
    console.log("Super server is running", app.get("port"));
});

