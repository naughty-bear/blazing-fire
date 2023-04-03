import Head from 'next/head';
import Hero from './components/common/hero';
import Header from './components/common/header';
import Footer from './components/common/footer';
import Card from './components/sections/card'
import Vrtechnique from './components/sections/vRtechnique'

export default function Home () {
  return (
    <div className='bg-black'>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <Hero />
      <Card/>
      <Vrtechnique/>
      <Footer />
    </div>
  );
}
