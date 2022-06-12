import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MyRouter from './MyRouter';
import Notestate from './context/Notestate';


function App() {
  const islogin = ()=>{
    return Boolean(sessionStorage.login);
  }
  return (
    <div className="app">
    
      <Notestate>
        <MyRouter/>        
      </Notestate>
    
    </div>
  );
}

export default App;




