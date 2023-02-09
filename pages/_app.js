import Navbar from '../components/Navbar';
import '../styles/globals.css';
import {motion,useScroll} from 'framer-motion';
import Footer from '../components/Footer';
import React from 'react'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/router';

function MyApp({ Component, pageProps }) {


  Router.events.on('routeChangeStart', (url) => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());


  const { scrollYProgress } = useScroll();
  return (
    <>
      <Navbar />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
