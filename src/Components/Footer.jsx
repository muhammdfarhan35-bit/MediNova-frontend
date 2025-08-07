import React from 'react';

const Footer = ({onUserClick, shopOpen, subscriptioOpen, contactOpen}) => {
    return (
        <div className="w-full pt-16 bg-black pb-0 text-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-between">

                    {/* Shop Section */}
                    <div className="px-4 w-full sm:w-1/2 lg:w-auto mb-8">
                        <label className="text-gray-300 font-semibold text-lg mb-5 inline-block" onClick={shopOpen}>Shop</label>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]"onClick={shopOpen}>MediNova: Dripping Pills</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]"onClick={shopOpen}>MediNova: Bone Base & Joint Support</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]"onClick={shopOpen}>MediNova: Lavendal 260g</a></li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div className="px-4 w-full sm:w-1/2 lg:w-auto mb-8">
                        <label className="text-gray-300 font-semibold text-lg mb-5 inline-block" onClick={subscriptioOpen}>Resources</label>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]"onClick={subscriptioOpen}>The Science</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]"onClick={subscriptioOpen}>Learn</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]"onClick={subscriptioOpen}>About Us</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]"onClick={contactOpen}>Contact Us</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]"onClick={subscriptioOpen}>FAQ</a></li>
                        </ul>
                    </div>

                    {/* Legal Section */}
                    <div className="px-4 w-full sm:w-1/2 lg:w-auto mb-8">
                        <label className="text-gray-300 font-semibold text-lg mb-5 inline-block"onClick={subscriptioOpen}>Legal</label>
                        <ul>
                            <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]"onClick={subscriptioOpen}>Privacy Policy</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]"onClick={subscriptioOpen}>Refund Policy</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]"onClick={subscriptioOpen}>Terms of Services</a></li>
                            <li className="mb-2"><a href="#" className="text-white text-sm hover:text-[#94D0A8]"onClick={subscriptioOpen}>Accessibility</a></li>
                        </ul>
                    </div>

                    {/* Stay Connected */}
                    <div className="px-4 w-full lg:w-[40%] mb-8 text-center lg:text-left">
                        <label className="text-gray-300 font-semibold text-lg mb-5 inline-block"onClick={contactOpen}>Stay Connected</label>
                        <p className="text-sm mb-4 max-w-md mx-auto lg:mx-0">
                            Receive 15% OFF your first order when you join our mailing list + be the first to find out about new products and promotions!
                        </p>
                        <button
                            className="bg-[#94D0A8] text-black font-bold px-4 py-2 mt-2 rounded-md hover:bg-transparent hover:text-white hover:border hover:border-[#94D0A8] transition duration-200"
                            onClick={onUserClick}
                        >
                            Sign Up
                        </button>

                        <div className="flex justify-center lg:justify-start mt-6 gap-6 text-white">
                            {/* Facebook */}
                            <a onClick={onUserClick}><svg width="24" height="24" viewBox="0 0 28 28" fill="currentColor"><path d="M28 14.0851C28 6.3066 21.7315 0 14 0C6.2685 0 0 6.3066 0 14.0851C0 21.1159 5.11933 26.9424 11.8125 27.9988V18.1569H8.25767V14.0839H11.8125V10.9829C11.8125 7.45336 13.9032 5.50258 17.101 5.50258C18.6317 5.50258 20.2347 5.77841 20.2347 5.77841V9.24452H18.4683C16.7288 9.24452 16.1863 10.3302 16.1863 11.4441V14.0851H20.069L19.4483 18.158H16.1863V28C22.8807 26.9424 28 21.1147 28 14.0851Z" /></svg></a>

                            {/* Twitter */}
                            <a onClick={onUserClick}><svg width="24" height="24" viewBox="0 0 28 22" fill="currentColor"><path d="M27.9452 2.62052C26.8969 3.06669 25.7864 3.36121 24.6493 3.49458C25.8465 2.79899 26.7428 1.70815 27.1728 0.423505C26.0633 1.04945 24.8337 1.50509 23.5247 1.75885C22.6611 0.866099 21.5167 0.273979 20.2693 0.0744441C19.0218 -0.125091 17.7411 0.0791234 16.6261 0.655376C15.511 1.23163 14.624 2.14767 14.1027 3.26126C13.5815 4.37485 13.4551 5.62366 13.7433 6.81378C8.97167 6.59611 4.74483 4.37993 1.91333 1.03253C1.39859 1.87819 1.13011 2.84273 1.13633 3.82391C1.13633 5.7525 2.15133 7.44762 3.689 8.44349C2.77767 8.41545 1.88647 8.17725 1.08967 7.74875V7.81642C1.08915 9.09808 1.54731 10.3404 2.38642 11.3327C3.22553 12.325 4.39392 13.0061 5.69333 13.2604C4.85135 13.4786 3.96948 13.5113 3.11267 13.3563C3.48148 14.4593 4.19727 15.4236 5.16018 16.1144C6.12309 16.8053 7.28508 17.1883 8.484 17.2101C6.45345 18.7507 3.94622 19.5868 1.365 19.5842C0.91 19.5842 0.456167 19.5582 0 19.5086C2.63166 21.1376 5.6916 22.0023 8.8165 22C19.3783 22 25.1475 13.5458 25.1475 6.22731C25.1475 5.99047 25.1475 5.75362 25.13 5.51678C26.257 4.73278 27.2291 3.75942 28 2.64307L27.9452 2.62052Z" /></svg></a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Payments Section */}
            <div className="py-5 text-center border-t border-gray-700 mt-10">
                <div className="mx-auto w-[40%] sm:w-[80%] max-w-[500px]">
                    <img src="/MediNova-frontend/bank.png" alt="Bank" className="w-full" />
                </div>
                <div className="text-white text-xs mt-2 font-medium">© 2025 MediNova. All rights reserved.</div>
            </div>
        </div>
    );
};

export default Footer;
