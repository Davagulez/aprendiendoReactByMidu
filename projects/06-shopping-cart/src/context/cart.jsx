import { useReducer } from "react";
import { createContext, useState } from "react";
import { cartReducer, cartInitialState } from "../reducers/cart";

export const CartContext = createContext()

function useCartReducer() {
    //dispatch es el responsable de enviar toda la informacion al reducer 
    const [state, dispatch] = useReducer(cartReducer, cartInitialState) 

    const addToCart = product => dispatch({
        type:'ADD_TO_CART',
        payload:product
    })

    const removeFromCart = product => dispatch({
        type:'REMOVE_FROM_CART',
        payload:product
    })

    const clearCart = () => dispatch({
        type:'CLEAN_CART'
    })

    return {state, addToCart, removeFromCart, clearCart}
}

// la dependencia de usar react context es minima
export function CartProvider({ children }) {
    const {state, addToCart, removeFromCart, clearCart} = useCartReducer()
    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            clearCart,
            removeFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}