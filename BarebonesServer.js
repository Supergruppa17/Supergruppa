const express = require('express')
const app = express()

app.use(express.static('public'))

//Get endpoint
app.get('/greet/:id', function (req,res){
    
    res.send(greeter() +" "+ req.params.id);
})


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});