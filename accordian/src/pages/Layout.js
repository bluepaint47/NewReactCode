import { Outlet, Link } from "react-router-dom";
import "../css/bootstrap.min.css"
import "../css/style.css"
const Layout = () => {
  return (
    <>
      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

    <div class="container-fluid sticky-top">
        <div class="container">
            <nav class="navbar navbar-expand-lg navbar-light p-0">
                <a href="index.html" class="navbar-brand">
                    <h2 class="text-white">Hairnic</h2>
                </a>
                <button type="button" class="navbar-toggler ms-auto me-0" data-bs-toggle="collapse"
                    data-bs-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav ms-auto">
                        <Link to="/" className="nav-item nav-link">Home</Link>
                        <Link to="/about" className="nav-item nav-link">About</Link>
                        <Link to="/products" className="nav-item nav-link">Products</Link>
                        
                       


                        <div class="nav-item dropdown">
                            <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div class="dropdown-menu bg-light mt-2">
                                
                                <Link to="/features" className="dropdown-item">Features</Link>
                                <Link to="/howto" className="dropdown-item">How To Use</Link>
                                <Link to="/testimonial" className="dropdown-item">Testimonial</Link>
                                <Link to="/blog" className="dropdown-item">Blog</Link>
                                <Link to="/four" className="dropdown-item">Four</Link>
                               
                            </div>
                        </div>
                        <Link to="/contact" className="nav-item nav-link">Contact</Link>
                       

                    </div>
                    <a href="" class="btn btn-dark py-2 px-4 d-none d-lg-inline-block">Shop Now</a>
                </div>
            </nav>
        </div>
    </div>



      <Outlet />
    </>
  )
};

export default Layout;
