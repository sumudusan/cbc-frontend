import { useState } from 'react';
import axios from "axios";
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import uploadMediaToSupabase from '../utils/mediaUpload';

export default function EditProductForm() {
  const location = useLocation();
  const navigate = useNavigate();

  if (!location.state || !location.state.product) {
    navigate("/admin/products");
    return null;
  }

  const product = location.state.product;
  const altNames = product.altNames.join(",");

  const [productId, setProductId] = useState(product.productId);
  const [productName, setProductName] = useState(product.productName);
  const [alternativeNames, setAlternativeNames] = useState(altNames);
  const [imageFiles, setImageFiles] = useState([]);
  const [price, setPrice] = useState(product.price);
  const [lastPrice, setLastPrice] = useState(product.lastPrice);
  const [stock, setStock] = useState(product.stock);
  const [description, setDescription] = useState(product.description);

  async function handleSubmit() {
    const altNamesArray = alternativeNames.split(",").map(name => name.trim());
    
    let imgUrls = product.images;
    if (imageFiles.length > 0) {
      const promisesArray = imageFiles.map(file => uploadMediaToSupabase(file));
      imgUrls = await Promise.all(promisesArray);
    }

    const productData = {
      productId,
      productName,
      altNames: altNamesArray,
      images: imgUrls,
      price,
      lastPrice,
      stock,
      description,
    };

    const token = localStorage.getItem("token");

    try {
      await axios.put(`http://localhost:5000/api/products/${product.productId}`, productData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/admin/products");
      toast.success("Product updated successfully");
    } catch (err) {
      toast.error("Failed to update product");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Edit Product Form</h1>
        <div className="space-y-4">
          {/* Product ID */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Product ID</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={productId}
              onChange={(e) => setProductId(e.target.value)}
            />
          </div>

          {/* Product Name */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Product Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          {/* Alternative Names */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Alternative Names</label>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={alternativeNames}
              onChange={(e) => setAlternativeNames(e.target.value)}
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Upload Images</label>
            <input
              type="file"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              multiple
              onChange={(e) => setImageFiles(Array.from(e.target.files))}
            />
          </div>

          {/* Price */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Price</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          {/* Last Price */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Last Price</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={lastPrice}
              onChange={(e) => setLastPrice(e.target.value)}
            />
          </div>

          {/* Stock */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Stock</label>
            <input
              type="number"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">Description</label>
            <textarea
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
              rows="4"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="button"
            className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
            onClick={handleSubmit}
          >
            Update Product
          </button>
        </div>
      </div>
    </div>
  );
}
