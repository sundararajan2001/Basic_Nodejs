const express = require ('express');
const app = express();
const path = require('path');
const multer = require('multer');
app.set('views',path.join(__dirname,"views"))
app.set ('view engine',"ejs");

const storage = multer.diskStorage({
    destination: 'uploads',
    filename : function(req,file,cb){
        cb(null,file.originalname.replace(/\.[^/.]+$/,"") + path.extname(file.originalname));
    }

})

const maxSize = 2*1000*1000;


const upload = multer({
    storage: storage,
    limits:{
        fileSize : maxSize
    },
    fileFilter : function(req,file,callb){
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        const extname1 = filetypes.test(path.extname(file.originalname).toLowerCase());

        if(mimetype && extname1){
            return callb(null,true);
        }

        callb("Uploaded file not similar to JPEG,JPG PNG")
    }
}).single('myimage')


app.get('/',(req,res)=>{
    res.render ('imageupload')
})

app.post('/upload',(req,res,next)=>{

    upload (req,res , function(err){
        if(err){
            res.send(err);
        }
        else{
            res.send('success')
        }
    })

})


app.listen(8080,()=>{
    console.log('server is running');
})