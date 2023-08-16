import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    list: []
  },
  reducers: {
    addToCart: (state, action) => {
      const itemInCart = state.cart.find((item) => item.id === action.payload.id);
      if (itemInCart) {
        itemInCart.quantity = itemInCart.quantity += action.payload.quantity;
      } else {
        state.cart.push({ ...action.payload });
      }
    },
    addToList: (state, action) => {
      action.payload.favorite = true;
      state.list.push({ ...action.payload });
    },
    // incrementQuantity: (state, action) => {
    //   const item = state.cart.find((item) => item.id === action.payload);
    //   item.quantity++;
    // },
    // decrementQuantity: (state, action) => {
    //   const item = state.cart.find((item) => item.id === action.payload);
    //   if (item.quantity === 1) {
    //     item.quantity = 1
    //   } else {
    //     item.quantity--;
    //   }
    // },
    removeItemFromCart: (state, action) => {
      const removeItem = state.cart.filter((item) => item.id !== action.payload);
      state.cart = removeItem;
    },
    removeItemFromList: (state, action) => {
      const removeItem = state.list.filter((item) => item.id !== action.payload);
      state.list = removeItem;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export const {
  addToCart,
  removeItemFromCart,
  addToList,
  removeItemFromList
} = cartSlice.actions;