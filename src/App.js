
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

    { console.log(islogin()) }
        {/* <Header cartqty={cartqty} wishlistqty={wishlistqty}/> */}

    

      
        {/* <MyRouter cartqty={cartqty} cartItems={cartItems} addtocart={addtocart} deleteitem={deleteitem} wishlist={wishlist} addtowishlist={addtowishlist}  removewishlist={removewishlist}/> */}
      <Notestate>
         {(islogin()==true) ? <Header/> : undefined }
        <MyRouter/>
        {(islogin() ==true) ? <Footer/> : undefined }
        
      </Notestate>
    </div>
  );
}

export default App;




