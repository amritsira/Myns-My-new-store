// import { Add, Remove } from "@mui/icons-material";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import styled from '@emotion/styled';
// import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { mobile } from "../responsive";
// import { allproducts } from "../data.js"
import { Link } from "react-router-dom";
import { useContext } from 'react';
import Notecontext from '../context/Notecontext';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const btn_css = {
  padding: "10px",
  fontWeight: 600,
  cursor: "pointer",
  backgroundColor: "white"
}

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  cursor:pointer;
  transition:all 0.5s ease;

  &:hover{
      transform:scale(1.04);
  }
`;

// const ProductAmount = styled.div`
//   font-size: 24px;
//   margin: 5px;
//   ${mobile({ margin: "5px 15px" })}
// `;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  margin-botton:10px;
  ${mobile({ marginBottom: "20px" })}
`;

// const Hr = styled.hr`
//   background-color: #eee;
//   border: none;
//   height: 1px;
// `;

// const Summary = styled.div`
//   flex: 1;
//   border: 0.5px solid lightgray;
//   border-radius: 10px;
//   padding: 20px;
//   height: 50vh;
// `;

// const SummaryTitle = styled.h1`
//   font-weight: 200;
// `;

// const SummaryItem = styled.div`
//   margin: 30px 0px;
//   display: flex;
//   justify-content: space-between;
//   font-weight: ${(props) => props.type === "total" && "500"};
//   font-size: ${(props) => props.type === "total" && "24px"};
// `;

// const SummaryItemText = styled.span``;

// const SummaryItemPrice = styled.span``;

// const Button = styled.button`
//   width: 100%;
//   padding: 10px;
//   background-color: black;
//   color: white;
//   font-weight: 600;
// `;

// const Delbutton = styled.button`
//   cursor:pointer;

// `

// let cartItems = [];
// let cartlistitems = [];
// if(sessionStorage.cartItems != null){
//   cartItems = sessionStorage.cartItems.split(",");

// cartlistitems = allproducts.filter((item)=>{
//                       return  cartItems.includes((item.id).toString());
//                   })
// }

const Wishlist = () => {
  
let contextdata =useContext(Notecontext);


  return (
    <Container>
         <Header/>
      {/* <Announcement /> */}
      <Wrapper>
        <Title>YOUR WISHLIST</Title>
        <Top>
          <TopButton><Link to="/productlist" >CONTINUE SHOPPING </Link></TopButton>
          <TopTexts>
            {/* <TopText>Shopping Bag({cartItems.length})</TopText> */}
            <TopText>Your Wishlist ({contextdata.wishlist.length})</TopText>
          </TopTexts>
        </Top>
        <Bottom>
          <Info>

            {
              
              contextdata.wishlist.map((item) => {
              
                return (
                  <Product>
                    <ProductDetail>
                      {/* <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" /> */}
                        <Image src={item.image} />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {item.title}
                        </ProductName>
                        <ProductId>
                          <b>ID:</b> {item.id}
                        </ProductId>
                        <ProductColor color="darkblue" />
                        <ProductSize>
                          <b>Category:</b> {item.category}
                        </ProductSize>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                    

                      {/* <Delbutton><DeleteIcon/></Delbutton> */}
                      
                      <ProductAmountContainer>
                        <DeleteOutlinedIcon  onClick={()=>contextdata.removewishlist(item)}/>
                        {/* <ProductAmount>2</ProductAmount>
                        <Remove /> */}
                        {/* <i className="fa fa-trash btn"  ></i> */}
                      </ProductAmountContainer>
                      <ProductPrice>$ {item.price}</ProductPrice>

                      {
                        (item.cartqty>0) ? <p style={{color:"green",fontWeight:"bold"}}>IN CART<i className="fa fa-check"></i></p> : <button class="btn" style={btn_css} onClick={()=>contextdata.addtocart(item)}>Add to Cart</button>
                      }
                      

                    </PriceDetail>
                  </Product>
                );
                
              })
            }


         
    

          </Info>


            


          
        </Bottom>
      </Wrapper>
     <Footer/>
    </Container>
  );
};

export default Wishlist;
