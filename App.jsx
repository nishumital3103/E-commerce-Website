import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">E-Commerce</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/signin">Sign In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/signup">Sign Up</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">Products</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


const Signin = () => {
  return (
    <div className="signin-container">
      <div className="signin-box">
        <h2 className="signin-title">Sign In</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="signin-btn">Login</button>
        </form>
        <p className="signup-link">Don't have an account? <a href="/signup">Sign Up</a></p>
      </div>
    </div>
  );
};

// const Signup = () => {
//   return (
//     <div className="container form-container">
//       <h2>Sign Up</h2>
//       <form>
//         <div className="mb-3">
//           <label>Name</label>
//           <input type="text" className="form-control" placeholder="Enter name" />
//         </div>
//         <div className="mb-3">
//           <label>Email</label>
//           <input type="email" className="form-control" placeholder="Enter email" />
//         </div>
//         <div className="mb-3">
//           <label>Password</label>
//           <input type="password" className="form-control" placeholder="Enter password" />
//         </div>
//         <button type="submit" className="btn btn-primary">Register</button>
//       </form>
//     </div>
//   );
// };

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2 className="signup-title">Sign Up</h2>
        <form>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="signup-btn">Create Account</button>
        </form>
        <p className="signin-link">Already have an account? <a href="/signin">Sign In</a></p>
      </div>
    </div>
  );
};

// const ProductPage = () => {
//   const products = [
//     { id: 1, name: "Laptop", price: "$1000" },
//     { id: 2, name: "Smartphone", price: "$600" },
//     { id: 3, name: "Headphones", price: "$100" },
//   ];

//   return (
//     <div className="container mt-5">
//       <h2 className="text-center">Products</h2>
//       <div className="row">
//         {products.map((product) => (
//           <div className="col-md-4" key={product.id}>
//             <div className="card p-3 product-card">
//               <h5>{product.name}</h5>
//               <p>{product.price}</p>
//               <button className="btn btn-success">Add to Cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

const ProductPage = () => {
  const productList = [
    { id: 1, name: "Smartphone", price: "$699", image: "https://image.made-in-china.com/2f0j00HzVcYlZPgToO/Smartphone-Cell-Brother-or-customer-logo-Mobile-Phone-LCD-Earbud.jpg" },
    { id: 2, name: "Laptop", price: "$999", image: "https://i5.walmartimages.com/asr/69056846-b8a1-497a-b4f5-6172ab54b35d.a2102861007e11c433c127f2b63b038a.jpeg" },
    { id: 3, name: "Headphones", price: "$199", image: "https://img.freepik.com/premium-photo/wireless-headphones-custom-design_985323-2153.jpg" },
    { id: 4, name: "Smartwatch", price: "$299", image: "https://th.bing.com/th/id/OIP.uMmJvI4I2B1w9Z80ThC-wwHaHa?rs=1&pid=ImgDetMain" },
  ];

  return (
    <div className="products-container">
      <h2 className="products-title">Our Products</h2>
      <div className="product-list">
        {productList.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p className="product-price">{product.price}</p>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

// const Home = () => <h1 className="text-center home-title">Welcome to E-Commerce Website</h1>;
const FrontPage = () => {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Our E-Commerce Store</h1>
        <p className="hero-subtitle">Find the best deals on the latest tech products.</p>
        <Link to="/products" className="hero-btn">Shop Now</Link>
      </div>
      <div className="features-section">
        <div className="feature-box">
          <h3>Fast Shipping</h3>
          <p>Get your products delivered in no time.</p>
        </div>
        <div className="feature-box">
          <h3>Secure Payment</h3>
          <p>100% safe and secure payment options.</p>
        </div>
        <div className="feature-box">
          <h3>24/7 Support</h3>
          <p>We're here to help you anytime.</p>
        </div>
      </div>
    </div>
  );
};



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<FrontPage />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products" element={<ProductPage />} />
      </Routes>
    </Router>
  );
}

export default App;

