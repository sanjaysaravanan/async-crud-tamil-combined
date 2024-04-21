import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { createProd, readSingleProduct, editProd } from "../apis/crud-ops";
import { useNavigate, useSearchParams } from "react-router-dom";

const ProductForm = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line no-unused-vars
  const [searchParams, setSearchParams] = useSearchParams();

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [qty, setQty] = useState(0);
  const [price, setPrice] = useState(0);

  const addProduct = async (data) => {
    await createProd(data);

    navigate("/products");
  };

  const updateProd = async (id, data) => {
    await editProd(id, data);

    navigate("/products");
  };

  const loadProduct = async () => {
    if (searchParams.get("prodId")) {
      const data = await readSingleProduct(searchParams.get("prodId"));
      setTitle(data.title);
      setImage(data.image);
      setPrice(data.price);
      setQty(data.qty);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchParams.get("edit")) {
      updateProd(searchParams.get("prodId"), { title, image, qty, price });
    } else {
      addProduct({ title, image, qty, price });
    }

    setTitle("");
    setImage("");
    setQty(0);
    setPrice(0);
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">Image URL:</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="qty">Quantity:</label>
        <input
          type="number"
          id="qty"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
        />
      </div>
      <div>
        <label htmlFor="price">Price:</label>
        <input
          type="number"
          id="price"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
        />
      </div>
      <button type="submit">
        {searchParams.get("edit") ? "Edit" : "Add"} Product
      </button>
    </form>
  );
};

ProductForm.propTypes = {
  addProduct: PropTypes.func.isRequired,
};

export default ProductForm;
