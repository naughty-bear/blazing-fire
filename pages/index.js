import Head from 'next/head';
import Hero from './components/common/hero';
import Header from './components/common/header';
import Footer from './components/common/footer';
import Card from './components/sections/card'
import Enjoy from './components/sections/enjoy'
import Vrtechnique from './components/sections/vRtechnique'
import Virtualtour from './components/sections/virtual-tour'
import Createworld from './components/sections/createWorld'
import Choose from './components/sections/choose'
import Can from './components/sections/can'

export default function Home () {
  return (
    <div className='bg-black'>
      <Head>
        <title>Create Next App</title>
        <img src='/images/banner-3.png fixed z-20'></img>
      </Head>
      <Header />
      <Hero />
      <Card/>
      <Vrtechnique/>
      <Enjoy/>
      <Virtualtour/>
      <Createworld/>
      <Choose/>
      <Can/>
      <Footer />
    </div>
  );
}
