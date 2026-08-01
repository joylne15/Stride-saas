// Footer.tsx
const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-sm text-gray-500">
          <div className="w-5 h-5 rounded bg-teal-500 flex items-center justify-center text-white text-xs">T</div>
          <span>TaskFlow</span>
        </div>
        <div className="flex gap-6 text-sm text-gray-500">
          <a href="#" className="hover:text-gray-900 transition">Privacy</a>
          <a href="#" className="hover:text-gray-900 transition">Terms</a>
          <a href="#" className="hover:text-gray-900 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;