import { configureStore } from '@reduxjs/toolkit'
import uiReducer from './ui-slice'
import cartReducers from './cart-slice'

const store = configureStore({
  reducer: {
    ui: uiReducer,
    cart: cartReducers
  }
})
export default store
