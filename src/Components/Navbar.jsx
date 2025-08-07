import { HiMenu, HiClipboardList } from 'react-icons/hi';

const Navbar = ({ onMenuClick, onUserClick, onCartClick, onOrderClick }) => {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-md w-full sticky top-0 z-40">
      {/* Left - Menu Icon */}
      <button
        onClick={onMenuClick}
        className="text-3xl text-gray-800 hover:text-black transition"
        aria-label="Open Menu"
      >
        <HiMenu />
      </button>

      {/* Center - Logo */}
      <div className="flex-grow text-center">
        <img
          src="/MediNova-frontend/Med-logo.png"
          alt="MediNova Logo"
          className="h-14 mx-auto object-contain"
        />
      </div>

      {/* Right - Icons */}
      <div className="flex items-center space-x-5">
        {/* Order History Icon - visible only when user is logged in */}
        {user && (
            <div className="w-7 h-7 text-gray-700 group-hover:text-black transition">
              <HiClipboardList className="w-full h-full cursor-pointer" onClick={onOrderClick} />
            </div>
        )}

        {/* User Icon */}
        <button
          onClick={onUserClick}
          className="relative group"
          aria-label="User Account"
        >
          <div className="w-7 h-7 text-gray-700 group-hover:text-black transition">
            <svg
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.8027 22.448C24.0763 20.3471 25.5 17.3398 25.5 14C25.5 7.64873 20.3513 2.5 14 2.5C7.64873 2.5 2.5 7.64873 2.5 14C2.5 17.3398 3.9237 20.3471 6.19731 22.448C7.0042 19.3289 10.1913 17 14 17C17.8087 17 20.9958 19.3289 21.8027 22.448ZM19.9957 23.8153C19.8806 21.3612 17.4855 19 14 19C10.5145 19 8.1194 21.3612 8.00434 23.8153C9.75014 24.884 11.8031 25.5 14 25.5C16.1969 25.5 18.2499 24.884 19.9957 23.8153ZM14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28ZM14 14C15.6569 14 17 12.6569 17 11C17 9.34315 15.6569 8 14 8C12.3431 8 11 9.34315 11 11C11 12.6569 12.3431 14 14 14ZM14 16C16.7614 16 19 13.7614 19 11C19 8.23858 16.7614 6 14 6C11.2386 6 9 8.23858 9 11C9 13.7614 11.2386 16 14 16Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </button>

        {/* Cart Icon */}
        <button
          onClick={onCartClick}
          className="relative group"
          aria-label="Cart"
        >
          <div className="w-7 h-7 text-gray-700 group-hover:text-black transition">
            <svg
              viewBox="0 0 28 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <path
                d="M2 8.11765H26.4706M2 8.11765V24.9412C2 26.6306 3.36948 28 5.05882 28H23.4118C25.1012 28 26.4706 26.6306 26.4706 24.9412V8.11765M2 8.11765L5.05882 2H23.4118L26.4706 8.11765M18.8235 14.2353C18.8235 16.7694 16.7694 18.8235 14.2353 18.8235C11.7012 18.8235 9.64706 16.7694 9.64706 14.2353"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
