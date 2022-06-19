import React from 'react'
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import { FavoriteBorderOutlined } from '@mui/icons-material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
// import styled from '@emotion/styled';
import { Badge } from '@mui/material';
import { mobile } from '../responsive';

import styled from 'styled-components';
import { useContext } from 'react'
import Notecontext from '../context/Notecontext';



// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import { initializeApp } from "firebase/app";
// import { getAuth, signInWithPopup, GoogleAuthProvider ,signOut } from "firebase/auth";
import { Link} from 'react-router-dom';






const Title = styled.h1`
margin:0 10px;
flex:1;
text-align:center;
${'' /* ${mobile({  })} */}
`

const Center = styled.div`
 display: flex;
    flex: 1;
    align-items: center;
    flex:1;
`

const Right = styled.div`
font-size:16px;
display: flex;
flex:1;
justify-content: end;
gap: 4vh;

${mobile({ fontSize: "11px", gap: "1vh" })}
`




// const firebaseConfig = {
//     apiKey: "AIzaSyB6Z4JD-jIeEXRPe7_dewV14CVLB-XIbqM",
//     authDomain: "myns-9ce9a.firebaseapp.com",
//     projectId: "myns-9ce9a",
//     storageBucket: "myns-9ce9a.appspot.com",
//     messagingSenderId: "1053629932722",
//     appId: "1:1053629932722:web:314c4d9895d4f6843795ab"
//   };

  // Initialize Firebase
//   const app = initializeApp(firebaseConfig);
//   const provider = new GoogleAuthProvider(app);
//   const auth = getAuth(app);



function Header({ cartqty, wishlistqty }) {
    let contextdata = useContext(Notecontext);


    // const navigateto = useNavigate();



// function Logout(){
    

// console.log("here");

//         signOut(auth).then(() => {
                
//                 sessionStorage.setItem("Name","");
//                 sessionStorage.setItem("Email","");
//                 sessionStorage.setItem("Image","");
//                 sessionStorage.setItem("login",false);
//                 contextdata.setlogin(false);
//                 navigateto('/');

//             }).catch((error) => {
//                 alert("An error happened.");
//             });

   

// }












    console.log(contextdata);

    return (
        <div className='header'>

            <Center className="header__search">

                <input className="header_searchInput" type="text" placeholder='SEARCH' />
                <SearchIcon className='header__searchIcon' />

            </Center>

            <Title><Link to="/">Myns</Link> </Title>

            <Right >
                {/* <div className='header__option'>
                    <Link to="/register">REGISTER</Link>
                </div>

                <div className='header__option'>
                    <Link to="/login">SIGN-IN</Link>
                </div> */}

                <div className='header__option'>
                    <Badge badgeContent={contextdata.wishlistqty} color="primary">
                        <Link to="/wishlist"><FavoriteBorderOutlined className='header__cartImage' /></Link>
                    </Badge>
                </div>

                <div className='header__option'>
                    <Badge badgeContent={contextdata.cartqty} color="primary">
                        <Link to="/cart"><ShoppingCartOutlinedIcon className='header__cartImage' /></Link>
                    </Badge>
                </div>

                {/* <div className='header__option'>
                    <button onClick={Logout}>SIGN-OUT</button>
                </div> */}

            </Right>
        </div>
    );
}

export default Header
