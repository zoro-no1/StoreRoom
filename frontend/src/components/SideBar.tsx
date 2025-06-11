import { Link } from "react-router-dom";
import React from 'react';

const BrainIcon = ({ className = "w-6 h-6", size = "md" }: { className?: string, size?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${size === "lg" ? "w-8 h-8" : "w-6 h-6"}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.31 0-6-2.69-6-6h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2c0 3.31-2.69 6-6 6zm0-8c-1.1 0-2 .9-2 2h4c0-1.1-.9-2-2-2z" />
  </svg>
);

const ShareIcon = ({ className = "w-6 h-6", size = "md" }: { className?: string, size?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`${className} ${size === "lg" ? "w-8 h-8" : "w-6 h-6"}`}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="18" cy="5" r="3"></circle>
    <circle cx="6" cy="12" r="3"></circle>
    <circle cx="18" cy="19" r="3"></circle>
    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
  </svg>
);

interface SideItemProps {
  text: string;
  icon?: React.ReactNode;
  className?: string;
}

const SideItem: React.FC<SideItemProps> = ({ text, icon, className }) => (
  <div
    className={`
      flex items-center py-2 px-3 rounded-md text-gray-300
      hover:bg-gray-700 hover:text-white transition-colors duration-200
      ${className || ''}
    `}
  >
    {icon && <span className="mr-3 text-xl">{icon}</span>}
    <span className="text-base font-medium">{text}</span>
  </div>
);

export const SideBar = () => {
  return (
   <aside className="fixed top-0 left-0 h-screen bg-gray-900 md:p-4  flex flex-col z-50
  w-[40%] md:w-[33.333%] lg:w-[20%]">

      {/* Brand / Logo */}
      <div className="mb-8 p-4 border-b border-gray-700">
        <Link to={"/"} className="flex items-center text-blue-400 hover:text-blue-300 transition-colors justify-evenly duration-200">
          <BrainIcon className="w-8 h-8 mr-3" />
          <span className="text-xl font-semibold">Branily Brain</span>
        </Link>
      </div>

      {/* Nav Items */}
      <nav className="flex-grow space-y-2 overflow-y-auto ">
        <SideItem text="Tweets" icon={<ShareIcon size="lg" />} />
        <SideItem text="YouTube" icon={<span role="img" aria-label="YouTube icon">▶️</span>} />
        <SideItem text="Instagram" icon={<span role="img" aria-label="Instagram icon">📸</span>} />
        <SideItem text="GitHub" icon={<span role="img" aria-label="GitHub icon">🐙</span>} />
        <SideItem text="Other" icon={<span role="img" aria-label="Other icon">🌐</span>} />
      </nav>
    </aside>
  );
};
