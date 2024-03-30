import express from 'express'

const app = express()

app.get("/",(req,res)=>{
    res.send("This is vimal's website")
})

app.listen(443,()=>{
    console.log('server is running on port 443')
})