import React from 'react'
import styled from 'styled-components';
import './Categories.css';
import { Link } from "react-router-dom";

const Container = styled.div`
  display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`
const Container2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`
function openProductlist(){
    // <Link to="/productlist" />.click();
}

const shopbtn = <button onClick={openProductlist} className="cat_card_btn">
<Link to="/productlist" >SHOP NOW</Link>
</button>;


const Category_card = () => {
    return (
        <>
            <Container>
                <div className="imgBox">
                          <img className="cat_card_img" alt="Shirt style" src="https://images.pexels.com/photos/5886038/pexels-photo-5886038.jpeg" />
                    <span className="cat_card_title">
                        <p >SHIRT <br/> STYLE</p>
                        {shopbtn}
                    </span>
                </div>

                <div className="imgBox">
                    <img className="cat_card_img" alt="LOUNGEWEAR LOVE" src="https://images.pexels.com/photos/6939081/pexels-photo-6939081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <span className="cat_card_title">
                        <p >LOUNGEWEAR <br/> LOVE</p>
                        {shopbtn}                    </span>
                </div>

                <div className="imgBox">
                    <img className="cat_card_img" alt="LIGHT JACKETS" src="https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <span className="cat_card_title">
                        <p >LIGHT <br/> JACKETS</p>
                        {shopbtn}                    
                        </span>
                </div>

            </Container>

            <Container2>
                <div className="imgBox">
                    <img className="cat_card_img" alt="PREFECT JEANS" src="https://images.pexels.com/photos/3769702/pexels-photo-3769702.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <span className="cat_card_title">
                        <p >PERFECT<br/> JEANS</p>
                        {shopbtn}                    </span>
                </div>

                <div className="imgBox">
                    <img className="cat_card_img" alt="NEW DRESSES" src="https://images.pexels.com/photos/1959853/pexels-photo-1959853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                    <span className="cat_card_title">
                        <p >NEW <br/>DRESSES</p>
                        {shopbtn}                    </span>
                </div>
            </Container2>

        </>
    );
}







const Categories = () => {
    return (
        <div>
            <Category_card />

        </div>
    )
}

export default Categories
