import { FiHeart } from "react-icons/fi";

export const IconButton = ({ icon: Icon = FiHeart, onClick, label }) => (
  <button
    onClick={onClick}
    aria-label={label}
    className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 active:scale-95 transition-all duration-200"
  >
    <Icon className="text-gray-700 w-5 h-5" />
  </button>
);
