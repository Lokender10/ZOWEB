import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./PartCarousel.css";
import { data } from "./data";
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

const PartCarousel = () => {
    const settings = {
      infinite: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      
    };
    return (
      
      <div className="PartCarousel-head">
         <div className="title " data-aos="fade-up">
          <h2>Our Finance Partner</h2>
     
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

export default PartCarousel;