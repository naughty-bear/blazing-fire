import Head from 'next/head';
import Hero from './components/common/hero';
import Header from './components/common/header';
import ProductSections from './components/sections/product-sections'
import Footer from './components/common/footer';
export default function Home () {
  return (
    <div className='overflow-hidden'>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <Hero />
      <ProductSections/>
      <Footer />
    </div>
  );
}
