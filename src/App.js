import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import BlogPostList from './BlogPost/BlogPostList'
import "./App.css";
import BlogPostDetail from './BlogPost/BlogPostDetail';
 export default function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<BlogPostList />}/>
    <Route path="/post/:id" element={<BlogPostDetail />} />
    {/* <Route path="/BlogPostDetail" element={<BlogPostList />}/> */}
   </Routes>
   </BrowserRouter>
  )
}
