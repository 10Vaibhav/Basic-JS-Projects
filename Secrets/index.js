import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";


const __dirname = dirname(fileURLToPath(import.meta.url))
const secret = "vaibhavIsGoodBoy"

const app = express();
const port = 3000;

let isValid = false;

function passwordCheck(req, res, next){

    const password = req.body.password;

    if(password === secret){
        isValid = true
    }

    next();

}

app.use(bodyParser.urlencoded({extended: true}))
app.use(passwordCheck)

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

app.post("/check", (req,res)=>{

    if(isValid){
        res.sendFile(__dirname + "/public/secret.html");
        isValid = false;
    }else{
        res.sendFile(__dirname + "/public/index.html");
    }
})


app.listen(port, ()=>{
    console.log(`server is running on ${port}.`)
})


