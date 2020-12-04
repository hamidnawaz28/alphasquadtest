import React from 'react'
import ls from 'local-storage'
import { render } from 'react-dom'

class Login extends React.Component{
    constructor(props){
        super(props)
        this.state= {
            username : '',
            password : ''
        } 
    }
    formData(event, field){
        this.setState({[field]:event.target.value})
    }
    signInHandle(){
        let username = ls.get('username')
        let password = ls.get('password')
        if(username ==this.state.username && password == this.state.password){
            ls.set("currentuser",username)
            alert("Verified")
        }
    }
    render(){
        return <>
            <input type='text'  onKeyUp={(event)=>this.formData(event,'username')}/>
            <input type="text"  onKeyUp={(event)=>this.formData(event,'password')}/>
            <button onClick={()=>this.signInHandle()}>
                Login
            </button>
        </>
    }
} 
export default Login