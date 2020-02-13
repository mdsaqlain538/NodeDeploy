const exp = require('express');
const app = exp();
const moongose = require('mongoose')

const mc =  require("mongodb").MongoClient;

const URL="mongodb+srv://saqlain:msp15nk19@cluster0-kbyvm.mongodb.net/test?retryWrites=true&w=majority";
var dbo;

var port = process.env.PORT || 3000;

app.listen(port,()=>console.log("server is on"));

mc.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true},(error,client)=>{
    if(error){
        console.log("error in connection",error);
    }
    else{
        dbo=client.db("project");
        console.log("sucessfully connected");
    }
});
//body parser
var bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post('/project/get-work',(req,res)=>{
    dbo.collection("work").insertOne(req.body,(error,sucess)=>{
        if(error){
            console.log('error',error);
        }
        else{
            res.status(200).json({
                message:"Name nserted"
              });
        }
    });
});


