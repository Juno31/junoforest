//Core
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <div>
        <p className='text-blue-600'>
          this is p tag
        </p>
        <ul>
          <li>
            <Link href={'/forest'}>forest</Link>
          </li>
          <li>
            <Link href={'/awakecorp'}>awakecorp</Link>
          </li>
          <li>
            <Link href={'/hanyang'}>hanyang</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Home