// import React, { useState } from 'react'
// import { useEffect } from 'react';
import {useParams, useLocation} from 'react-router-dom';
// import { blogsData } from '../data';
export default function Blogs() {
    const {title} = useParams();
    const location = useLocation()
    // console.log(location);
    // const [bodyData, setBodyData] = useState("")

    // useEffect(()=>{
    //     const blogData = blogsData.filter((blog)=>blog.title === title);
    //     setBodyData(blogData[0].body)
    // }, [])

  return (
    <div>
        <h1>{title}</h1>
        <p>{location.state.body.slice(0, 500)}</p>
        <p>{location.state.body.slice(501, 5800)}</p>
    </div>
  )
}
