import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Products from "./pages/Products";
import ProductForm from "./pages/ProductForm";

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
        <Route
          index
          element={
            <>
              <h1>Home Page</h1>
              <Link to="/products">Products</Link>
            </>
          }
        />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:prodId" element={<h2>Product Page</h2>} />
        <Route path="/add-product" element={<ProductForm />} />
        <Route path="*" element={<DefaultElement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
