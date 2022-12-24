import { useReducer } from "react";
import { CartContext } from "./CartContext";

const defaultCart = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  
  if (action.type === "ADD_CART_ITEM") {
    if (!action.item.quantity > 0)
      return defaultCart;
    
    const existingItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    const totalQuanity = (state.totalQuantity += action.item.quantity);
    const totalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    if (existingItemIndex >= 0 ) {
      state.items[existingItemIndex].quantity += action.item.quantity;
      return {
        items: state.items,
        totalQuantity: totalQuanity,
        totalAmount: totalAmount,
      };
    } else {
      const updatedCart = state.items.concat(action.item);
      return {
        items: updatedCart,
        totalQuantity: totalQuanity,
        totalAmount: totalAmount,
      };
    }
  }

  if (action.type === "REMOVE_CART_ITEM") {
    const existingItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });

    if (existingItemIndex >= 0) {
      const existingItemQty = state.items[existingItemIndex].quantity;
      const existingItemPrice = state.items[existingItemIndex].price;
      const updatedCart = state.items.filter((item) => item.id != action.id);
      return {
        items: updatedCart,
        totalQuantity:
          state.totalQuanity > 0 ? (state.totalQuantity -= existingItemQty) : 0,
        totalAmount:
          state.totalAmount > 0
            ? state.totalAmount - existingItemPrice * existingItemQty
            : 0,
      };
    }
  }

  return defaultCart;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart);

  function addCartItem(item) {
    dispatchCartAction({ type: "ADD_CART_ITEM", item: item });
  }

  function removeCartItem(id) {
    dispatchCartAction({ type: "REMOVE_CART_ITEM", id: id });
  }

  const cartContext = {
    items: cartState.items,
    totalQuantity: cartState.totalQuantity,
    totalAmount: cartState.totalAmount,
    addItem: addCartItem,
    removeItem: removeCartItem,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
