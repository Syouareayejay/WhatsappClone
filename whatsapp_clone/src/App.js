import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Sidebar from './Sidebar.js'
import Chat from './Chat.js'
import Login from "./Login";
function App() {
  const user = null;
  return (
      !user?(<Login />):(
        <Router>
        <Switch>    
          <div className="App">
            <div className ="app__body">
            {/* Sidebar */}
            <Sidebar />
            {/* Chat*/}
            <Route exact path = '/'>
              <Chat />
            </Route>
            <Route path = '/room/:roomId'>
              <Chat />
            </Route>  
            </div>
          </div>
        </Switch>
      </Router>
      )
          
  );
}

export default App;
