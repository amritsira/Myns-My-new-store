import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import React from 'react'
import './Product.css';



function Product(props) {
    return (
        <div className='product'>
            <div className="circle"></div>

                <img className="product__image" src={props.item} />
                {/* {props.item.img} */}
                <span className='info'>

                    <span className="icon">

                        <ShoppingCartOutlined className="btn"/>
                    </span>
                    {/* <span className="icon">

                        <SearchOutlined className="btn"/>
                    </span> */}
                    <span className="icon">

                        <FavoriteBorderOutlined className="btn"/>
                    </span>
                </span>
        </div>
    )
}

export default Product
