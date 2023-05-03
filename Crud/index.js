const http = require('http')
const fs = require('fs')
const server = http.createServer( (req,res)=>{

    //GET Method

    if(req.url==="/users" && req.method=='GET'){
        fs.readFile("./DB.json","utf-8",(err,result)=>{
            if(err){
                return res.end("Server Error Occured")
            }
           return res.end(result);
        });
    }

    //POST Method
    
    if(req.url==="/users/create"&& req.method=='POST'){
        var body;
        req.on("data",(data)=>{
            body+= data
        });
        
        req.on("end",()=>{
            body = JSON.parse(body.replace("undefined",""));
            let file = fs.readFileSync("./DB.json","utf-8");
            file = JSON.parse(file);
            let LastId=0;
            file.forEach(obj=>{
                if(obj.id>LastId) LastId = obj.id;
            })
            console.log(LastId);
            body.id = LastId+1;
            console.log(body);
            file.push(body);
            fs.writeFileSync("./DB.json",JSON.stringify(file));
            return res.end(JSON.stringify({status:200,data:body,message:"Created Successfully"}));
        });
    }

    //UPDATE Method

    if(req.url==="/users/update" && req.method=='PUT'){
        var bodyUpdate;
        req.on("data",(data)=>{
            bodyUpdate+= data
        });

        req.on("end",()=>{
            bodyUpdate = JSON.parse(bodyUpdate.replace("undefined",""));
            var file = fs.readFileSync("./DB.json","utf-8");
            file = JSON.parse(file);
            var id = bodyUpdate.id;
            file.forEach((obj,index)=>{
                if (obj.id===id) {
                    file[index]=bodyUpdate;
                }
            });
            console.log(file);
            fs.writeFileSync("./DB.json",JSON.stringify(file));
            return res.end(JSON.stringify({status:200,data:bodyUpdate,message:"Updated Successfully"}));
        });

        

    }

    //DELETE Method  
    if(req.url==="/users/delete" && req.method=='DELETE'){
        var bodyUpdate;
        req.on("data",(data)=>{
            bodyUpdate+= data
        });

        req.on("end",()=>{
            bodyUpdate = JSON.parse(bodyUpdate.replace("undefined",""));
            var file = fs.readFileSync("./DB.json","utf-8");
            file = JSON.parse(file);
            var id = bodyUpdate.id;
            console.log(id);
            file.forEach((obj,index)=>{
                if (obj.id===id) {
                    file.splice(index,1);
                }
            });
            fs.writeFileSync("./DB.json",JSON.stringify(file));
            return res.end(JSON.stringify({status:200,data:bodyUpdate,message:"Deleted Successfully"}));
        });
    }

});

server.listen(8080, ()=> console.log('Server Working on 8080'));