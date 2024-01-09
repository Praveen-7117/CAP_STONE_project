import { Route, Routes, useParams} from "react-router-dom";

import { createContext, useState } from "react";
import Header from "./Components/Components1/Header";
import Product from "./Components/Components1/Product";
import Cart from "./Components/Components1/Cart";
import RealCardComponent from "./Components/Components1/RealCardComponent";
import Home from "./Components/Components1/Home";




export const BooksContext = createContext();
function App() {
  
 
  const [state, setState] = useState({
   
    cart: []
  });

  const addToCart = (product) => {
    setState({
      ...state,
      cart: state.cart.find((cartItem) => cartItem.id === product.id)
        ? state.cart.map((cartItem) =>
            cartItem.id === product.id
              ? { ...cartItem, count: cartItem.count + 1 }
              : cartItem
          )
        : [...state.cart, { ...product, count: 1 }]
    });
  };
  const removeFromCart = (id) =>
    setState({
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id)
    });
    const increase = (id) => {
      setState({
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, count: cartItem.count + 1 }
            : cartItem
        )
      });
    };

    const decrease = (id) => {
      setState({
        ...state,
        cart: state.cart.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, count: cartItem.count > 1 ? cartItem.count - 1 : 1 }
            : cartItem
        )
      });
    };
  return(
  <>
      <BooksContext.Provider
  value={{state,addToCart, increase, decrease, removeFromCart }}
>
    <Header />
    <Routes>
    <Route path="/" element={<Home />}/>
   <Route path="/products" element= { 
    
    <RealCardComponent/>}/>
    <Route path="/products/:id" element={<Product/>}/>

<Route path="/cart" element={<Cart/>}/>

    
    </Routes>   
   </BooksContext.Provider>
  </>
  );
 
    }

export default App;