import { Link } from "react-router-dom";
import { BsGraphUp } from "react-icons/bs";
import { FaBox, FaShoppingCart, FaUsers } from "react-icons/fa";

export default function AdminHomePage() {
  return (
    <div className="bg-blue-200 h-screen w-full flex">
      {/* Sidebar */}
      <div className=" w-[20%] bg-blue-500 h-screen flex flex-col items-center py-8 space-y-6">
        <Link className="flex items-center gap-2 text-white hover:text-gray-200" to="admin/dashboard">
          <BsGraphUp size={20} />
          <span>Dashboard</span>
        </Link>
        <Link className="flex items-center gap-2 text-white hover:text-gray-200" to="admin/products">
          <FaBox size={20} />
          <span>Products</span>
        </Link>
        <Link className="flex items-center gap-2 text-white hover:text-gray-200" to="admin/orders">
          <FaShoppingCart size={20} />
          <span>Orders</span>
        </Link>
        <Link className="flex items-center gap-2 text-white hover:text-gray-200" to="admin/customers">
          <FaUsers size={20} />
          <span>Customers</span>
        </Link>
      </div>

      {/* Main Content */}
      <div className="w-[80%] bg-red-500 h-screen"></div>
    </div>
  );
}
