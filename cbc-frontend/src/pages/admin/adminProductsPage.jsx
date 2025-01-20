import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaTrash, FaEdit , FaPlus} from "react-icons/fa";
import {Link} from 'react-router-dom'

export default function AdminProductsPage() {
  const [products, setProducts] = useState([]);
  const [productsLoaded, setProductsLoaded] = useState(false);

  useEffect(() => {
    if(!productsLoaded){
      axios.get("http://localhost:5000/api/products").then((res) => {
        console.log(res.data);
        setProducts(res.data);
        setProductsLoaded(true);
      });
    }
   }, [productsLoaded]);

  return (
    <div className="min-h-screen bg-gray-50 p-8 relative">
        <Link to="/admin/products/addProduct" className="absolute right-[25px] bottom-[25px] bg-[#3b82f6] text-white p-5 rounded-xl hover:bg-blue-200"><FaPlus/></Link>
      <h1 className="text-2xl font-bold text-gray-700 mb-6">Admin Products</h1>
      
      {
        productsLoaded? <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300 shadow-sm">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="text-left p-4 font-medium text-gray-600">Product ID</th>
              <th className="text-left p-4 font-medium text-gray-600">Product Name</th>
              <th className="text-left p-4 font-medium text-gray-600">Price</th>
              <th className="text-left p-4 font-medium text-gray-600">Last Price</th>
              <th className="text-left p-4 font-medium text-gray-600">Stock</th>
              <th className="text-left p-4 font-medium text-gray-600">Description</th>
              <th className="text-left p-4 font-medium text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr
                key={product._id}
                className={`border-b border-gray-200 ${
                  products.indexOf(product) % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="p-4 text-gray-700">{product.productId}</td>
                <td className="p-4 text-gray-700">{product.productName}</td>
                <td className="p-4 text-gray-700">{product.price}</td>
                <td className="p-4 text-gray-700">{product.lastPrice}</td>
                <td className="p-4 text-gray-700">{product.stock}</td>
                <td className="p-4 text-gray-700 max-w-xs truncate">{product.description}</td>
                <td className="p-4 flex gap-2">
                  <button className="text-red-500 hover:text-red-300" 
                  title="Delete" 
                  onClick={()=>{
                    alert(product.productId)
                    const token = localStorage.getItem("token");
                    if (!token) {
                      toast.error("Authorization token is missing.");
                      return;
                    }

                    axios.delete(`http://localhost:5000/api/products/${product.productId}`,{
                      headers:{
                        Authorization: `Bearer ${token}`,
                      },
                    }).then((res)=>{
                      console.log(res.data);
                      toast.success("Product deleted succefully");
                      setProductsLoaded(false);  
                    }).catch((error) => {
                      console.error("Error deleting product:", error);
                      toast.error("Failed to delete product");
                    });

                  }}
                  >
                  <FaTrash className="text-red-500 cursor-pointer" />
                  </button>
                  <FaEdit className="text-blue-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>:<div className="w-[60px] h-[60px] border-[4px]
     border-gray-200 border-b-[#3b82f6] animate-spin rounded-full"></div>
      }
     
     
    </div>
  );
}
