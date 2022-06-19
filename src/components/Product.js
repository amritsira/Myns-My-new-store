import { FavoriteBorderOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import './Product.css';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useContext} from 'react';
import Notecontext from '../context/Notecontext';

function Product({item }) {
    // const [cartlength, setCartlength] = useState([]);
    // const [wishlist, setWishlist] = useState([]);

    // const pdcontext = useContext();
    // console.log(pdcontext);
    
    let contextdata = useContext(Notecontext);
    
    
    return (
        <div className='product' >
            <div className="circle"></div>

            <img className="product__image" src={item.image} alt = {item.title} />
            {/* {props.item.img} */}
            <span className='info'>

                <span className="icon" >
                    {

                    (item.cartqty > 0) ? 
                    <ShoppingCartIcon className="btn" onClick={()=>alert("already in the cart")}/>
                     :
                     <ShoppingCartOutlined className="btn" onClick={()=>contextdata.addtocart(item)}/>
                    }
                </span>
                {/* <span className="icon">

                        <SearchOutlined className="btn"/>
                    </span> */}
                <span className="icon">

                    {
                    (item.wishlist) ? 
                    <FavoriteIcon className="btn"/>
                    :
                    <FavoriteBorderOutlined className="btn" onClick={()=>contextdata.addtowishlist(item)}/>
                    }


                </span>
                <button className="btn icon"><Link to={`/product/${item.id}`}>View</Link></button>
            </span>

            <div className="product_title"><h3>{item.title}</h3></div>
        </div>
    )
}

export default Product
