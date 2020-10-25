const http = require('http')
const webHooks = require('github-webhook-handler')
const {spawn} = require('child_process')

const handler = webHooks({
    path:'/hook-test',
    secret:'mrsun'
})
function run_cmd(cmd,arg,call){
    let child = spawn(cmd,arg)
    let resultString = ''
    child.stdout.on('data',chunk=>{
        resultString += chunk.toString()
    })
    child.stdout.on('end',()=>{
        call && call(resultString)
    })
}
http.createServer((req,res)=>{
    handler(req,res,err=>{
        if(err){
            res.statusCode = 500
        }
    })
}).listen(6000,()=>{
    console.log('start 6000')
})

handler.on('error',err=>{
    console.error('Error',err.message);
})

handler.on('push',(event)=>{
    if(event.payload.ref === 'refs/heads/dev'){
        run_cmd('sh',['./deplay-dev.sh'],text=>{
            console.log(text)
        })
    }
})