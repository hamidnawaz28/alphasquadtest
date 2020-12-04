import logo from './logo.svg';
import './App.css';
import Login from './Login'
import SignUp from './SignUp'
import Chat from './Chat'
import React from 'react'
import ls from 'local-storage'
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { BrowserRouter } from "react-router-dom";
class App extends React.Component {
  componentDidMount(){
    ls.set('Chat','')
    ls.set('currentUser','')
  }
  render() {
    return <>
      <div className="App">
        <header className="App-header">
          <BrowserRouter>
            <Route path='/chat'><Chat /></Route>
            <Route path="/login"><Login /></Route>
            <Route path="/sign-up"><SignUp /></Route>
          </BrowserRouter>
        </header>
      </div>
    </>
  }
}

export default App;
