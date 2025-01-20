import { Link, Route ,Routes } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";
import { FaBox, FaShoppingCart, FaUsers } from "react-icons/fa";
import AdminProductsPage from "./admin/adminProductsPage";
import AddProductForm from "./admin/addProductForm";

export default function AdminHomePage() {
  return (
    <div className="bg-blue-200 h-screen w-full flex">
      {/* Sidebar */}
      <div className=" w-[20%] bg-blue-500 h-screen flex flex-col items-center py-8 space-y-6">
        <Link className="flex items-center gap-2 text-white hover:text-gray-200" to="/admin/dashboard">
          <BsGraphUp size={20} />
          <span>Dashboard</span>
        </Link>
        <Link className="flex items-center gap-2 text-white hover:text-gray-200" to="/admin/products">
          <FaBox size={20} />
          <span>Products</span>
        </Link>
        <Link className="flex items-center gap-2 text-white hover:text-gray-200" to="/admin/orders">
          <FaShoppingCart size={20} />
          <span>Orders</span>
        </Link>
        <Link className="flex items-center gap-2 text-white hover:text-gray-200" to="/admin/customers">
          <FaUsers size={20} />
          <span>Customers</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="w-[80%] h-screen">
      <Routes path="/*">
      <Route path="/dashboard" element={<h1>Dashboard</h1>}/>
      <Route path="/products" element={<AdminProductsPage/>}/>
      <Route path="/products/addProduct" element={<AddProductForm/>}/>
      <Route path="/orders" element={<h1>Orders</h1>}/>
      <Route path="/customers" element={<h1>Customers</h1>}/>
      <Route path="/*" element={<h1>404 not found the admin page</h1>}/>
      </Routes>
      </div>
    </div>
  );
}
