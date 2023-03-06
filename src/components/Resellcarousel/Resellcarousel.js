import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Resellcarousel.css";
import { data } from "./data";
import { Helmet } from "react-helmet-async";
// import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

// const PreviousBtn = (props) => {
//   // console.log(props);
//   const { className, onClick } = props;
//   return (
//     <div className={className} onClick={onClick}>
//       {/* <ArrowBackIos style={{ color: "blue", fontSize: "30px" }} /> */}
//     </div> 
//   );
// };
// const NextBtn = (props) => {
//   const { className, onClick } = props;
//   return (
//     <div className={className} onClick={onClick}>
//       {/* <ArrowForwardIos style={{ color: "blue", fontSize: "30px" }} /> */}
//     </div>
//   );
// };

const Resellcarousel = () => {
    const settings = {
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      
    };
    return (
      <div className="ResellCarousel-head">
         <Helmet>
            <title>Zobox || SASTE MOBILE KA ADDA</title>
            <meta name="description" content="Zobox || SASTE MOBILE KA ADDA" />
        </Helmet>
         <div className="title " data-aos="fade-up">
          <h2>Brands We Sell</h2>
     
        </div>
        <Slider {...settings}>
        {data.map((item) => (
          <div>
            <img src={item} alt="" style={{ width: "10vw", height: "10vh" }} />
          </div>
        ))}
        </Slider>
      </div>
    );
  
};



// export default class SimpleSlider extends Component {
//   render() {
//     const settings = {
//       dots: true,
//       infinite: true,
//       speed: 500,
//       slidesToShow: 1,
//       slidesToScroll: 1
//     };
//     return (
//       <div>
//         <Slider {...settings}>
//         {data.map((item) => (
//           <div>
//             <img src={item} alt="" style={{ width: "100%", height: "60vh" }} />
//           </div>
//         ))}
//         </Slider>
//       </div>
//     );
//   }
// }

export default Resellcarousel;