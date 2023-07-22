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


  if (typeof window !== "undefined") {
  const trailer = document.getElementById("trailer");

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2,
        y = e.clientY - trailer.offsetHeight / 2;
  
  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 5 : 1})`
  }
  
  trailer.animate(keyframes, { 
    duration: 800, 
    fill: "forwards" 
  });
}




window.onmousemove = e => {
  const interactable = e.target.closest(".interactable"),
  interacting = interactable !== null;

  const icon = document.getElementById("trailer-icon");

  animateTrailer(e, interacting);

  trailer.dataset.type = interacting ? interactable.dataset.type : "";
}
}



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
