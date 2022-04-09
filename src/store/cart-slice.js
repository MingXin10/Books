import { createSlice } from '@reduxjs/toolkit'
//同步,side-effect free code(也就是data 轉換)，通常會寫在reducer，避免放在action creator或是component裡面

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    totalQuantity: 0,
    items: [],
    changed: false,
  },
  //reducer是pure function，Fetch不能放裡面
  reducers: {
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity
      state.items = action.payload.items
    },
    addItemCart(state, action) {
      const newItem = action.payload
      const existingItem = state.items.find((item) => item.id === newItem.id)
      state.totalQuantity++
      state.changed = true
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          quantity: 1,
          totalPrice: newItem.price,
          price: newItem.price,
        })
      } else {
        existingItem.quantity++
        existingItem.totalPrice += existingItem.price
      }
    },
    removeItemFromCart(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload)
      state.totalQuantity--
      state.changed = true
      if (existingItem.quantity === 1) {
        state.items.filter((item) => item.id !== action.payload.id)
      } else {
        existingItem.quantity--
        existingItem.totalPrice -= existingItem.price
      }
    },
  },
})

const cartReducers = cartSlice.reducer
export const cartActions = cartSlice.actions
export default cartReducers
