import React, { Component } from 'react'
import '../src/Component/Blog.css';
import Navbar from './Component/Navbar.jsx';
import BlogImageCard from './Component/BlogImageCard.jsx';
import ImageSlider from './Component/ImageSlider.jsx';


export default class Home extends Component {
  render() {
    return (
      <div>
          <div className='heroSection'
          // heroSection////////
     style={{
      textAlign: 'center',
      backgroundImage: "url()",
      backgroundPosition: "right bottom",
      backgroundRepeat: "no-repeat",
      backgroundSize: '400px 300px',
      maxHeight: '100%',
      backgroundColor: "#07192D",
      paddingBottom: "50px",
      height: 'auto',
      }}>
{/* =======navbar======== */}
         <Navbar />

    <div className="headline ">
       <h1 style={{
        fontSize: "50px", 
        paddingTop: "150px ",
        marginTop: "50px",
        }}>Think , Share, Solve All in one place</h1>
       <p style={{
        fontSize: "20px", 
       padding: '0px 30px' 
        }}>Join the country’s top note-sharing platform to find the best subject-wise notes for HSC</p>
    </div>
    <img className='floatingImg'src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnRnbnZmb25jaWF3bzRid2dzY2k2a3JkeHkxa2lnaHczb2xxMmhoeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/XQ99RPTQeqN0CDBnr5/giphy.gif'/>
   </div>

{/* //image slider////// */}
<ImageSlider />

      <div style={{
       textAlign: 'center', 
       color: "#150f4", 
       padding: "50px 0px 20px 0px", 
       backgroundColor: 'rgba(255, 255, 255, 0.23)'
    }}><h1>#Latest Blogs</h1>
   </div>
  
   <div className="blog-container">
      <div className="content">
        {/* Image Section */}
        <div className="image-container">
          <img 
            src="https://plus.unsplash.com/premium_photo-1679515418918-4dd741bdfa15?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVhZGluZyUyMGJvb2t8ZW58MHx8MHx8fDA%3D" 
            alt="Blog Post"
            className="image"/>
        </div>
        {/* Blog Content Section */}
        <div className="text-container">
          <h2 className="title">Why we should read book</h2>
          <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </div>
    <div className="blog-container">
      <div className="content">
        {/* Image Section */}
        {/* Blog Content Section */}
        <div className="text-container">
          <h2 className="title">Why we should read book</h2>
          <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <button className="read-more">Read More</button>
        </div>
        <div className="image-container">
          <img 
            src="https://images.unsplash.com/photo-1597167100957-1dfa110c1c14?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHJlYWRpbmclMjBib29rfGVufDB8fDB8fHww" 
            alt="Blog Post"
            className="image"/>
        </div>
      </div>
    </div>
  
    <div className="blog-container">
      <div className="content">
        {/* Image Section */}
        <div className="image-container">
          <img 
            src="https://images.unsplash.com/photo-1630343710506-89f8b9f21d31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVhZGluZyUyMGJvb2t8ZW58MHx8MHx8fDA%3D" 
            alt="Blog Post"
            className="image"/>
        </div>
        {/* Blog Content Section */}
        <div className="text-container">
          <h2 className="title">Why we should read book</h2>
          <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
          </p>
          <button className="read-more">Read More</button>
        </div>
      </div>
    </div>

<div className="categories">
<h1>Categories</h1>
<button className="readingBtn">Learning</button>
<button className="readingBtn">reading</button>
<button className="readingBtn">writting</button>
<button className="readingBtn">listening</button>
<button className="readingBtn">Speaking</button>
</div>
   {/* ======blogImageCard====== */}
<BlogImageCard />

<div className="">
      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-column">
          <h3>About Us</h3>
          <p>We are a leading company in the industry.</p>
        </div>
        <div className="footer-column">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <p>Email: contact@company.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <ul className="social-icons">
            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><i class='bx bxl-facebook'></i></a></li>
            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><i class='bx bxl-twitter' ></i></a></li>
            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><i class='bx bxl-instagram' ></i></a></li>
          </ul>
        </div>
      </footer>
    </div>




     </div>
    )
  }
}
