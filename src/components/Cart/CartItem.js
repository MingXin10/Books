import classes from './CartItem.module.css'
import { cartActions } from '../../store/cart-slice'
import { useDispatch } from 'react-redux'
const CartItem = (props) => {
  const { title, quantity, totalPrice, price, id } = props
  const dispatch = useDispatch()
  const plusOne = () => {
    dispatch(cartActions.addItemCart({ id, title, price }))
  }
  const minusOne = () => {
    dispatch(cartActions.removeItemFromCart(id))
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${totalPrice.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/一本)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={minusOne}>-</button>
          <button onClick={plusOne}>+</button>
        </div>
      </div>
    </li>
  )
}

export default CartItem
