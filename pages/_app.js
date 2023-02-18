import Navbar from '../components/Navbar';
import '../styles/globals.css';
import {motion,useScroll,AnimatePresence} from 'framer-motion';
import Footer from '../components/Footer';
import React ,{useState}from 'react'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/router';
import { duration } from 'moment';

function MyApp({ Component, pageProps , router}) {

  const [toggle,setToggle] = useState(false);

  const toggler = () => {
    toggle ? setToggle(false) : setToggle(true);
  }

  console.log(toggle);

  Router.events.on('routeChangeStart', (url) => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => NProgress.done());
  Router.events.on('routeChangeError', () => NProgress.done());


  const { scrollYProgress } = useScroll();
  return (
    <>
      <Navbar data={toggler} />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      {toggle 
      ?
      <AnimatePresence>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
        pageInitial:{
          opacity: 0
        },
        pageAnimate:{
          opacity: 1,
          transition: 0.3,
        },
        pageExit:{
          background: 'white',
          filter: `invert()`,
          opacity: 0,
        }
      }}>
        <Component {...pageProps} />
      </motion.div>
      </AnimatePresence> 
      :
      <AnimatePresence>
      <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
        pageInitial:{
          opacity: 0
        },
        pageAnimate:{
          opacity: 1,
          transition:{
            duration: 0.4,
          }
        }
      }}>
        <Component {...pageProps} />
      </motion.div>
      </AnimatePresence> 
      }
      <Footer />
    </>
  );
}

export default MyApp;
