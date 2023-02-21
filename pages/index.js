import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Header from "@/components/Header";
import Banner from "@/components/Banner";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Airbnb Clone by Ariel</title>
        <meta name="description" content="Airbnb Clone by Ariel" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
          {/*Header*/}
          <Header />
          {/*Banner*/}
          <Banner />


      </div>
    </>
  )
}
