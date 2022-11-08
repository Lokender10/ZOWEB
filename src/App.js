import "./App.css";
// import Navbar from "./components/navbar/Navbar";
// import Header from "./components/header/Header";
// import Features from "./components/features/Features";
// import Download from "./components/download/Download";
// import Subscribe from "./components/subscribe/Subscribe";
// import Footer from "./components/footer/Footer";
import about from "../src/assets/headimg.png";
import img2 from "../src/assets/vivo.png";

import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import features from '../src/components/features/Features'
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
  News,
  Contactus
  
} from "./components";

function App() {
  return (
    // <>
 
    //   <header className="header-bg">
    //     <Navbar />
    //     <Header />
    //   </header>
    //   <Carousel />
    //   <Features imgsrc={about} title={"Buy From Zobox"} data-aos="fade-up" />
    //   <Howworks/>
    //   <Features imgsrc={img2} title={"Buy From Zobox"}data-aos="fade-up" />
    //   <Subscribe />
    //   <Counter/>
    //   <PartCarousel/>
    //   <Resellcarousel/>
    //   <Testimonial/>
    //   <News/>
    //   <Download />
    //   <Appdown/>
    //   <Faq />

    //   <Routes>
    //      <Route  path="/path"exact component={Navbar}/> 
    //      <Route
    //         path="*"
    //         element={
    //           <div>
    //             <h2>404 Page not found etc</h2>
    //           </div>
    //         } />
    
         
    //     </Routes>
       
      
    //   <Footer />   
    // </>
    <div>
    <BrowserRouter>
    {/* <header className="header-bg">
         <Navbar />
         <Header />
      </header> */}
      <Routes>
        <Route  path="/Home" exact element={
        <><><header className="header-bg">
              <Navbar />
              <Header />
            </header>
            </>
            <Carousel />
            <Features imgsrc={about} title={"About Us"} data-aos="fade-up" />
            <Howworks /><Features imgsrc={img2} title={"Buy From Zobox"} data-aos="fade-up" />
            <Subscribe />
            <Counter />
            <PartCarousel />
            <Resellcarousel />
            <Testimonial />
            <br/>
            <br/>
            <br/>
            <News />
            <br/>
            <br/>
            <br/>
            {/* <Download /> */}
            <Appdown />
            <Faq />
            <Footer />   
            </>
            
          } />
          <Route path="/About"  element={
          <><br/><br/><br/><br/><Navbar />
           <Features imgsrc={about} title={"About Us"} data-aos="fade-up" />
           <Features imgsrc={about} title={"Mission"} data-aos="fade-up" />
           <Features imgsrc={about} title={"Vision"} data-aos="fade-up" />
           <Features imgsrc={about} title={"Unique Features"} data-aos="fade-up" />
           <Footer/></>
             } />
          <Route path="/Contact"  element={<><Navbar /><Contactus/></>   } />
          <Route path="/BecomePartner"  element={<><Navbar /><br/><br/><Subscribe/><Footer/></>   } />
          <Route path="/News"  element={<><Navbar /><br/><br/><News/></>   } />
          <Route path="/Query"  element={<><Navbar /><br/><br/><Contactus/></>   } />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
