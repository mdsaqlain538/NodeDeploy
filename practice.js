const exp = require('express')
const app = exp();
var Bodyparser = require("body-parser")

app.use(Bodyparser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
res.sendFile(__dirname+'/index.html')
});


app.post('/',(req,res)=>{
console.log(Number(req.body.num1)+Number(req.body.num2));
res.send('Thanks for using Web Calculator..');
});

app.listen(3001,()=>{
console.log('Server started....')
});