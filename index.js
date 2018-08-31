const express = require('express');
const path= require('path');

const server = express();
server.use(express.static('./www'));
server.get('/',(req,res)=>{
    res.send('ok');
    // res.sendFile(
    //     path.resolve('./view/index.html')
    // )
});
server.listen(80);