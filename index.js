let express = require('express');
let app = express();
let handle = require('./handlers/index');

let port = 4000;

app.get('/',(req,res)=>{
    res.json({hello: 'world'});
});

app.use(handle.errors);
app.use(handle.notFound);


app.listen(port, console.log(`Server started at port ${port}`));
