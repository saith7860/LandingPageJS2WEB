import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="bg-[#0b0d1a] min-h-screen flex flex-col items-center justify-center text-white">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-xl mb-8">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg text-lg">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
