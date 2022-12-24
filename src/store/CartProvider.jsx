import { useReducer } from "react";
import { CartContext } from "./CartContext";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_CART_ITEM") {
    const existingItemIndex = state.items.findIndex((item) => {
      return item.id === action.item.id;
    });

    if (existingItemIndex >= 0) {
      state.items[existingItemIndex].quantity += action.item.quantity;
      return {
        items: state.items,
        totalAmount:
          state.totalAmount + action.item.price * action.item.quantity,
      };
    } else {
      return {
        items: state.items.concat(action.item),
        totalAmount:
          state.totalAmount + action.item.price * action.item.quantity,
      };
    }
  }

  if (action.type === "REMOVE_CART_ITEM") {
    const existingItemIndex = state.items.findIndex((item) => {
      return item.id === action.id;
    });

    if (existingItemIndex >= 0) {
      state.items.splice(existingItemIndex, 1);
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
