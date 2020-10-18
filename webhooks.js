const http = require('http')
const webhookHandler = require('github-webhook-handler')
const hander = webhookHandler({
    path:'/mrHooks',
    secret:'mrSJM'
})
const {spawn} = require('child_process')
function run_cmd(cmd,args,callback){
    let child = spawn(cmd,args)
    let rest = ''
    child.stdout.on('data',chunk=>{
        rest += chunk
    })
    child.stdout.on('end',()=>{
        callback(rest+'')
    })
}
http.createServer((req,res)=>{
    hander(req,res,err=>{
        if(err){
            res.statusCode = 404
            res.end('find Not Found ')
        }
    })
}).listen(9999,()=>{
    console.log('start 9999')
})

hander.on('error',err=>{
    if(err){
        console.error('Error ',err.message)
    }
})
hander.on('push',event=>{
    console.log('reactive psuh',event.payload.res)
    if(event.payload.ref === 'develop'){
        run_cmd('sh',['./deploy-dev.sh'],text=>{
            console.log(text)
        })
    }
    
})