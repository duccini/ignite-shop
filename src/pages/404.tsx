import Head from 'next/head'
import Link from 'next/link'
import { ErrorPageContainer } from '../styles/pages/errorpage'

export default function ErrorPage() {
  return (
    <>
      <Head>
        <title>Página não encontrada | Ignite Shop</title>
      </Head>

      <ErrorPageContainer>
        <h1>Página não encontrada</h1>
        <Link href="/">Ir para Página Inicial</Link>
      </ErrorPageContainer>
    </>
  )
}
