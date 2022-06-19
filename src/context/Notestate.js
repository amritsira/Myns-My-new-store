import Notecontext from "./Notecontext";
import {useState} from 'react';

const Notestate = (props)=>{
    const [cartItems, setCartItems] = useState([]);
    const [wishlist, setWishlist] = useState([]);
    const [cartqty, setCartqty] = useState(0);
    const [wishlistqty, setWishlistqty] = useState(0);
    const [loggedin , setloggedin] = useState(false);

    function doesExist(item) {
        return cartItems.includes(item);
    }
    function doesExistinWL(item) {
        return wishlist.includes(item);
    }

    function addtocart(item) {
        let tempobj = item;
        tempobj.cartqty = 1;
        if (!doesExist(item)) {
            setCartItems([...cartItems, tempobj]);
            setCartqty(cartItems.length + 1);
        }
        setloggedin(true);
    }

    function addtowishlist(item) {
        let tempobj = item;
        tempobj.wishlist = true;
        if (!doesExistinWL(item)) {
            setWishlist([...wishlist, tempobj]);
            setWishlistqty(wishlist.length + 1);
        }
    }

    function deleteitem(item) {
        item.cartqty = 0;
        let remainingItems = cartItems.filter((allitem) => {
            return (item.id !== allitem.id);
        })
        setCartItems(remainingItems);
        setCartqty(cartqty - 1);
    }

    function removewishlist(item) {
        item.wishlist = false;
        let remainingItems = wishlist.filter((curitem) => {
            return (item.id !== curitem.id);
        })
        setWishlist(remainingItems);
        setWishlistqty(wishlistqty - 1);
    }





  return (  
        <Notecontext.Provider value={ {wishlistqty ,loggedin ,setloggedin, cartqty , addtocart , removewishlist , cartItems ,deleteitem,wishlist,addtowishlist    }}>
            {props.children}
        </Notecontext.Provider>
    )
}

export default Notestate;

