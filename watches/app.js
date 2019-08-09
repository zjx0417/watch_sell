const express=require("express")
const userRouter=require("./routes/user.js")
const bodyParser=require("body-parser")
const cors=require("cors")
var server=express()
server.listen(8080)
/*跨域问题*/
server.use(cors({
    origin:"http://127.0.0.1:5500"
}))
server.use(express.static("public"))
server.use( bodyParser.urlencoded({
 extended:false
}))
server.use("/user",userRouter)