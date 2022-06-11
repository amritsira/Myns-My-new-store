import React from 'react'
import { categories, categories2 } from '../data';
import styled from 'styled-components';
import './Categories.css';
import { Link } from "react-router-dom";


const Container = styled.div`
  display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`

const Container2 = styled.div`
  padding:9px;
  display: grid;
  grid-template-columns: 1fr 1fr;
`


const shopbtn = <button className="cat_card_btn">
    <Link to="/productlist" >SHOP NOW</Link>
</button>;



function Categorycard(props) {
    
    let arr = props.title.split(" ");
    return (
        <>
            <div className="imgBox" key={props.id}>
                <img className="cat_card_img" src={props.img}  alt={props.title}/>
                <span className="cat_card_title">
                    <p > {arr[0]} <br/> {arr[1]}</p>
                    {shopbtn}
                </span>
            </div>
        </>
    )
}



function Categorycard2(props) {
    let arr = props.title.split(" ");
    return (
        <>

            <div className="imgBox" key={props.id}>
                <img className="cat_card_img" src={props.img} alt={props.title} />
                <span className="cat_card_title">
                <p > {arr[0]} <br/> {arr[1]}</p>
                    {shopbtn}
                </span>
            </div>

        </>
    )
}



const Categories = () => {
    return (
        <>
            <Container>

                {categories.map(item => (
                    <Categorycard img={item.img} key={item.id} title={item.title} />
                ))}
            </Container>

            <Container2>
                {categories2.map(item => (
                    <Categorycard2 img={item.img} key={item.id} title={item.title} />
                ))}
            </Container2>
        </>
    )
}

export default Categories
