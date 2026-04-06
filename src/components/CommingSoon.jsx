import commingsoonimg from '../assets/Comming_soon_img.svg';
import { Link } from "react-router-dom";

export default function ComingSoon({ page = "Page" }) {
  return (
    <div className="h-screen flex items-center justify-center text-center px-4 bg-gray-50">
      <div className="space-y-6">
        
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
          “{page}” page is coming soon 🚀
        </h1>

        {/* Subtitle */}
        <p className="text-gray-600 text-lg">
          We are working hard to launch this page. Stay tuned!
        </p>

        {/* Optional button */}
        <Link to="/" className="px-6 py-3 cursor-pointer bg-black text-white rounded-xl hover:bg-gray-800 transition">
          Go Back Home
        </Link>
        {/* BOTTOM IMAGE */}
        <div className="  flex justify-center mt-10">
        <img
          src={commingsoonimg}
          className="w-150"
          alt="team"
        />

        </div>
      </div>
    </div>
  );
}