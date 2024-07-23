import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export default function BlogPostDetail() {
    const navigate = useNavigate()
    const location = useLocation();
    const getdata = location.state.post
    console.log(getdata)

    const handleBackClick = () => {
            navigate(-1); // Navigate back to the previous page
          };

    return (
        <div className="container">
              <button onClick={handleBackClick} className="back-button">Back</button>
            <div className="cs-blog-detail" >
                <div className="cs-main-post">
                    <figure>
                        <img
                            onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                            data-pagespeed-url-hash={2714250504}
                            alt="jobline-blog (8)"
                            src={getdata?.urlToImage}
                        />
                    </figure>
                </div>
                <div className="cs-post-title">
                    <div className="cs-author">
                        <figure>
                            <a href={getdata?.url}>
                                <img
                                    width={32}
                                    height={32}
                                    onload="pagespeed.CriticalImages.checkImageForCriticality(this);"
                                    data-pagespeed-url-hash={1229941675}
                                    className="avatar avatar-32 photo"
                                    srcSet="http://1.gravatar.com/avatar/7a20fad302fc2dd4b4649dc5bdb3c463?s=64&d=mm&r=g 2x"
                                    src={getdata?.urlToImage}
                                    alt=""
                                />
                            </a>
                        </figure>
                        <div className="cs-text">
                            <a href="http://jobcareer.chimpgroup.com/jobdoor/user/jobcareer-admin/">
                                {getdata?.author}
                            </a>
                        </div>
                    </div>
                    <div className="post-option">
                        <span className="post-date">
                            <a href="http://jobcareer.chimpgroup.com/jobdoor/2015/11/">
                                <i className="cs-color icon-calendar6" />
                                {new Date(getdata?.publishedAt).toLocaleDateString("en-GB")}
                            </a>
                        </span>
                        <span className="post-comment">
                            {/* <a href="http://jobcareer.chimpgroup.com/jobdoor/experience-writing-for-producing-a-newscast/#comments">
                  <i className="cs-color icon-chat6" />
                </a> */}
                        </span>
                    </div>
                </div>
                <div className="cs-post-option-panel">
                    <div className="rich-editor-text">
                        <p>
                            {getdata?.content}
                        </p>
                        <p>
                            {getdata?.description}
                        </p>
                        <h4>{getdata?.title}</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// export default function BlogPostDetail() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const getdata = location.state.post;

//  

//   return (
//     <div className="container">
//       <div className="cs-blog-detail">
//         <button onClick={handleBackClick} className="back-button">Back</button>
//         <div className="cs-main-post">
//           <figure>
//             <img
//               onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);"
//               data-pagespeed-url-hash={2714250504}
//               alt="jobline-blog (8)"
//               src={getdata?.urlToImage}
//             />
//           </figure>
//         </div>
//         <div className="cs-post-title">
//           <div className="cs-author">
//             <figure>
//               <a href={getdata?.url}>
//                 <img
//                   width={32}
//                   height={32}
//                   onLoad="pagespeed.CriticalImages.checkImageForCriticality(this);"
//                   data-pagespeed-url-hash={1229941675}
//                   className="avatar avatar-32 photo"
//                   srcSet="http://1.gravatar.com/avatar/7a20fad302fc2dd4b4649dc5bdb3c463?s=64&d=mm&r=g 2x"
//                   src={getdata?.urlToImage}
//                   alt=""
//                 />
//               </a>
//             </figure>
//             <div className="cs-text">
//               <a href="http://jobcareer.chimpgroup.com/jobdoor/user/jobcareer-admin/">
//                 {getdata?.author}
//               </a>
//             </div>
//           </div>
//           <div className="post-option">
//             <span className="post-date">
//               <a href="http://jobcareer.chimpgroup.com/jobdoor/2015/11/">
//                 <i className="cs-color icon-calendar6" />
//                 {new Date(getdata?.publishedAt).toLocaleDateString("en-GB")}
//               </a>
//             </span>
//             <span className="post-comment">
//               {/* <a href="http://jobcareer.chimpgroup.com/jobdoor/experience-writing-for-producing-a-newscast/#comments">
//                 <i className="cs-color icon-chat6" />
//               </a> */}
//             </span>
//           </div>
//         </div>
//         <div className="cs-post-option-panel">
//           <div className="rich-editor-text">
//             <p>
//               {getdata?.content}
//             </p>
//             <p>
//               {getdata?.description}
//             </p>
//             <h4>{getdata?.title}</h4>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }