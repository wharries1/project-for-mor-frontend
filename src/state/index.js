import { createSlice } from "@reduxjs/toolkit";

const CART_STORAGE_KEY = "my-cart";

const initialState = {
  isCartOpen: false,
  cart: localStorage.getItem(CART_STORAGE_KEY)
    ? JSON.parse(localStorage.getItem(CART_STORAGE_KEY))
    : [],
  items: [],
  posts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
    setPosts: (state, action) => {
      state.posts = action.payload;
    },

    addToCart: (state, action) => {
      const newItem = action.payload.item;
      const existingItem = state.cart.find(
        (item) => item.id === newItem.id && item.selectedSize === newItem.selectedSize
      );

      if (existingItem) {
        existingItem.count += 1;
      }else {
        state.cart.push({ ...newItem, count: 1, });
      }

      // Save cart to local storage
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
    },

    removeFromCart: (state, action) => {
      const { id, selectedSize } = action.payload;
      state.cart = state.cart.filter((item) => !(item.id === id && item.selectedSize === selectedSize));
    
      // Save cart to local storage
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
    },

    increaseCount: (state, action) => {
      const itemId = action.payload.id;
      const existingItemIndex = state.cart.findIndex(item => item.id === itemId);
    
      if (existingItemIndex >= 0) {
        state.cart[existingItemIndex].count += 1;
      } else {
        const newItem = state.items.find(item => item.id === itemId);
        if (newItem) {
          state.cart.push({ ...newItem, count: 1 });
        }
      }

      // Save cart to local storage
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
    },

    decreaseCount: (state, action) => {
      const itemId = action.payload.id;
      const existingItemIndex = state.cart.findIndex(item => item.id === itemId);
    
      if (existingItemIndex >= 0) {
        if (state.cart[existingItemIndex].count > 1) {
          state.cart[existingItemIndex].count -= 1;
        } else {
          state.cart = state.cart.filter(item => item.id !== itemId);
        }
      }

      // Save cart to local storage
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state.cart));
    },

    setIsCartOpen: (state) => {
      state.isCartOpen = !state.isCartOpen;
    },
  },
});


export const {
  setItems,
  setPosts,
  addToCart,
  removeFromCart,
  increaseCount,
  decreaseCount,
  setIsCartOpen,
} = cartSlice.actions;


export default cartSlice.reducer;
