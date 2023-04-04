import Head from 'next/head';
import Hero from './components/common/hero';
import Header from './components/common/header';
import ProductSections from './components/sections/product-sections'
import Footer from './components/common/footer';
export default function Home () {
  return (
    <div className='bg-black'>
      <Head>
        <title>Create Next App</title>
        <img src='/images/banner-3.png fixed z-20'></img>
      </Head>
      <Header />
      <Hero />
      <ProductSections/>
      <Footer />
    </div>
  );
}
