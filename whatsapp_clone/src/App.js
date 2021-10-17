import './App.css';
import Sidebar from './Sidebar.js'
import Chat from './Chat.js'
function App() {
  return (
    <div className="App">
      <div className ="app__body">
      {/* Sidebar */}
      <Sidebar />
      {/* Chat*/}
      <Chat />
      </div>
    </div>
  );
}

export default App;
