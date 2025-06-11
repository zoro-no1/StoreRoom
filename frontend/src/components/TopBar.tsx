import { useState } from "react";
import { LogoutIcon } from "../icons/LogoutIcon";
import { PluseIcon } from "../icons/Pluse";
import { ShareIcon } from "../icons/shareIcon";
import { authStore } from "../store/authStore";
import { Button } from "./ButtonUi";
import { MenuIcon, XIcon } from "lucide-react"; // Use a hamburger and close icon

interface TopBarProps {
  add?: () => Promise<void>;
  share?: () => Promise<void>;
}

export const TopBar = ({ add, share }: TopBarProps) => {
  const { logout } = authStore();
  const [menuOpen, setMenuOpen] = useState(false);

  async function handleLogout() {
    if (window.confirm("Logout")) {
      logout();
    }
  }

  return (
    <div className="w-full bg-gray-800 text-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-4">
        {/* Title */}
        <div className="text-2xl md:text-4xl font-semibold">All Link</div>

        {/* Hamburger for small screens */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen((prev) => !prev)}>
            {menuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Buttons (shown by default on md+ screens) */}
        <div className="hidden md:flex gap-3">
          <Button text="Share Brain" variant="secondary" size="md" onClick={share} startIcon={<ShareIcon size="lg" />} />
          <Button text="Add Content" variant="primary" size="md" onClick={add} startIcon={<PluseIcon size="lg" />} />
          <Button text="Logout" variant="primary" size="md" onClick={handleLogout} startIcon={<LogoutIcon />} />
        </div>
      </div>

      {/* Mobile Button Dropdown (toggle visibility) */}
      {menuOpen && (
        <div className="flex flex-col gap-3 px-4 pb-4 md:hidden">
          <Button text="Share Brain" variant="secondary" size="md" onClick={share} startIcon={<ShareIcon size="lg" />} />
          <Button text="Add Content" variant="primary" size="md" onClick={add} startIcon={<PluseIcon size="lg" />} />
          <Button text="Logout" variant="primary" size="md" className=" justify-center" onClick={handleLogout} startIcon={<LogoutIcon />} />
        </div>
      )}
    </div>
  );
};
