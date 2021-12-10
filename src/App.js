import './App.css';
import Chat from './components/Chat';
import View from './components/View';

function App() {
  return (
    <div className="App">
      <div className="chatComponent">
        <Chat />
        <View />
      </div>
    </div>
  );
}

export default App;
