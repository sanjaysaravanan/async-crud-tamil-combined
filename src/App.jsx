import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

const DefaultElement = () => {
  return (
    <>
      <h4>No page found,please check the URL</h4>
      <Link to="/">Home</Link>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<h1>Home Page</h1>} />
        <Route path="/products" element={<h2>Products</h2>} />
        <Route path="/products/:prodId" element={<h2>Product Page</h2>} />
        <Route path="/about-us" element={<h1>About Us Page</h1>} />
        <Route path="*" element={<DefaultElement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
