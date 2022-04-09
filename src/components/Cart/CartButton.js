import classes from './CartButton.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { uiActions } from '../../store/ui-slice'

const CartButton = () => {
  const dispatch = useDispatch()
  const totalQuantity = useSelector((state) => state.cart.totalQuantity)
  const toggle = () => {
    dispatch(uiActions.toggle())
  }
  
  return (
    <button className={classes.button} onClick={toggle}>
      <span>我的購物車</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  )
}

export default CartButton
