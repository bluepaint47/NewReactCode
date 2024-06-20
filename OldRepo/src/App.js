import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact"
import  Features  from "./pages/Features"
import HowTo from "./pages/HowTo";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog"
import Four from "./pages/Four"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products/>} />
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/features" element={<Features/>}/>
          <Route path="/howto" element={<HowTo/>}/>
          <Route path="/testimonial" element={<Testimonials/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/four" element={<Four/>}/>
        </Route>
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
