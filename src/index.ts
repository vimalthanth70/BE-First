import express from 'express'

const app = express()

app.get("/",(req,res)=>{
    res.send("This is vimal's website")
})

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})