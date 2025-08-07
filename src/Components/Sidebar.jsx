import { IoClose } from 'react-icons/io5';

const Sidebar = ({ isOpen, onClose, onUserClick, shopOpen, subscriptioOpen, contactOpen }) => {

    return (
        <div
            className={`fixed inset-0 z-50 transition-all duration-300 bg-black bg-opacity-50 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            onClick={onClose}
        >
            <div
                className={`bg-white max-w-[330px] w-full h-full p-6 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    } ml-auto relative`}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close Icon */}
                <div className="absolute top-4 right-4 cursor-pointer" onClick={onClose}>
                    <IoClose className="w-6 h-6" />
                </div>

                {/* Profile */}
                <div className="flex items-center gap-4 mb-4">
                    <div
                        className="w-7 h-7 cursor-pointer"
                        onClick={onUserClick}
                    >
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
                                fill="#13171A"
                            />
                        </svg>
                    </div>
                </div>

                {/* Subscription Section */}
                <div className="bg-[#92d6e3] text-[#13171a] p-4 rounded-md text-center">
                    <h3 className="text-lg font-semibold">Subscribe & Save</h3>
                    <p className="text-sm mt-1">
                        Save 15% on all MediNova products when you sign up for a subscription!
                    </p>
                </div>

                {/* Links */}
                <div className="mt-6">
                    <h4
                        className="text-lg font-semibold mb-2 cursor-pointer hover:text-blue-600"
                        onClick={shopOpen}
                    >
                        Shop
                    </h4>
                    <ul className="space-y-1 text-sm">
                        <li
                            className="flex justify-between items-center cursor-pointer hover:text-blue-600"
                            onClick={shopOpen}
                            role="button"
                        >
                            Renew : Dietary Drink Formula <span>{'>'}</span>
                        </li>
                        <li
                            className="flex justify-between items-center cursor-pointer hover:text-blue-600"
                            onClick={shopOpen}
                            role="button"
                        >
                            Glow : Skin Health Formula <span>{'>'}</span>
                        </li>
                        <li
                            className="flex justify-between items-center cursor-pointer hover:text-blue-600"
                            onClick={shopOpen}
                            role="button"
                        >
                            Renew : Vegetarian Gel Capsule <span>{'>'}</span>
                        </li>
                    </ul>

                    <h4 className="text-lg font-semibold mt-6 mb-2" onClick={shopOpen}>Learn</h4>
                    <ul className="space-y-1 text-sm">
                        <li className="flex justify-between" onClick={shopOpen}>
                            Renew : Dietary Drink Formula <span>{'>'}</span>
                        </li>
                        <li className="flex justify-between" onClick={shopOpen}>
                            Glow : Skin Health Formula <span>{'>'}</span>
                        </li>
                        <li className="flex justify-between" onClick={shopOpen}>
                            Renew : Vegetarian Gel Capsule <span>{'>'}</span>
                        </li>
                    </ul>
                </div>

                {/* Footer Links */}
                <div className="mt-6 border-t pt-4 text-sm space-y-2">
                    <a className="block text-[#13171a] cursor-pointer" onClick={contactOpen}>
                        Contact Us
                    </a>
                    <a className="block text-[#13171a] cursor-pointer" onClick={subscriptioOpen}>
                        My Subscription
                    </a>
                    <a
                        href="/admin.html"
                        className="block text-[#13171a] mt-2"
                        style={{ display: 'none' }}
                        id="admin-link"
                    >
                        Admin
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
