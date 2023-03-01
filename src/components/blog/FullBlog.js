import React from "react";
import { useParams } from "react-router-dom";
import { Image, Row, Col } from  "react-bootstrap"
import { useState, useEffect } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";


const FullBlog = () => {

    const [user, setUser] = useState({});
    let {id} = useParams();
    
    const handleDate = (dt) => {
        console.log(dt);
        console.log(dt);
        let dt1 = dt ? dt : "";
        let index1 = dt1.indexOf("-");
        let sub1 = dt1.substring(0, index1);
        let index2 = dt1.indexOf("-", index1+1);
        let sub2 = dt1.substring(index1+1, index2);
        let sub3 = dt1.substring(index2+1, index2+3)
        let date = sub3;
        let year = sub1;
        let month = "";
        console.log(sub1, sub2, sub3);
        if(sub2 == 1) month = "JAN"
        else if(sub2 == 2)  month  =  "FEB" 
        else if(sub2 == 3)  month  =  "MAR" 
        else if(sub2 == 4)  month =  "APR"
        else if(sub2 == 5)  month =  "MAY" 
        else if(sub2 == 6)  month =  "JUN"
        else if(sub2 == 7)  month =  "JUL"
        else if(sub2 == 8)  month =  "AUG" 
        else if(sub2 == 9)  month =  "SEPT" 
        else if(sub2 == 10)  month =  "OCT" 
        else if(sub2 == 11)  month =  "NOV" 
        else if(sub2 == 12)  month =  "DEC"
       return date + " " + " " + month + " " + year;
    }

    useEffect(async()=> {
        let response = await axios.get(`http://localhost:3001/zobiz/getBlog/${id}`)
        let {data} = response;
        console.log("Fullblog", data);
        setUser(data);
    })

    return (
        <div className="container">
            <h2>{user.title}</h2>
            <span style={{color: "darkgray",fontSize:"14px"}}>By : </span> <span style={{color: "blue", fontSize:"14px"}}>{ " "+ user.image ? user.writtenBy: ""}</span><br />
            <span style={{color: "darkgray",fontSize:"14px"}}>Date : </span><span style={{fontSize:"14px"}}>{handleDate(user.dateofCreation ? user.dateofCreation : "")}</span>
            <Row>
                {user.image && user.image.map((i) => (
                    <Col xl={4} md={4}>
                        <Image src={i} style={{marginBottom:"4%", marginTop:"4%"}} width="400rem" rounded />
                    </Col>
                ))}
            </Row>
            <p>{user.content ? user.content : ""}</p>
            <Helmet>
            <title>{user.title ? user.title.slice(0,20) : ""}</title>
            <meta name="description" content={ user.content ? user.content.slice(0,50) : ""} />
            </Helmet>
        </div>
    );

}

export default FullBlog;