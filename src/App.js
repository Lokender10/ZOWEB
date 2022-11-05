import "./App.css";
// import Navbar from "./components/navbar/Navbar";
// import Header from "./components/header/Header";
// import Features from "./components/features/Features";
// import Download from "./components/download/Download";
// import Subscribe from "./components/subscribe/Subscribe";
// import Footer from "./components/footer/Footer";
import about from "../src/assets/headimg.png";
import img2 from "../src/assets/vivo.png";
import About from "./components/features/Features"; 
import {Routes, Route} from 'react-router-dom';

import {
  Navbar,
  Header,
  Features,
  Download,
  Subscribe,
  Faq,
  Footer,
  Howworks,
  Carousel,
  PartCarousel,
  Counter,
  Testimonial,
  Resellcarousel,
  Appdown,
  News
  
} from "./components";

function App() {
  return (
    <>
      <header className="header-bg">
        <Navbar />
        <Header />
      </header>
      <Carousel />
      <Features imgsrc={about} title={"Buy From Zobox"} data-aos="fade-up" />
      <Howworks/>
      <Features imgsrc={img2} title={"Buy From Zobox"}data-aos="fade-up" />
      <Subscribe />
      <Counter/>
      <PartCarousel/>
      <Resellcarousel/>
      <Testimonial/>
      <News/>
      <Download />
      <Appdown/>
      <Faq />
      <Footer />

      <Routes>
         <Route  path="/Home" element={<About/>}/> 
       
         
        </Routes>

    </>
  );
}

export default App;
