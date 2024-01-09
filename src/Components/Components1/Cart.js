import React, { useContext } from "react";
import { BooksContext } from "../../App";





const Cart = () => {
  const context = useContext(BooksContext);

  const totalCartAmount = context.state.cart
    .reduce((total, book) => (total = total + book.price * book.count), 0)
    .toFixed(2);
  return (
    
  <>

      <h3>Total Cart Amount: &#8378;{totalCartAmount}</h3>
<div>
      {context.state.cart.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.name} />
    
       
       
        
            <p>Price: &#8378;{book.price}</p>
            <p>Total: &#8378;{(book.price * book.count).toFixed(2)}</p>
            <p>You have a total of {book.count} in your cart.</p>
            <button onClick={() => context.decrease(book.id)}>-</button>
            <button onClick={() => context.removeFromCart(book.id)}>
              Remove
            </button>
            <button onClick={() => context.increase(book.id)}>+</button>
        </div>
  
      ))}
   </div>
   
      </>
  );
};

export default Cart;