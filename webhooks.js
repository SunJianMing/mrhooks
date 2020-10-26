const http = require('http')
const webhooks = require('github-webhook-handler')
const {spawn} = require('child_process')

const handler = webhooks({
    path:'/hook1',
    secret:'mrsun'
})
function run_cmd(cmd,arg,call){
    let resStr = ''
    let child = spawn(cmd,arg)
    child.stdout.on('data',chunk=>{
        resStr += chunk.toString()
    })
    child.stdout.on('end',()=>{
        call && call(resStr)
    })
}
http.createServer((req,res)=>{
    handler(req,res,err=>{
        if(err){
            res.statusCode = 500
            res.end('服务器错误')
        }
    })
}).listen(6600,()=>{
    console.log('start 6600')
})

handler.on('error',err=>{
    if(err){
        console.error("Error",err.message);
    }
})
handler.on('push',event=>{
    if(event.payload.ref === 'refs/heads/hook'){
        console.log('已提交到github,响应push事件')
        run_cmd('sh',['./deplay-dev.sh'],text=>{
            console.log(text)
        })
    }
})