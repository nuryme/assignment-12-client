import { FaHeartBroken, FaHome } from "react-icons/fa";
import { useNavigate } from "react-router";


const ErrorPage = ({ errorCode = 404, errorMessage = "Page Not Found" }) => {
  const navigate = useNavigate();


  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 to-rose-200 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-md w-full text-center">
        <div className="flex justify-center">
          <FaHeartBroken className="text-rose-500 text-6xl mb-6" />
        </div>
        
        <h1 className="font-bold text-rose-600 mb-2">
          Oops! {errorCode} 
        </h1>
        
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          {errorMessage}
        </h2>
        
        <p className="text-gray-600 mb-6">
          The love connection you're looking for might be lost. 
          Let's find your perfect match back on the homepage!
        </p>
        
        <button
          onClick={() => navigate("/")}
          className="primaryBtn flex items-center justify-center gap-2 mx-auto"
        >
          <FaHome /> Return to Home
          
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;