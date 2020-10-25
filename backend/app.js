const express = require('express')
const app = new express()

app.get('/',(req,res)=>{
    res.send('hello express')
})

app.get('/api/list',(req,res)=>{
    res.json({
        code:[{
            name:'sjm',
            age:29
        },{
            name:'jk',
            age:30
        },{
            name:'m',
            age:31
        }]
    })
})

app.listen(6000,()=>{
    console.log('express at 6000')
})
