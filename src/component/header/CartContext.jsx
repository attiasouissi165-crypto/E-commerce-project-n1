import React, { useEffect } from 'react'
import { createContext , useState } from 'react'



export const CartContext = createContext();

export default function cartProvider({children}) {
    const [cartItem, setcartItem] = useState(() => {
        const savedCart = localStorage.getItem('cartItem');
        return savedCart ? JSON.parse(savedCart) : [];
    })
    //increaseQuantity
    const increaseQuantity = (id) =>{
        setcartItem (prevItems => prevItems.map(item =>
            item.id === id ? {...item , quantity: item.quantity + 1 } : item
        ))
    }
     //decreaseQuantity
    const decreaseQuantity = (id) =>{
        setcartItem (prevItems => prevItems.map(item =>
            item.id === id && item.quantity > 1 ?
             {...item  ,quantity: item.quantity - 1 } : item
        ))
    }

//removeFromCart
const removeFromCart =(id) => {
    setcartItem((prevItems) => prevItems.filter(item => item.id !== id) )
}

    const addToCart = (item) => {
        setcartItem((prevItems) => [...prevItems, {...item, quantity: 1}])
    }

useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem))
}, [cartItem]);
  return (
    <CartContext.Provider value={{cartItem, addToCart , increaseQuantity , decreaseQuantity ,removeFromCart}}>
        {children}
    </CartContext.Provider>
  )
}

