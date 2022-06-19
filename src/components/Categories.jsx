import React from 'react'
import { categories, categories2 , Categories_database} from '../data';
import styled from 'styled-components';
import './Categories.css';
import { Link } from "react-router-dom";


const Container = styled.div`
  display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const Container2 = styled.div`
padding:7px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`


const Shopbtn = (props)=>{
    let cat = props.cat;

    let gender = (props.gender==null) ? '': props.gender; 
    let link = `/productlist/${cat}/${gender}`;
    return <Link to={link} > <button className="cat_card_btn"> SHOP NOW </button></Link>;
}


function Categorycard({item}) {
    
    let arr = item.title.split(" ");
    return (
        <>
            <div className="imgBox" key={item.id}>
                <img className="cat_card_img" src={item.img}  alt={item.title}/>
                <span className="cat_card_title">
                    <p > {arr[0]} <br/> {arr[1]}</p>
                    
                    <Shopbtn cat={item.category} gender={item.gender}/>
                </span>
            </div>
        </>
    )
}



// function Categorycard2(props) {
//     let arr = props.title.split(" ");
//     return (
//         <>

//             <div className="imgBox" key={props.id}>
//                 <img className="cat_card_img" src={props.img} alt={props.title} />
//                 <span className="cat_card_title">
//                 <p > {arr[0]} <br/> {arr[1]}</p>
//                     {shopbtn}
//                 </span>
//             </div>

//         </>
//     )
// }

function Headermsg(){
    return(
        <div className="cat_header_msg">
            <h1>MUST HAVE IN YOUR WARDROBE</h1>
        </div>
    )
}



const Categories = () => {
    return (
        <>
            <Headermsg/>
            <Container>

                {Categories_database.map(item => (
                    <Categorycard item={item} />
                ))}
            </Container>

            {/* <Container2>
                {categories2.map(item => (
                    <Categorycard2 img={item.img} key={item.id} title={item.title} />
                ))}
            </Container2> */}
        </>
    )
}

export default Categories