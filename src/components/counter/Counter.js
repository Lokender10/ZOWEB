import React,{Fragment, useState} from "react";
import CountUp from 'react-countup';
import { Helmet } from "react-helmet-async";
import ScrollTrigger from 'react-scroll-trigger';
// import VisibilitySensor from "react-visibility-sensor"

const Counter = ({className, ...rest}) => {
    const [counterOn, setCounterOn] = useState(false)
    return (
    // <Fragment>
    //     <section className="counter">

    //     <div className="counter-row">

    //     <div className="counter-column">
    //         <strong data-number="305">
    //             <CountUp {...rest} start = {viewPortEntered ? null : 0} end={305}>
    //                 {({CountUpRef}) => {
    //                     return (
    //                         <VisibilitySensor
    //                         active = {!viewPortEntered}
    //                         onchange = {isVisible => {
    //                             if(isVisible){
    //                                 setViewPortEntered(true);
    //                             }
    //                             }}
    //                             delayedCall>
    //                                 <span className="number" ref={CountUpRef} />

    //                         </VisibilitySensor>
    //                     )
    //                 }
                    
    //                 }
    //             </CountUp>
    //         </strong>
    //         <span>on Going <br/>Projects</span>
    //     </div>

    //     <div className="counter-column">
    //         <strong data-number="305">
    //             <CountUp {...rest} start = {viewPortEntered ? null : 0} end={305}>
    //                 {({CountUpRef}) => {
    //                     return (
    //                         <VisibilitySensor
    //                         active = {!viewPortEntered}
    //                         onchange = {isVisible => {
    //                             if(isVisible){
    //                                 setViewPortEntered(true);
    //                             }
    //                             }}
    //                             delayedCall>
    //                                 <span className="number" ref={CountUpRef} />

    //                         </VisibilitySensor>
    //                     )
    //                 }
                    
    //                 }
    //             </CountUp>
    //         </strong>
    //         <span>on Going <br/>Projects</span>
    //     </div>

    //     <div className="counter-column">
    //         <strong data-number="305">
    //             <CountUp {...rest} start = {viewPortEntered ? null : 0} end={305}>
    //                 {({CountUpRef}) => {
    //                     return (
    //                         <VisibilitySensor
    //                         active = {!viewPortEntered}
    //                         onchange = {isVisible => {
    //                             if(isVisible){
    //                                 setViewPortEntered(true);
    //                             }
    //                             }}
    //                             delayedCall>
    //                                 <span className="number" ref={CountUpRef} />

    //                         </VisibilitySensor>
    //                     )
    //                 }
                    
    //                 }
    //             </CountUp>
    //         </strong>
    //         <span>on Going <br/>Projects</span>
    //     </div>

    //     <div className="counter-column">
    //         <strong data-number="305">
    //             <CountUp {...rest} start = {viewPortEntered ? null : 0} end={305}>
    //                 {({CountUpRef}) => {
    //                     return (
    //                         <VisibilitySensor
    //                         active = {!viewPortEntered}
    //                         onchange = {isVisible =>{
    //                             if(isVisible){
    //                                 setViewPortEntered(true);
    //                             }
    //                             }}
    //                             delayedCall>
    //                                 <span className="number" ref={CountUpRef} />

    //                         </VisibilitySensor>
    //                     )
    //                 }
                    
    //                 }
    //             </CountUp>
    //         </strong>
    //         <span>on Going <br/>Projects</span>
    //     </div>
    //     </div>

    //     </section>
    // </Fragment>
    <ScrollTrigger onEnter={()=> setCounterOn(true)} onExit={()=>setCounterOn(false)}>
        <div  style={{
            width : '100%',
            background:'#2a3380',
            margin: '2% auto',
            color:'white',
            padding:'50px',
            display:'flex'

        }}>
            
            <h1 style={{margin:'2px auto'}}>
                {counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}
                + Partners
            </h1>
            <h1 style={{margin:'2px auto'}}>
                {counterOn && <CountUp start={0} end={1000} duration={2} delay={0}/>}
                + Products
            </h1>

            <h1 style={{margin:'2px auto'}}>
                {counterOn && <CountUp start={0} end={100} duration={2} delay={0}/>}
                + Partners
            </h1>
            <h1  style={{margin:'2px auto'}}>
                {counterOn && <CountUp start={0} end={6} duration={2} delay={0}/>}
                + State
            </h1>
           
            
        </div>
        <Helmet>
            <title>Zobox || SASTE MOBILE KA ADDA</title>
            <meta name="description" content="Our partners" />
        </Helmet>
        </ScrollTrigger>
)}

export default Counter;