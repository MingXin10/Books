import Products from './components/Shop/Products'
import Layout from './components/Layout/Layout'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchCartData, sendCartData } from './store/cart-actions'
import Cart from './components/Cart/Cart'
import Notification from './components/UI/Notification'

let isInitial = true
function App() {
  const dispatch = useDispatch()
  const showCart = useSelector((state) => state.ui.cartIsVisible)
  const cartData = useSelector((state) => state.cart)
  const notification = useSelector((state) => state.ui.notification)

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      //避免第一次render送出空的資料，覆寫DB
      isInitial = false
      return
    }
    if (cartData.changed) dispatch(sendCartData(cartData))
    //fetch成功後，cartData改變，會觸發dispatch(sendCartData(cartData))，加上changed可防止此狀況
  }, [cartData, dispatch])

  return (
    <>
      {notification && (
        <Notification
          status={notification.status}
          title={notification.title}
          message={notification.message}
        />
      )}
      <Layout>
        {showCart && <Cart />}
        <Products />
      </Layout>
    </>
  )
}

export default App
