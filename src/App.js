import React from 'react';
import Blog from './Blog.jsx';
import Page_1 from './pages/Page_1.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    
    <BrowserRouter>
  

           <Routes>
           <Route path="/" element={<Blog />} />
             <Route path="/Blog" element={<Blog />} />
             <Route path="/Page_1" element={<Page_1 />} />
          
           </Routes>
    
       </BrowserRouter>
    
  );
}

export default App;
