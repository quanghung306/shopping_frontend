import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import{ productsCreate}  from "../../stores/slice/productSlice";
import './CreateProduct.css';

const CreateProduct = () => {
  const dispatch = useDispatch();
  const { createStatus } = useSelector((state) => state.products);
  
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("");
  const [description, setDescription] = useState("");
  const [productImg, setProductImg] = useState("");
  const [price, setPrice] = useState("");
  
  const TransformFileData = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };
  const handleProductImageUpload = (e) => {
    const file = e.target.files[0];
    TransformFileData(file);
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(
      productsCreate({
        title,
        category,
        gender,
        description,
        price,
        image: productImg,
      })
    );
  };

  return (
    <div className="styled-create-product">
      <form className="styled-form" onSubmit={handleSubmit}>
        <h3>Create a Product</h3>
        <input
          id="imgUpload"
          accept="image/*"
          type="file"
          onChange={handleProductImageUpload}
          required
        />
        <select onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Select Category</option>
          <option value="Hoodie">Hoodie</option>
          <option value="shoes">shoes</option>
        </select>
        <select onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select Gender</option>
          <option value="Men">Men</option>
          <option value="Women">Women</option>
        </select>
        <input
          type="text"
          placeholder="title"
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Price"
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button className="primary-button" type="submit">
          {createStatus === "pending" ? "Submitting" : "Submit"}
        </button>
      </form>
      <div className="image-preview">
        {productImg ? (
          <img src={productImg} alt="error!" />
        ) : (
          <p>Product image upload preview will appear here!</p>
        )}
      </div>
    </div>
  );
};

export default CreateProduct;