import Head from 'next/head';
import Hero from './components/common/hero';
import Header from './components/common/header';
import ProductSections from './components/sections/product-sections'
import Footer from './components/common/footer';
import { ThemeProvider } from 'theme-ui';
import theme from './components/index';
export default function Home() {
  return (
    <div className='overflow-hidden'>
      <ThemeProvider theme={theme}>
        <Head>
          <title>Create Next App</title>
        </Head>
        <Header />
        <Hero />
        <ProductSections />
        <Footer />
      </ThemeProvider>
    </div>
  );
}
