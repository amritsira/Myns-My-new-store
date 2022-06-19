import './App.css';
import MyRouter from './MyRouter';
import Notestate from './context/Notestate';
import Header from './components/Header';

function App() {
 
  return (
    <div className="app">

        {/* <Header cartqty={cartqty} wishlistqty={wishlistqty}/> */}

    

      
        {/* <MyRouter cartqty={cartqty} cartItems={cartItems} addtocart={addtocart} deleteitem={deleteitem} wishlist={wishlist} addtowishlist={addtowishlist}  removewishlist={removewishlist}/> */}
      <Notestate>
         
          <Header/>
         
            <MyRouter/>
          
        
        
        
      </Notestate>
    </div>
  );
}

export default App;




