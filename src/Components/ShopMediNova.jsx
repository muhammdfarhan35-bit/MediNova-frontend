import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { toast } from 'react-toastify';

import 'swiper/css';

const BASE_URL = "http://localhost:5000";
// const BASE_URL = "https://medinova-backend.onrender.com";

const ShopMediNova = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/api/getproducts`)
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error('Failed to fetch products:', err));
  }, []);

  const chunkedProducts = [];
  for (let i = 0; i < products.length; i += 20) {
    chunkedProducts.push(products.slice(i, i + 20));
  }

  return (
    <div className="bg-[#f8f8f8] w-full py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center text-[36px] font-semibold text-[#13171a] mb-8">
          Shop MediNova
        </div>

        {chunkedProducts.map((chunk, index) => (
          <Swiper
            modules={[Autoplay]}
            key={index}
            spaceBetween={20}
            slidesPerView={1}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="mb-10"
          >
            {chunk.map((product) => (
              <SwiperSlide key={product._id}>
                <div className="bg-white shadow-[0_0_30px_rgba(0,0,0,0.06)] rounded-xl p-5 flex flex-col w-full h-full">
                  <div className="mb-4">
                    <img
                      src={`${BASE_URL}${product.imageUrl}`}
                      alt={product.name}
                      className="w-full max-h-[300px] min-h-[300px] object-contain object-center"
                    />
                  </div>

                  <div className="flex justify-between gap-2 mb-2">
                    {/* Wishlist */}
                    <div className="flex items-center gap-1 transition-all group cursor-pointer" onClick={() => toast.success('Added to Wishlist')}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6 text-gray-500 group-hover:text-[#94d0a8]">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M21 8.25c0 7.25-9 12-9 12s-9-4.75-9-12a5.25 5.25 0 0 1 10.5-1.471A5.25 5.25 0 0 1 21 8.25z" />
                      </svg>
                      <div className="text-[0px] group-hover:text-sm text-[#94d0a8] transition-all">
                        Add to Wishlist
                      </div>
                    </div>

                    {/* Cart */}
                    <div onClick={() => onAddToCart(product)} className="flex items-center gap-1 transition-all group cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" strokeWidth={1.5}
                        stroke="currentColor" className="w-6 h-6 text-gray-500 group-hover:text-[#94d0a8]">
                        <path strokeLinecap="round" strokeLinejoin="round"
                          d="M2.25 3h1.636a1.5 1.5 0 0 1 1.474 1.222l.681 3.408a.75.75 0 0 0 .736.62h9.898a.75.75 0 0 1 .728.902l-1.2 6A.75.75 0 0 1 15.8 16.5H6.729a.75.75 0 0 1-.728-.598L4.071 4.818A.75.75 0 0 0 3.338 4.2L2.25 4.2M6 20.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm9.75 0a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                      </svg>
                      <div className="text-[0px] group-hover:text-sm text-[#94d0a8] transition-all">
                        Add to Cart
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-center text-center">
                    <div className="text-lg font-normal font-sans mb-1">
                      {product.name}
                    </div>
                    {/* ✅ Product description added here */}
                    <div className="text-sm text-gray-600 italic mb-2">{product.description}</div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                      <h4 className="text-xl font-semibold">$ {product.discountedprice}</h4>
                      {product.discountedprice !== product.price && (
                        <p className="text-lg text-gray-400 line-through">
                          $ {product.price}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </div>
    </div>
  );
};

export default ShopMediNova;
