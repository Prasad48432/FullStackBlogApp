import Navbar from '../components/Navbar';
import '../styles/globals.css';
import {motion,useScroll,AnimatePresence} from 'framer-motion';
import Footer from '../components/Footer';
import React from 'react'
import NProgress, { render } from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/router';
import {ThemeProvider} from 'next-themes';


function MyApp({ Component, pageProps , router}) {

  Router.events.on('routeChangeStart', (url) => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());



  const { scrollYProgress } = useScroll();
  return (
    <>
      <ThemeProvider enableSystem={true} attribute="class">
        <Navbar/>
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={router.route}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              duration: 0.75,
            }}
            variants={{
              initialState: {
                clipPath: "polygon(0 0, 0 0, 0 100%, 0% 100%)",
                transition: { duration: 0.35 },
              },
              animateState: {
                clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                transition: { duration: 0.35, staggerChildren: 0.1 },
              },
              exitState: {
                clipPath: "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                transition: { duration: 0.35 },
              },
            }}
            className="base-page-size"
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
