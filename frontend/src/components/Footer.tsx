 const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-sm py-6 mt-auto ">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left Text */}
        <div className="text-center md:text-left">
          © {new Date().getFullYear()} Branily Brain. All rights reserved.
        </div>

        {/* Links */}
        <div className="flex gap-4 text-sm">
          <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
          <a href="/terms" className="hover:text-white transition-colors">Terms</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer