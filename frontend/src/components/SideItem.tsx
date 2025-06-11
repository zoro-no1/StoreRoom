import type { ReactElement } from "react";

interface SideItemProps {
  icon?: ReactElement;
  text: string;
  className?: string;
}

export const SideItem = ({ icon, text, className = "" }: SideItemProps) => {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-purple-900 transition-all cursor-pointer ${className}`}>
      {icon && <div className="text-xl">{icon}</div>}
      <span className="text-sm md:text-base lg:text-lg font-medium">{text}</span>
    </div>
  );
};
