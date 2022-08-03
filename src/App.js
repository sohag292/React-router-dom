import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Home from './Page/Home'
import Blog from './Page/Blog'
import Blogs from './Page/Blogs'
import Contact from './Page/Contact';
import User from './Page/User';
import Error from './Page/Error';
import Navbar from './component/Navbar';
import '../src/App.css'
const App = () => {
  
  
    return (
      <div>
          

          <BrowserRouter>
          <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/blog" element={<Blog/>}/>
              <Route path="/blog/:title" element={<Blogs/>}/>
              <Route path="/Contact" element={<Contact/>}/>
              <Route path="*" element={<Error/>}/>
              <Route path="/user/" element={<User/>}/>
            </Routes>
        
            </BrowserRouter>
      </div>
    );
  };
  
  export default App;