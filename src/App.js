import './App.css';
import MyRouter from './MyRouter';
import Notestate from './context/Notestate';


function App() {
 
  return (
    <div className="app">
      <Notestate>
            <MyRouter/>
      </Notestate>
    </div>
  );
}

export default App;




