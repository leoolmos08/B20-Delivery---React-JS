const { createContext, useState } = require("react");

 export const CartContext = createContext();

 const CartContextProvider = ({children})=>{
    const [cartList, setCartList] = useState([]);
    const addToCart = (product) =>{
    setCartList([
          ...cartList,
           {
            _id: product[0],
            price:product[1],
            title: product[2],
            main_image: product[3],
            description: product[4]
           }
          ])
    }
    return(
        <CartContext.Provider value={{cartList, addToCart}}>
        { children }
        </CartContext.Provider>
     );
 }
 export default CartContextProvider;