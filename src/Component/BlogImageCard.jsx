import React from 'react';
import './BlogImageCard.css'; 

const BlogImageCard = ({ 
  title1 ='Reading can change your....', 
  image1 ='https://assets.blog.engoo.com/wp-content/uploads/sites/9/2023/08/25071441/study_cover.jpg.webp', 
  description1 ="Explore Expert Resources, Tips, and Guides to Enhance Your Study Journey ",
  author1 = "Rakibul Islam ", 
  date1 = "24 March 2025",

  title2 ='Reading can change your....', 
  image2 ='https://images.unsplash.com/photo-1506880018603-83d5b814b5a6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhZGluZyUyMGJvb2t8ZW58MHx8MHx8fDA%3D', 
  description2 ="Explore Expert Resources, Tips, and Guides to Enhance Your Study Journey ",
  author2 = "Kamal Uddin ", 
  date2 = "24 March 2025",
 
  title3 ='Reading can change your....', 
  image3 ='https://images.unsplash.com/photo-1630343710506-89f8b9f21d31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhZGluZyUyMGJvb2t8ZW58MHx8MHx8fDA%3D', 
  description3 ="Explore Expert Resources, Tips, and Guides to Enhance Your Study Journey ",
  author3 = "Tiklu dey Robi", 
  date3 = "24 March 2025",
 
  title4 ='Reading can change your....', 
  image4 ='https://images.unsplash.com/photo-1597167100957-1dfa110c1c14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWRpbmclMjBib29rfGVufDB8fDB8fHww', 
  description4 ="Explore Expert Resources, Tips, and Guides to Enhance Your Study Journey ",
  author4 = "Rabiul Alam ", 
  date4 = "24 March 2025"
}) => {
  return (
   <div>
    <div className="container">
       <div className="card">
        <a className='postLink' href='./Page_1'>
        <div className="blog-card">
         <div className="blog-image">
          <img src={(image1)} alt={title1} />
           </div>
           <div className="blog-content">
           <div className="tagButton">
          <button className='readingBtn'>#reading</button>
          </div>
           <h3 className="blog-title">{title1}</h3>
           {/* <p className="blog-description">{description1}</p> */}
           <div className="blog-footer">
          <span className="blog-author">{author1}</span>
          <span className="blog-date">{date1}</span>
        </div>
      <div style={{textAlign: 'left', marginTop: '5px'}}>
      <button className='readingBtn'>Continue reading..</button>
      </div>
      </div>
    </div>
    </a>
  </div>

    <div className="card">
    <a className='postLink' href='./Page_1'>
      <div className="blog-card">
       <div className="blog-image">
        <img src={(image2)} alt={title2} />
         </div>
          <div className="blog-content">
          <div className="tagButton">
           <button className='readingBtn'>#writing</button>
          </div>
           <h3 className="blog-title">{title2}</h3>
           {/* <p className="blog-description">{description2}</p> */}
           <div className="blog-footer">
          <span className="blog-author">{author2}</span>
          <span className="blog-date">{date2}</span>
        </div>
        <div style={{textAlign: 'left', marginTop: '5px'}}>
      <button className='readingBtn'>Continue reading..</button>
      </div>
      </div>
    </div>
    </a>
  </div>

   <div className="card">
   <a className='postLink' href='./Page_1'>
      <div className="blog-card">
       <div className="blog-image">
        <img src={(image3)} alt={title3} />
         </div>
          <div className="blog-content">
          <div className="tagButton">
           <button className='readingBtn'>#typing</button>
          </div>
           <h3 className="blog-title">{title3}</h3>
           {/* <p className="blog-description">{description3}</p> */}
           <div className="blog-footer">
          <span className="blog-author">{author3}</span>
          <span className="blog-date">{date3}</span>
        </div>
        <div style={{textAlign: 'left', marginTop: '5px'}}>
      <button className='readingBtn'>Continue reading..</button>
      </div>
      </div>
    </div>
    </a>
  </div>
      <div className="card">
      <a className='postLink' href='./Page_1'>
        <div className="blog-card">
         <div className="blog-image">
          <img src={(image4)} alt={title4} />
          </div>
          <div className="blog-content">
          <div className="tagButton">
          <button className='readingBtn'>#reading</button>
          </div>
          <h3 className="blog-title">{title4}</h3>
           {/* <p className="blog-description">{description4}</p> */}
          <div className="blog-footer">
          <span className="blog-author">{author4}</span>
          <span className="blog-date">{date4}</span>
        </div>
        <div style={{textAlign: 'left', marginTop: '5px'}}>
      <button className='readingBtn'>Continue reading..</button>
      </div>
       </div>
     </div>
     </a>
    </div>
    </div>
   
 
   </div>
  );
};

export default BlogImageCard;

