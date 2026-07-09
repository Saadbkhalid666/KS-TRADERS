import { createSlice, current } from "@reduxjs/toolkit";

const getCartFromStorage = () => {
  if (typeof window === "undefined") return [];

  const cartData = localStorage.getItem("cartData");

  return cartData ? JSON.parse(cartData) : [];
};

const saveCartToStorage = (cartItems) => {
  if (typeof window === "undefined") return;

  localStorage.setItem(
    "cartData",
    JSON.stringify(current(cartItems))
  );
};

const initialState = {
  cartItems: getCartFromStorage(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    addToCart: (state, action) => {
      const item = state.cartItems.find(
        (product) => product.id === action.payload.id
      );

      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.cartItems.push(action.payload);
      }

      saveCartToStorage(state.cartItems);
    },

    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );

      saveCartToStorage(state.cartItems);
    },

    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (product) => product.id === action.payload
      );

      if (item) {
        item.quantity += 1;
      }

      saveCartToStorage(state.cartItems);
    },

    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(
        (product) => product.id === action.payload
      );

      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(
            (product) => product.id !== action.payload
          );
        }
      }

      saveCartToStorage(state.cartItems);
    },

    clearCart: (state) => {
      state.cartItems = [];

      saveCartToStorage(state.cartItems);
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;