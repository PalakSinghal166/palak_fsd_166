export const OutlineButton = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="px-5 py-2.5 border border-gray-400 text-gray-700 rounded-xl font-medium hover:bg-gray-100 active:scale-95 transition-all duration-200"
  >
    {children}
  </button>
);
