import logo from './logo.svg';
import './App.css';


import WillyCall from './components/WillyCall';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p> Waves are coming</p> 
        
        <WillyCall exampleProp={"CUNT"}></WillyCall>
        
        
      </header>
    </div>
  );
}

export default App;
