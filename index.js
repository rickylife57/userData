const express = require("express")
const app = express()
const port = 3220;
const user = [{id:1, name: "Mukesh"} ,{id:2, name: "Mahi"}]

let id = 2

app.get('/user',(req,res)=>{
    res.send(user)
})

app.get('/user/:id',(req,res)=>{
    const ids = parseInt( req.params.id)
   const id= user.find((f)=>f.id===ids)
   if(!id) {
    return res.json({message:'id not found'})

   }
   res.json(id)

})

app.post("/user",(req,res)=>{
    const {name} = req.body 
    if(!name){
        return res.send({message:'post not valid'})
    }
    user.push({id:id++,name:name})
    res.json(user)

})

app.put("/user/:id",(req,res)=>{
    const ids = parseInt( req.params.id)
   const id= user.find((f)=>f.id===ids)
     const {name} = req.body
     if(id!==undefined){
        id.name=name

     }
     res.send(user)

})
app.delete('/user/id',(res,req)=>{
     const ids = parseInt( req.params.id)
   const index = user.findIndx((t)=>t.id==id)
   const newUser = user.slice(index,1)
   res.send(newUser)


})


app.listen(port,()=>{
    console.log(`server connected: localhost:${port}`)
})