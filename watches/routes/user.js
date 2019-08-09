const express=require("express")
const pool=require("../pool.js")
var router=express.Router()

/*2.用户注册*/
router.post("/register",(req,res)=>{
    var $phone=req.body.phone
	var $upwd=req.body.upwd
	if (!$phone)
	{
	  res.send("联系方式不能为空")
	   return
	}
	if (!$upwd)
	{
	  res.send("密码不能为空")
	  return
	}
	
	pool.query("insert into watch_user (phone,upwd) value (?,?)",[$phone,$upwd],(err,result)=>{
	  if (err) throw err
		console.log(result)
	  if (result.affectedRows>0)
	  {
		  res.send("1")
	  }else{
		  res.send("0")
	  }
	  
	})
})
/*3.用户登录*/
router.post("/login",(req,res)=>{
 var $phone=req.body.phone
 var $upwd=req.body.upwd
 if (!$phone)
 {
	 res.send("手机号码不能为空")
	 return
 }
 if (!$upwd)
 {
	 res.send("密码不能为空")
     return 
}
	pool.query("select * from watch_user where phone=? and upwd=?",[$phone,$upwd],(err,result)=>{
	 if (err) throw err
	 if (result.length>0)
	 {
		res.send("登录成功")
	 }else{
	    res.send("手机号码或密码错误")	
	 }
	})
})
module.exports=router