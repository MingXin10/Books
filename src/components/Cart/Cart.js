import CartItem from './CartItem'
import classes from './Cart.module.css'
import { useSelector } from 'react-redux'
import Card from '../UI/Card'

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items)

  return (
    <Card className={classes.cart}>
      <h2>購物車內的東東</h2>
      <ul>
        {cartItems.map((item) => (
          <CartItem
            id={item.id}
            title={item.title}
            quantity={item.quantity}
            price={item.price}
            totalPrice={item.totalPrice}
            key={item.id}
          />
        ))}
      </ul>
    </Card>
  )
}

export default Cart
