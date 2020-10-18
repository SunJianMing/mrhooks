import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
class App extends React.Component {
    constructor(options){
        super(options)
        this.state = {
            list:[]
        }
    }
    componentDidMount(){
        axios.get('/api/list').then(data=>{
            let {data:{data:list}} = data
           
            this.setState({list})

        })
    }
    render(){
        let {list} = this.state
    let liItem = list.map(item=><li key={item}>{item}</li>)
        return <div>
            <h1>Hello React</h1>
            <ul>
                {liItem}
            </ul>
        </div>
    }
}
ReactDOM.render(<App/>,document.querySelector('#root'))