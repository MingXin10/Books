import ProductItem from './ProductItem'
import classes from './Products.module.css'

const DUMMY_PRODUCTS = [
  {
    id: 'p1',
    price: 458,
    title: 'HTML&CSS：網站設計建置優化之道',
    description: '你可以用更快更好的方式了解HTML和CSS',
  },
  {
    id: 'p2',
    price: 616,
    title: 'JavaScript & JQuery：網站互動設計程式進化之道',
    description: '你可以用更快更好的方式了解JavaScript和JQuery',
  },
  {
    id: 'p3',
    price: 458,
    title: 'JavaScript 學習手冊(第三版)',
    description: '為你的網頁增添生命與光釆',
  },
  {
    id: 'p4',
    price: 948,
    title: 'CSS大全（第四版)',
    description: 'WEB的視覺呈現',
  },
]

const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>挑一本喜歡的書吧</h2>
      <ul>
        {DUMMY_PRODUCTS.map((product) => (
          <ProductItem
            title={product.title}
            id={product.id}
            price={product.price}
            description={product.description}
            key={product.id}
          />
        ))}
      </ul>
    </section>
  )
}

export default Products
