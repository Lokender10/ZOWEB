import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../carousel/Carousel.css";
import { data } from "./data";
import { Helmet } from "react-helmet";
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

const Carousel = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 1000,
      autoplay:true,
      autoplaySpeed: 4000,
      arrows:false,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="Carousel-head">
        <Slider {...settings}>
        {data.map((item) => (
          <div>
            <img src={item} alt="" style={{ width: "100%", height: "100%",  objectfit: 'cover', objectposition: 'center', overflow:'hidden' }} />
          </div>
        ))}
        </Slider>
        <Helmet>
            <title>Zobox || SASTE MOBILE KA ADDA</title>
            <meta name="description" content="Zobox || SASTE MOBILE KA ADDA" />
        </Helmet>
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

export default Carousel;