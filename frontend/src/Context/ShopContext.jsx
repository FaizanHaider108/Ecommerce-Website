import React, { createContext, useEffect, useState } from "react"


export const ShopContext = createContext( null );


const getDefaultCart = () => {
    let cart = {};
    for ( let index = 0; index <  300+1; index++ ) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {

    const [all_product, setAllProduct] = useState([]);

    const [cartItems, setCartItems] = useState( getDefaultCart() );

    useEffect(() => {
        fetch('http://localhost:4000/all-products'
        )
            .then((response) => response.json())
            .then((data) => setAllProduct(data))
    }, [])

 
    const AddtoCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    
        if (localStorage.getItem('auth-token')) {
            fetch('http://localhost:4000/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'auth-token': localStorage.getItem('auth-token'),
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ itemId: itemId }), // Corrected the syntax here
            })
            .then((response) => response.json())
            .then((data) => console.log(data)) // Corrected the syntax here
            .catch((error) => console.error('Error:', error)); // Added error handling
        }
    };


    const RemoveFromCart = ( itemId ) => {
        setCartItems( ( prev ) => ( { ...prev, [itemId]: prev[itemId] - 1 } ) )
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for ( const items in cartItems ) {
            if ( cartItems[items] > 0 ) {
                let itemInfo = all_product.find( ( product ) => product.id === Number( items ) );
                totalAmount += itemInfo.new_price * cartItems[items];
            }
        }

        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for ( const item in cartItems ) {
            if ( cartItems[item] > 0 ) {
                totalItem += cartItems[item]
            }
        }
        return totalItem;
    }




    const contextVal = { all_product, cartItems, AddtoCart, RemoveFromCart, getTotalCartAmount, getTotalCartItems };

    return (
        <ShopContext.Provider value={ contextVal }>
            { props.children }
        </ShopContext.Provider>
    )
}


export default ShopContextProvider;