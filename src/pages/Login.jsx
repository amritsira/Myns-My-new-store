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
  border: none;
  padding: 15px 25px;
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






  const Googlebtn = (props)=>{
    return (
      <div className='glogin-wrapper'>
        <Button {...props} className='glogin-button' >
            <img className="glogin-img" src="data:image/png;base64,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"/>
          SIGN IN
          </Button>
      </div>
    );
  }





  return (
    <Container>
      <Wrapper>
        <h1></h1>
        <Googlebtn  onClick={(event) =>{
            event.preventDefault();
            Firebaselogin()
          }}/>
          <br/>

          <hr/>
        <Title>OR  </Title>
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
