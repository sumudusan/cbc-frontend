import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Login Page</h1>

      <div className="w-80 bg-white p-6 rounded-lg shadow-md">
        <input
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="text"
          placeholder="Enter your Name"
        />
        <input
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="password"
          placeholder="Enter your Password"
        />
        <Link
          to="/homePage"
          className="w-full text-center bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-200 block"
        >
          Login
        </Link>
      </div>
    </div>
  );
}
