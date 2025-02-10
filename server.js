const express=require('express')
const port=5454
const app=express()
app.use(express.json())
app.get('/',(req,res)=>{
    return res.status(200).send(`Hello World`)
}
)
app.post('/signup',(req,res)=>{
    const {username,password,email,dob}=req.body
    if(!username)
        return res.status(400).json({message:"Username cannot be empty "})
    if(!email)
        return res.status(406).json({message:"Email cannot be empty"})
    if(password<8 || password>=16)
       return res.status(402).send(`password length should be greater than 8 or less than or equal to 16`)

  return res.status(200).send(`all the details are given succesfully`)
})

app.listen(port,()=>{
   console.log(`sever is running on http://localhost:${port}`)
})