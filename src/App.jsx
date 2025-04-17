import Navbar from "./components/navbar";
import Header from "./components/header";
import About from "./components/about";
import Experience from "./components/experience";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Footer from "./components/footer";
import BackToTop from "./commons/BackToTop";

const App = () => {
  return (
    <>
    <Navbar />
    <Header />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Contact />
    <Footer />
    <BackToTop />
    </>
  );
};

export default App;