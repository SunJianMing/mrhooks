const http = require('http')
const webHooks = require('github-webhook-handler')

const hander = webHooks({
    path:"/hook-test",
    secret:'mrsun'
})
const {spawn} = require('child_process')
http.createServer((req,res)=>{
    hander(req,res,err=>{
        if(err){
            res.statusCode = 404
            res.send('not found')
        }
    })
}).listen(6666,()=>{
    console.log('6666')
})

function cun_cmd(cmd,arg,call){
    let child = spawn(cmd,arg)
    let resultString = ''
    child.stdout.on('data',chunk=>{
        resultString += chunk.toString()
    })
    child.stdout.on('end',()=>{
        call && call(resultString)
    })
}

hander.on('error',err=>{
    console.Error("error",err.message)
})
hander.on('push',(event)=>{
    console.log(event.payload)
    if(event.payload.ref == 'refs/hook')
    cun_cmd('sh',['./dev-deplay.sh'],text=>{
        console.log(text)
    })
})