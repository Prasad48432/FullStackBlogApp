import Navbar from '../components/Navbar';
import '../styles/globals.css';
import {motion,useScroll} from 'framer-motion';

function MyApp({ Component, pageProps }) {

  const { scrollYProgress } = useScroll();
  return (
    <>
      <Navbar />
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
