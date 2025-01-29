export default function ProductNotFound(){
    return(
           
              <div className="w-full h-full flex flex-col items-center justify-center bg-red-100 text-gray-800">
                <div className="text-center">
                  <h1 className="text-4xl font-bold mb-4 text-red-500">404</h1>
                  <p className="text-lg mb-4">Oops! The product you're looking for doesn't exist.</p>
                  <img
                    src="/images/not-found.svg"
                    alt="Not Found"
                    className="w-64 h-64 mx-auto mb-6"
                  />
                  <a
                    href="/"
                    className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-600 transition"
                  >
                    Go Back Home
                  </a>
                </div>
              </div>
          
    )
}