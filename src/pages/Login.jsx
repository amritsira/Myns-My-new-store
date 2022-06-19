import styled from '@emotion/styled';
import { mobile } from "../responsive";
import {useContext} from 'react';
import Notecontext from '../context/Notecontext';


// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {useNavigate , Link} from 'react-router-dom';



const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://img.freepik.com/free-photo/portrait-smiling-beautiful-girl-her-handsome-boyfriend-laughing-happy-cheerful-couple-sunglasses_158538-5002.jpg?w=826&t=st=1654975254~exp=1654975854~hmac=bec09f622b7ba48e9a79b2048bc7b6d14aeebaed06756b9da70455a5dcaa384b")
      center;
    ${'' /* url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") */}
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 20px;
  background-color: white;
  border-radius:20px;
  text-align:center;
  box-shadow:0px 0px 15px 0px;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
    letter-spacing: 2px;
    font-weight: 600;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: #67aebd;
  color: white;
  cursor: pointer;
  margin-bottom: 10px;
      position: relative;
    margin: auto;
    letter-spacing: 3px;
    transition:all 0.4s ease;
    &:hover {
      background-color: #3d7a87;
      letter-spacing:5px;
    }
`;

const CustomLink = styled.a`
  margin: 5px 0px;
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
`;

const Login = () => {

  let contextdata = useContext(Notecontext);

  const navigateto = useNavigate();

  function storeLogindata(name, email , image){
      sessionStorage.setItem("Name",name);
      sessionStorage.setItem("Email",email);
      sessionStorage.setItem("Image",image);
      sessionStorage.setItem("login",true);
  }
  

  function Firebaselogin(){

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyB6Z4JD-jIeEXRPe7_dewV14CVLB-XIbqM",
      authDomain: "myns-9ce9a.firebaseapp.com",
      projectId: "myns-9ce9a",
      storageBucket: "myns-9ce9a.appspot.com",
      messagingSenderId: "1053629932722",
      appId: "1:1053629932722:web:314c4d9895d4f6843795ab"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);



    const provider = new GoogleAuthProvider(app);


    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // alert("success");
        contextdata.setlogin(true);
        storeLogindata(user.displayName , user.email , user.photoURL);

        navigateto('/');
        // ...
      }).catch((error) => {
        // Handle Errors here.
        // const errorCode = error.code;
        // const errorMessage = error.message;
        // // The email of the user's account used.
        // const email = error.customData.email;
        // // The AuthCredential type that was used.
        // const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });

  }






  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" type="password" />
          <Button onClick={(event) =>{
            event.preventDefault();
            Firebaselogin()
          }}>LOGIN</Button>
          <CustomLink>CLICK ON LOGIN BUTTON TO USE YOUR GOOGLE ACCOUNT</CustomLink>
          <CustomLink><Link to='/register'>CREATE A NEW ACCOUNT </Link></CustomLink>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
