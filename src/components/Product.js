import { FavoriteBorderOutlined, ShoppingCartOutlined } from '@mui/icons-material';
import './Product.css';
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
function Product({item , addtocart , addtowishlist}) {
    // const [cartlength, setCartlength] = useState([]);
    // const [wishlist, setWishlist] = useState([]);

    // const pdcontext = useContext();
    // console.log(pdcontext);
    return (
        <div className='product' >
            <div className="circle"></div>

            <img className="product__image" src={item.image} />
            {/* {props.item.img} */}
            <span className='info'>

                <span className="icon" >
                    {

                    (item.cartqty > 0) ? 
                    <ShoppingCartIcon className="btn" onClick={()=>alert("already in the cart")}/>
                     :
                     <ShoppingCartOutlined className="btn" onClick={()=>addtocart(item)}/>
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
                    <FavoriteBorderOutlined className="btn" onClick={()=>addtowishlist(item)}/>
                    }


                </span>
                <button className="btn icon"><Link to={`/product/${item.id}`}>View</Link></button>
            </span>
        </div>
    )
}

export default Product
