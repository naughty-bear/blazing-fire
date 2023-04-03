import Head from 'next/head';
import Hero from './components/common/hero';
import Header from './components/common/header';
import Footer from './components/common/footer';
import ProductSections from './components/sections/product-sections';

export default function Home () {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <Header />
      <Hero />
      <ProductSections />
      <Footer />
    </div>
  );
}
