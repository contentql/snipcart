import Product from './components/Product'
import { productList } from './data/products'

export default function Home() {
  return (
    <>
      <div className="container mx-auto p-5">
        <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {productList &&
            productList.map((product, index) => <Product product={product} key={index} />)}
        </div>
      </div>
    </>
  )
}
