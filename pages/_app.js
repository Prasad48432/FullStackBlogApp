import Navbar from '../components/Navbar';
import '../styles/globals.css';
import {motion,useScroll} from 'framer-motion';
import Footer from '../components/Footer';

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
      <Footer />
    </>
  );
}

export default MyApp;
