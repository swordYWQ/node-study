const loginIn=(req,res)=>{
    console.log('login success')
    res.write(JSON.stringify({
        code:200,
        message:'登陆成功',
        result:[]
    }))
    res.end();
}

module.exports={
    loginIn
}