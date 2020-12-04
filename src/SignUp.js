import React from 'react'
import ls from 'local-storage'
import { render } from 'react-dom'

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username : '',
            password : ''
        }
    }
    formData(event,field){
        this.setState({[field]:event.target.value})
    }
    signUpHandle(){
        for(let key in this.state){
            ls.set(key,this.state[key])
        }
        ls.set(this.state.username+"chat",'')
        alert(ls.get('username'))

    }
    render() {
        return <>
            <input type='text'  onKeyUp={(event)=>this.formData(event,'username')}/>
            <input type="text"  onKeyUp={(event)=>this.formData(event,'password')}/>
            <button onClick={()=>this.signUpHandle()}>
                SignUp
            </button>
        </>
    }
}
export default SignUp;