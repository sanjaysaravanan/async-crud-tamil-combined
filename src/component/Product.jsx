import PropTypes from "prop-types";
import "./Product.css";
import { useNavigate } from "react-router-dom";
const Product = ({ title, image, qty, price, id, removeProduct }) => {
  const navigate = useNavigate();
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-details">
        <h2 className="product-title">{title}</h2>
        <p className="product-qty">Quantity: {qty}</p>
        <p className="product-price">Price: ${price}</p>
      </div>
      <button onClick={() => removeProduct(id)}>Delete</button>
      <button
        onClick={() => {
          navigate(`/add-product?edit=true&prodId=${id}`);
        }}
      >
        Edit
      </button>
    </div>
  );
};

Product.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  qty: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  removeProduct: PropTypes.func.isRequired,
};

export default Product;
