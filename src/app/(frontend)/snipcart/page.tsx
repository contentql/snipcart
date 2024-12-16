import Products from './components/Products'
import { ProductList } from './data/products'

export default function Home() {
  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-5">
          {ProductList &&
            ProductList.map((productList, index) => (
              <Products products={productList} key={index} />
            ))}
        </div>
      </div>
    </>
  )
}
