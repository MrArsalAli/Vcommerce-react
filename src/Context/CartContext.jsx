import { createContext } from "react";
import { useState, useEffect } from "react";

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const cartItemsFromLocal = localStorage.getItem("cartItems");
    if (cartItemsFromLocal) {
      setCartItems([...JSON.parse(cartItemsFromLocal)]);
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }
  }, [cartItems]);

  function addItemToCart(item) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id == item.id);
    if (itemIndex == -1) {
      arr.push({ ...item, quantity: 1 });
    } else {
      arr[itemIndex].quantity++;
    }
    setCartItems([...arr]);
  }

  function removeCartItem(id) {
    const arr = cartItems;

    const itemIndex = cartItems.findIndex((data) => data.id == id);
    arr.splice(itemIndex, 1);
    setCartItems([...arr]);
  }

  function lessQuantityFromCart(id) {
    const arr = cartItems;
    const itemIndex = cartItems.findIndex((data) => data.id == id);
    arr[itemIndex].quantity--;
    setCartItems([...arr]);
  }

  function isItemAdded(id) {
    const arr = cartItems;

    const itemIndex = cartItems.findIndex((data) => data.id == id);
    if (itemIndex == -1) {
      return null;
    } else {
      return arr[itemIndex];
    }
  }
  return (
    <CartContext.Provider
      value={{
        cartItems,
        addItemToCart,
        removeCartItem,
        isItemAdded,
        lessQuantityFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
