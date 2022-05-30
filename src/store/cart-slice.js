import { createSlice } from "@reduxjs/toolkit";

createSlice({
  name: "cart",
  initialState: {
    items: [],
    totalQuantity: 0,
    // amount not use
    totalAmount: 0,
  },
  reducers: {
    addItem(state, action) {
      //   add new item
      const newItem = action.payload;
      //   find item
      const existingItem = state.items.find((item) => item.id === newItem.id);
    //   check item new or exist in cart
      if (!existingItem) {
        state.items.push({
          itemId: newItem.id,
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
    removeItem() {},
  },
});
