import Head from 'next/head'
import { useRouter } from 'next/router'
import Link from 'next/link'

function Home() {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push('/blog')
  }

  return (
    <>
      <Head>
        <title>My Next.js Site</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>My Next.js Site</div>
      <Link href="/pokemon">
        <a>Pokemon</a>
      </Link>
      <button onClick={handleClick}>Click me!</button>
    </>
  )
}

export default Home
