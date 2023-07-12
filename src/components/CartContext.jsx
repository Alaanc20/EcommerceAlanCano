import { createContext } from "react";
import { useCart } from "./UseCart";
export const CartContext = createContext([])
export const CartProvider = ({children}) => {
    const cart = useCart()
    console.log(cart);
    return(
        <CartContext.Provider value={cart}>
            {children}
        </CartContext.Provider>
    )
}