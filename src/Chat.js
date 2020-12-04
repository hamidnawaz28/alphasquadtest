import React from 'react'
import ls from 'local-storage'
import { render } from 'react-dom'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            chat : ''
        } 
    }
    formData(event, field){
        this.setState({chat:event.target.value})
    }
    postHandle(){
        let username = ls.get('username')
        debugger;
        if(username == ls.get("currentuser")){
            let chat = ls.get('Chat')
            let AllChats = chat + username+ ":"+this.state.chat
            let history = ls.get('Chat')
            debugger
            this.setState({chat: ls.get('Chat')})
            alert("Posted")

        }
        else{
            alert("Login")
        }
        
    }
    render(){
        return <>
            <textarea  rows="4" cols="50">
                {this.state.chat}  
            </textarea>
            <input type='text'  onKeyUp={(event)=>this.formData(event,'chat')}/>
            <button onClick={()=>this.postHandle()}>
                Post
            </button>
        </>
    }
} 
export default Login