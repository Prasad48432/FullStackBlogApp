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
        <Navbar />
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
                clipPath: "circle(0%)",
                transition: { duration: 0.7 },
              },
              animateState: {
                clipPath: "circle(100%)",
                transition: { duration: 0.7, staggerChildren: 0.3 },
              },
              exitState: {
                clipPath: "circle(-100%)",
                transition: { duration: 0.7 },
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
