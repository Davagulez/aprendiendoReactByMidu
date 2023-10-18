import { createContext, useState } from "react";

export const CartContext = createContext()

export function CartProvider({ children }) {
    const [cart, setCart] = useState([])
    
    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0) {
            //una forma seria usando structuredClone
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

        //producto no esta en el carrito
        setCart(prevState => ([
            ...prevState,
            {
                ...product,
                quantity: 1
            }
        ]))
    }

    const removeFromCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }
     
    const clearCart = () => {
        setCart([])
    }
    
    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}