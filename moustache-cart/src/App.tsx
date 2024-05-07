import { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductPage from './page-logic/ProductPage';
import { CartItem } from './generalTypes';


const App = () => {
  const [totalItems, setTotalItems] = useState<number>(0);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (cartItem: CartItem | undefined) => {
    if (cartItem) {
      setTotalItems(prevState => ++prevState);
      const updateItemIndex: number  = cartItems.findIndex(el => el.size === cartItem.size);
      // update same item if already in cart
      if (updateItemIndex !== -1) {
        const copyCartItems = [...cartItems];
        copyCartItems[updateItemIndex].quantity += 1;
        setCartItems(copyCartItems);
      }
      // else just add new item to cart
      else {
        setCartItems(prevState => [...prevState, cartItem])
      }
      
    }
    else {
      alert("Please select a size");
      console.log('error updating cart');
    }
    
  }

  return (
    <div>
      <Header cartTotal={totalItems} cartItems={cartItems} />
      <ProductPage addToCart={addToCart} />
    </div>
  );
}

export default App;
