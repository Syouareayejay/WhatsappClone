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
import {useStateValue} from './StateProvider';
function App() {
  const [{user},dispatch] = useStateValue();
  console.log(user,dispatch)
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
