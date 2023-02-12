//Core
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

//Components
import Header from 'components/Header'

function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      <div className='flex flex-col min-h-full bg-slate-800'>
        <p className='p-10 basis-1'>
          this is p tag
        </p>
        <ul className='flex-1 p-10 flex flex-col justify-around items-center'>
          <li className='basis-1/3'>
            <Link href={'/forest'}>forest</Link>
          </li>
          <li className='basis-1/3'>
            <Link href={'/awakecorp'}>awakecorp</Link>
          </li>
          <li className='basis-1/3'>
            <Link href={'/hanyang'}>hanyang</Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Home