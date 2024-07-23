import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import axios from 'axios';

export default function BlogPostList() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    getdata();
  }, []);

  const getdata = () => {
    axios.get('https://newsapi.org/v2/everything?q=tesla&from=2024-06-23&sortBy=publishedAt&apiKey=92b36b7bc1e149ee83e8f8b4ab43ae72').then((response) => {
      console.log(response.data.articles);
      setData(response.data.articles);
    }).catch((error) => {
      console.log(error.response.data);
    });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const totalPages = Math.ceil(data.length / postsPerPage);

  return (
    <div>
      <nav>
        <div className="nav-container">
          <a href="#" className="logo">My Blog</a>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="blog-row">
          {
            currentPosts && currentPosts.length > 0 && currentPosts.map((item, index) => (
              <div key={index} className="blog">
                <div className="blog-image">
                  <img
                    src={item.urlToImage}
                    alt="Blog Image"
                  />
                  <div className="date">{new Date(item.publishedAt).toLocaleDateString("en-GB")}</div>
                </div>
                <div className="blog-content">
                  <h2>{item.author}</h2>
                  <p>{item.title}</p>
                  <Link
                    to={`/post/${index}`}
                    state={{ post: item }}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <footer>
        <div className="footer-container">
          <p>© 2024 My Blog. All Rights Reserved.</p>
          <div className="social-links">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </footer>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={index + 1 === currentPage ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
