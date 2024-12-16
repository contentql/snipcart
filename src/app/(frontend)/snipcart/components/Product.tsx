import Image from 'next/image'
import Link from 'next/link'

const Product = ({
  product,
}: {
  product: {
    id: string
    name: string
    price: number
    image: string
    description: string
  }
}) => {
  return (
    <article className="bg-white border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center text-center hover:shadow-lg transition-shadow dark:bg-gray-800 dark:border-gray-700 dark:text-white">
      <Link href={`/snipcart/product/${product.id}`}>
        <h2 className="text-lg font-semibold text-blue-600 hover:underline mb-2 dark:text-blue-400">
          {product.name}
        </h2>
      </Link>
      <Image
        src={product.image}
        alt={product.name}
        width={350}
        height={350}
        className="rounded-md mb-4 object-cover"
      />
      <p className="text-gray-700 text-sm mb-4 dark:text-gray-300">{product.description}</p>
      <p className="text-lg font-bold text-green-500 mb-4 dark:text-green-400">${product.price}</p>
      <button
        className="snipcart-add-item bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors dark:bg-blue-700 dark:hover:bg-blue-800"
        data-item-id={product.id}
        data-item-name={product.name}
        data-item-price={product.price}
        data-item-url={`/product/${product.id}`}
        data-item-image={product.image}
      >
        Add to cart
      </button>
    </article>
  )
}

export default Product
