import Image from 'next/image'
import { productList } from '../../data/products'

interface Props {
  params: Promise<{
    id: string
  }>
}

const ProductSingle = async (props: Props) => {
  const syncParams = await props.params
  const productId = syncParams.id
  const data = productList.find((post) => post.id === productId)

  return (
    <div className="container mx-auto">
      <article className="mx-auto max-w-[800px] grid grid-cols-2 gap-10 mt-32">
        <div className="relative">
          <Image src={data?.image || ''} alt="ds" className="h-auto w-auto" fill={true} />
        </div>
        <div>
          <h1 className="mb-5">{data?.name}</h1>
          <p className="mb-5">{data?.price}</p>
          <p className="mb-5">{data?.description}</p>
          <button
            className={`snipcart-add-item`}
            data-item-id={data?.id}
            data-item-name={data?.name}
            data-item-price={data?.price}
            data-item-url={`/product/${data?.id}`}
            data-item-image={data?.image || ''}
          >
            Add to cart
          </button>
        </div>
      </article>
    </div>
  )
}

export default ProductSingle
