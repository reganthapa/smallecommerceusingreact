import { createContext, useContext, useReducer } from "react";
import { cardreducer } from "../reducer/cardreducer";



const initialState = {
  cartlist: [],
  total: 0,
}

const Cartcontext = createContext(initialState);
export const CardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cardreducer, initialState)

  const addtocart = (product) => {
    console.log("context", product)
    const updatedcartlist = state.cartlist.concat(product);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedcartlist
      }
    })
    updateTotalPrice(updatedcartlist);
  }

  const updateTotalPrice = (products) => {
    let total = 0;
    products.forEach(item =>
      total = total + item.price)
    dispatch({
      type: "UPDATE_TOTAL",
      payload: {totalprice: total},
    });
  }


  const removefromcart = (product) => {
    const updatedcartlist = state.cartlist.filter(item => item.id !== product.id)

    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: {
        products: updatedcartlist
      }
    })
    updateTotalPrice(updatedcartlist);
  }



  const value = {
    total: state.total,
    cartlist: state.cartlist,
    addtocart,
    removefromcart,
    updateTotalPrice
  }

  return (
    <Cartcontext.Provider value={value}> {children}</Cartcontext.Provider>
  )
}

export const Usecart = () => {
  const Context = useContext(Cartcontext);
  return Context;
};

