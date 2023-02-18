import Navbar from '../components/Navbar';
import '../styles/globals.css';
import {motion,useScroll,AnimatePresence} from 'framer-motion';
import Footer from '../components/Footer';
import React from 'react'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/router';

function MyApp({ Component, pageProps , router}) {


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
      <AnimatePresence>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial:{
          opacity: 0
        },
        pageAnimate:{
          opacity: 1,
        }
      }}>
        <Component {...pageProps} />
      </motion.div>
      </AnimatePresence> 
      <Footer />
    </>
  );
}

export default MyApp;
