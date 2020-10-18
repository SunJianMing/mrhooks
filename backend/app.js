const express = require('express')
const app = new express()
app.get('/',(req,res)=>{
    res.send('Hello express')
})

app.get('/api/list',(req,res)=>{
    res.json({
        data:[1,2,3,4]
    })
})
app.listen(3000,()=>{
    console.log('express start 3000')
})