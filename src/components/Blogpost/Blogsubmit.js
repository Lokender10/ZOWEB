import React from "react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Blogsubmit.css";


const BlogSubmit =() => {
    const [title, setTitle] = useState("");
    const [content, setcontent] = useState("");
    const [imageUrl, setimageUrl] = useState("");

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     let error = validateAll();
    //     if(isValid(error)){
    //     try{
    //         let body = {};
    //         body.title = title;
    //         body.text= text;
    //           setTitle("");
    //           setText("");
    //         }
    //     } 
    // }
    // const validateAll = () => {
    //     let error = {};
    //     error.title = validateTitle(title);
    //     error.text = validateText(text);
    //     return error;
    // }
      

    return(
        <div className="container">
            <h1 className="blogPost-header">Post Your Blog</h1>
        <form>
            <input type="file"/><br/>
        <input type="text" placeholder="Title" id="title" name="title" value={title} onChange={(e)=> setTitle(e.currentTarget.value)} /><br />
        <textarea className="content" name="content" id="content" placeholder="Enter Text here" /> <br />
        <input type="submit"></input>
         </form>
         </div>
        )
}

export default BlogSubmit;