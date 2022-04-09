import Card from '../UI/Card'
import { cartActions } from '../../store/cart-slice'
import { useDispatch } from 'react-redux'
import classes from './ProductItem.module.css'

const ProductItem = (props) => {
  const dispatch = useDispatch()
  const { title, id, description, price } = props
  const addToCart = () => {
    dispatch(cartActions.addItemCart({ id, title, price }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCart}>加入購物車</button>
        </div>
      </Card>
    </li>
  )
}
export default ProductItem
