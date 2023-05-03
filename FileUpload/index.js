const express = require('express');
const app = express();
const fileupload = require('express-fileupload');
app.use(fileupload());

app.post('/upload',function(req,res){
    const file = req.files.photo;
    file.mv('./images/'+file.name,function(err,result){
        if(err){
            throw err;
        }
    })


    console.log(req.files);
    res.send({message : "File uploaded"});

})


app.listen(3000,()=>{
    console.log("Port Started in 3000");
})
