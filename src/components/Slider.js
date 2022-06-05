import React from 'react'
import './Slider.css';


import Carousel from 'react-material-ui-carousel';
import { Paper, Button } from '@mui/material';
import { Link } from "react-router-dom";



export const Slider = () => {


    function Example(props)
    {
        var items = [
            {
                name: "Random Name #1",
                color: "#f8d5f0",
                img:"https://media.istockphoto.com/photos/women-are-shopping-in-the-summer-she-is-using-a-credit-card-and-picture-id921504204?b=1&k=20&m=921504204&s=170667a&w=0&h=eFKWT5ItbbQPfevjcJ42x1zt4N3LKjLI9vFjyZxGe7w=",
                desc_heading:"SUMMER SALE",
                description: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS "
            },
            {
                name: "Random Name #2",
                color:"beige",
                img:"https://media.istockphoto.com/photos/concept-of-shopping-purchases-and-sales-of-happy-young-girl-with-on-picture-id1153580431?k=20&m=1153580431&s=612x612&w=0&h=ukmIZuzEiipW95wO6k-LynYdFS6kReTgEEdYCcAi63k=",
                desc_heading:"AUTUMN COLLECTION",
                description: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS "
            },
            {
                name: "Random Name #2",
                color:"skyblue",
                img:"https://media.istockphoto.com/photos/young-bearded-hipster-man-wearing-a-summer-hat-is-enjoying-shopping-picture-id1193906975?k=20&m=1193906975&s=612x612&w=0&h=PIz0Xw_p9bpjTUfQgyTWiTZ52tJmIACW9FOVJEuSZPg=",
                desc_heading:"DAILYWEAR LOVE",
                description: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS "
            }
        ]
    
        return (
            <Carousel>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        )
    }

  
    
    function Item(props)
    {
        return (
            <Paper>
                {/* <img style={{height:"500px"}} src='https://m.media-amazon.com/images/I/71PspmM7wLL._SX3000_.jpg' /> */}
        
                <div className="slider__mainbox " style={{backgroundColor:props.item.color}}>

                    <img className='slider__img' style={{height:"100%"}} src={props.item.img} />
                    {/* <Desc_heading>{props.item.desc_heading}</Desc_heading> */}
                    <div className="desc_box">
                        <h1 className="title">{props.item.desc_heading}</h1>
                        <h3 className="desc">{props.item.description}</h3>
                        <button className="shop_now_btn"><Link to="/productlist" >SHOP NOW</Link></button>
                    </div>
                </div>
    
                        {/* <Button className="CheckButton">
                    Check it out!
                </Button> */}
                
            </Paper>
        )
    }





  return (
    <div>
        <Example/>
    </div>
  )
}
