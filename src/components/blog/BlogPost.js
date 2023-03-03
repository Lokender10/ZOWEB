import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, Row, Col, Image } from  "react-bootstrap";
import ThemeProvider from 'react-bootstrap/ThemeProvider'
import Button from "react-bootstrap/Button";
import http from "../httpServices/httpServices";
import "./blogPost.css";
import { Helmet } from "react-helmet";

const BlogPost = () => {

    let [blog, setBlog] = useState([]);

    const handleDate = (dt) => {
        let dt1 = dt ? dt : "";
        let index1 = dt1.indexOf(" ");
        let index2 = dt1.indexOf(" ", index1+1);
        let sub1 = dt1.substring(index1+1, index2);
        let index3 = dt1.indexOf(" ", index2+1);
        let sub2 = dt1.substring(index2+1, index3);
        let index4 = dt1.indexOf(" ", index3+1);
        let sub3 = dt1.substring(index3+1, index4)
        let date = sub2;
        let year = sub3;
        let month = sub1;
       return date + " " + " " + month + " " + year;
    }

    useEffect(async()=> {
      let response = await http.get("/getBlog");
      let { data } = response;
      setBlog(data); 
    },[])

    let navigate = useNavigate();
    let news = blog ? blog.filter((n) => n.typeofContent === "News") : [];
    blog = blog ? blog.filter((e) => e.typeofContent === "Blog") : [];
    return (
        <div className="container">
                <Helmet>
                    <title>Blog</title>
                    <meta name="description" content={blog.length > 0 ? blog[0].content.substring(0,30) : ""} />
                    <a href="https://zobox.in"></a>
                    </Helmet>
            <h2 className="zobox" style={{fontSize:"18px"}}><u>ZOBOX :</u></h2>
            <p className="zobox1">Welcome to Zobox blog section, where we continuously curate the best and most helpful content for you to navigate
               the smartphone and gadgets world easily. Primarily you will find the latest mobile news here updated as soon as possible,
               so you are always on track with what is going on in the smartphone world.</p>
                <Card className="card">
                 <Card.Body>
                <ThemeProvider>
               <Row style={{marginLeft:"20px"}}>
                    <Col xl={7} md={6}>
                        <React.Fragment>
                        <Card.Img src={blog.length > 0 ?  blog[0].image[0] : ""} style={{cursor:"pointer"}} className="image" onClick={() => navigate(`/blog/user/${blog.length > 0 ? blog[0]._id : ""}`)} />
                        <h3>{blog.length > 0 ? blog[0].title : ""}</h3> 
                         <span style={{color: "darkgray",fontSize:"14px"}}>By : </span> <span style={{color: "blue", fontSize:"14px"}}>{ " "+ blog.length > 0 ? blog[0].writtenBy.username : ""}</span><br />
                         <span style={{color: "darkgray",fontSize:"14px"}}>Date : </span><span style={{fontSize:"14px"}}>{handleDate(blog.length > 0 ? blog[0].dateofCreation : "")}</span>
                        <p style={{cursor:"pointer"}} onClick={() =>navigate(`/blog/user/${blog.length > 0 ? blog[0]._id : ""}`)}>{blog.length > 0 ? blog[0].content.substring(0,30) : ""}</p>
                        </React.Fragment>
                    </Col>
                    <Col xl={5} md={6}>
                    {blog.map((e,index) => (
                        index > 0 && index <= 4 ?
                        <Row>
                        <Col xs={7} md={6}>
                        <Card.Img src={e.image[0]} style={{marginBottom:"4%", cursor:"pointer"}} onClick={() =>navigate(`/blog/user/${e._id}`)}/>
                        </Col>
                        <Col xs={5} md={6} style={{marginTop:"10px"}}><h2>{e.title}</h2> 
                         <span style={{color: "darkgray", fontSize:"14px"}}>By : </span> <span style={{color: "blue", fontSize:"14px"}}>{ " "+e.writtenBy.username}</span><br />
                         <span style={{color: "darkgray", fontSize:"14px"}}>Date : </span> <span style={{fontSize:"14px"}}>{handleDate(e.dateofCreation)}</span><br />
                        <p style={{cursor:"pointer"}} onClick={() =>navigate(`/blog/user/${e._id}`)}>{e.content.substring(0,20)}</p><br />
                        </Col>
                        </Row>
                        : ""
                        ))}
                    </Col>
                    </Row>
                    </ThemeProvider>
                 </Card.Body>
                </Card>

                <h2 style={{fontSize:"24px", margin:"2%"}}><u>Recent News :</u></h2>
                <Row>
                {news.map((ele, index) => (
                    index <=7 ?
                        <Col xl={3} md={3}>
                        <Image src={ele.image[0]} style={{marginBottom:"4%", cursor:"pointer"}} width="300rem" rounded onClick={() =>navigate(`/blog/user/${ele._id}`)}/>
                        <p xs={5} md={6} style={{marginTop:"10px"}}>
                            <h2>{ele.title}</h2> 
                         <span style={{color: "darkgray", fontSize:"14px"}}>By : </span> <span style={{color: "blue", fontSize:"14px"}}>{ " "+ele.writtenBy.username}</span><br />
                         <span style={{color: "darkgray", fontSize:"14px"}}>Date : </span> <span style={{fontSize:"14px"}}>{handleDate(ele.dateofCreation)}</span><br />
                        <p style={{cursor:"pointer"}} onClick={() =>navigate(`/blog/user/${ele._id}`)}>{ele.content.substring(0)}</p>
                        </p>
                        </Col>
                        : ""
                ))}
                    </Row>
        </div>
    );
}

export default BlogPost;




