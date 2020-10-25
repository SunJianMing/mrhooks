import React from 'react'
import ReactDOM from 'react-dom'
import axios  from 'axios'

class App extends React.Component{
  
   constructor(options){
       super(options)
       this.state = {
           list:[]
       }
   }
    
   componentDidMount(){
       axios.get('/api/list').then(data=>{
        let list = data.data.code
       
        this.setState({list})
       })
   }
    render(){
        let {list} = this.state
        const listItem = list.map(item=>{
        return <li key={item.age}>{item.name}:{item.age}</li>
        })
        return (<div>
            <h1>hello</h1>
            {listItem}
        </div>)
    }
    
}
ReactDOM.render(<App/>,document.querySelector('#root'))