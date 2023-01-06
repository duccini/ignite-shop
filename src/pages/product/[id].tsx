import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Stripe from 'stripe'
import { stripe } from '../../lib/stripe'
import { ProductModel } from '../../models/product.model'
import {
  ImageContainer,
  ProductDetails,
  ProdutContainer,
} from '../../styles/pages/product'
import { priceFormatter } from '../../utils/formatter'

interface CompleteProduct extends ProductModel {
  description: string
}

interface ProductProps {
  product: CompleteProduct
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading ...</p>
  }

  return (
    <ProdutContainer>
      <ImageContainer>
        <Image
          src={product.imageUrl}
          width={520}
          height={430}
          alt={product.name}
        />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProdutContainer>
  )
}

/**
 * Generating paths on-demand: paths: []
 * Generates `/posts/1` and `/posts/2`:
 * paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
 */
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true, // can also be true or 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: priceFormatter.format(price.unit_amount! / 100),
        description: product.description,
      },
    },
    revalidate: 60 * 60 * 2,
  }
}
