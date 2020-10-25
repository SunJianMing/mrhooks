const express = require('express')
const app = new express()

app.get('/',(req,res)=>{
    res.send('hello express')
})

app.get('/api/list',(req,res)=>{
    res.json({
        code:[{
            name:'s',
            age:29
        },{
            name:'jm',
            age:30
        }]
    })
})

app.listen('6000',()=>{
    console.log('express at 6000')
})