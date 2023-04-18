import React from "react";
import { useParams } from "react-router-dom";
import { Image, Row, Col } from  "react-bootstrap"
import { useState, useEffect } from "react";
import http from "../httpServices/httpServices";
import { Helmet } from "react-helmet-async";


const FullBlog = () => {

    const [user, setUser] = useState({});
    let {id} = useParams();

    const handleDate = (dt) => {
        let dt1 = dt ? dt : "";
        let index1 = dt1.indexOf(" ");
        let index2 = dt1.indexOf(" ", index1+1);
        let sub1 = dt1.substring(index1+1, index2);
        let index3 = dt1.indexOf(" ", index2+1);
        let sub2 = dt1.substring(index2+1, index3);
        let index4 = dt1.indexOf(" ", index3+1);
        let sub3 = dt1.substring(index3+1, index4)
        console.log(sub3)
        let date = sub2;
        let year = sub3;
        let month = sub1;

       return date + " " + " " + month + " " + year;
    }


    useEffect(async()=> {
        try{
        let response = await http.get(`/getBlog/${id}`)
        let {data} = response;
        setUser(data);
        }
        catch(ex){
            console.log(ex)
        }
    },[])

  let writer = user.writtenBy ? user.writtenBy : "";
    return (
        <React.StrictMode>
        <div className="container">
            <Helmet>
            <title>{user.title ? user.title.slice(0,50) : ""}</title>
            <meta name="description" content={ user.content ? user.content.slice(0,500) : ""} />
            </Helmet>
            <h2>{user.title}</h2>
            <span style={{color: "darkgray",fontSize:"14px"}}>By : </span> <span style={{color: "blue", fontSize:"14px"}}>{ " "+ user.writtenBy ? writer.username ? writer.username : "" : ""}</span><br />
            <span style={{color: "darkgray",fontSize:"14px"}}>Date : </span><span style={{fontSize:"14px"}}>{handleDate( user.dateofCreation ? user.dateofCreation : "")}</span>
            <Row>
                {user.image && user.image.map((i, index) => (
                    <Col xl={4} md={4} key={index}>
                        <Image src={i} style={{marginBottom:"4%", marginTop:"4%"}} width="400rem" rounded />
                    </Col>
                ))}
            </Row>
             {user.content ? user.content.split("<br/>").map(str => <p><br />{str}</p>) : ""}
        </div>
        </React.StrictMode>
    );

}

export default FullBlog;