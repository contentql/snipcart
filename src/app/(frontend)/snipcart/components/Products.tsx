import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Products = ({ products }: any) => {
  return (
    <article>
      <Link href={`/product/${products.id}`}>
        <h2> {products.name}</h2>
      </Link>
      <p>{products.description}</p>
      <p>{products.price}</p>
      <Image src={products.image} alt="ds" width={350} height={350} className="h-auto w-auto" />
      <button
        className={`snipcart-add-item`}
        data-item-id={products.id}
        data-item-name={products.name}
        data-item-price={products.price}
        data-item-url={`/product/${products.id}`}
        data-item-image={products.image}
      >
        Add to cart
      </button>
    </article>
  )
}

export default Products
