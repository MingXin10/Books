import { cartActions } from './cart-slice'
import { uiActions } from './ui-slice'

export const fetchCartData = () => {
  return async (dispatch) => {
    //260. 9:40 redux toolkit會自動給dispatch參數
    const fetchData = async () => {
      const response = await fetch(
        'https://morerealisticexample-default-rtdb.firebaseio.com/cart.json'
      )
      if (!response.ok) throw new Error('Could not fetch data!')
      return response.json()
    }
    try {
      const data = await fetchData()
      dispatch(
        cartActions.replaceCart({
          totalQuantity: data.totalQuantity,
          items: data.items || [],
        })
      ) //避免DB沒資料時fetch不到造成bug
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Fetching cart data failed!',
        })
      )
    }
  }
}

export const sendCartData = (cartData) => {
  return async (dispatch) => {
    //↑↑↑接收一個dispatch function當參數↑↑↑
    //↓↓↓在觸發reducer之前先dispatch notification↓↓↓
    dispatch(
      uiActions.showNotification({
        status: 'Pending',
        title: 'Sending',
        message: 'Sending cart data...',
      })
    )
    const sendData = async () => {
      const response = await fetch(
        'https://morerealisticexample-default-rtdb.firebaseio.com/cart.json',
        {
          method: 'PUT',
          body: JSON.stringify({
            totalQuantity: cartData.totalQuantity,
            items: cartData.items,
          }),
        }
      )
      if (!response.ok) {
        throw new Error('Sending cart data failed!')
      }
    }
    try {
      await sendData()
      dispatch(
        uiActions.showNotification({
          status: 'success',
          title: 'Success!',
          message: 'Sent cart data successfully!',
        })
      )
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sending cart data failed!',
        })
      )
    }
  }
}
