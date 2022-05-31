import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    // amount not use
    totalAmount: 0,
  },
  reducers: {
    addItemFromCart(state, action) {
      //   add new item
      const newItem = action.payload;
      //   find item
      const existingItem = state.items.find((item) => item.id === newItem.id);
      state.totalQuantity++;
    //   check item new or exist in cart
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          name: newItem.title,
        });
      } else {
        //   sum quantity exist in cart
        existingItem.quantity++;
        //   sum price exist in cart
        existingItem.totalPrice = existingItem.totalPrice + newItem.price;
      }
    },
    // remove
    removeItemFromCart(state,action) {
     const id = action.payload;
     const existingItem = state.items.find((item) => item.id === id)
     state.totalQuantity--;
     if(existingItem.quantity === 1){
        state.items = state.items.filter((item) => item.id !== id)
     }else{
        //  remove item
         existingItem.quantity--;
        //  minus total price
         existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
     }
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice;