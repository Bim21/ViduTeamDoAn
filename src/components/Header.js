import React from 'react';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Images from "../static";
const Header = () => {
    return (
        <div>
        <header>
          <nav class="bg-white">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto relative">
              <div class="w-[8%] h-fit">
                <a href="/" class="flex items-center w-fit">
                  <img src={Images.logo} class="w-auto object-cover h-[60px]" />
                </a>
              </div>
      
              <div class="w-full items-center justify-between hidden md:flex md:flex-[0.95] md:order-1" id="navbar-user">
                <ul class="flex flex-col flex-1 list-none font-medium md:p-0 mt-2 border md:flex-row md:space-x-6 md:mt-0 md:border-0 items-center justify-around">
                  <li class="flex-[3.5]">
                    <div class="relative w-full">
                      <div class="absolute inset-y-0 left-0 flex items-center pl-3">
                        <svg class="w-4 h-4 text-gray-500" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          ></path>
                        </svg>
                      </div>
                      <input
                        type="search"
                        id="default-search"
                        class="placeholder:text-gray-600 block w-full p-4 pl-10 text-sm font-normal text-gray-900 border border-gray-100 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500 py-2"
                        placeholder="Tìm kiếm sản phẩm tại đây....."
                        required
                      />
                    </div>
                  </li>
      
                  <li class="px-0 cursor-pointer">
                    <div class="flex justify-center items-center my-auto">
                      <img src={Images.iconLookUpOrders} alt="" class="w-auto h-6 object-contain" />
                      <div class="ml-3">
                        <p class="text-xs font-normal">Theo dõi đơn hàng</p>
                        <p class="text-sm font-semibold">Tra cứu đơn hàng</p>
                      </div>
                    </div>
                  </li>
                  <li class="flex-1 px-0 cursor-pointer">
                    <div class="flex justify-center items-center my-auto">
                      <div class="relative">
                        <img src={Images.iconCart2} class="h-6 w-auto object-contain" />
                      </div>
                      <div class="ml-3">
                        <p class="text-sm font-semibold">Giỏ hàng</p>
                      </div>
                    </div>
                  </li>
      
                  <li class="px-0 relative">
                    <div class="flex justify-center items-center my-auto">
                      <div class="relative">
                        <img src={Images.iconInti} alt="" class="w-auto h-9 object-contain" />
                      </div>
                      <div class="ml-3">
                        <p class="text-sm font-semibold">Thông báo</p>
                      </div>
                    </div>
                  </li>
                  <li class="px-0 cursor-pointer"></li>
                </ul>
              </div>
            </div>
          </nav>
          <nav class="bg-[#f5f5f5]">
            <div class="max-w-screen-xl px-4 mx-auto">
              <div class="flex items-center overflow-x-auto no-scrollbar">
                <ul class="flex flex-row font-medium mr-6 space-x-8 text-sm">
                  <li class="relative tracking-wider btn4 leading-none overflow-hidden py-3 group">
                    <span class="absolute inset-x-0 h-[1.5px] bottom-0 bg-[#6756ca]"></span>
                  </li>
                  <li class="relative tracking-wider btn4 whitespace-nowrap leading-none overflow-hidden py-3">
                    <span class="absolute inset-x-0 h-[1.5px] bottom-0 bg-[#6756ca]"></span>
                    <a
                      href="/"
                      class="group hover:text-purple-600 transition-colors duration-300"
                    >
                      Trang chủ
                    </a>
                  </li>
                  <li class="relative tracking-wider btn4 whitespace-nowrap leading-none overflow-hidden py-3">
                    <span class="absolute inset-x-0 h-[1.5px] bottom-0 bg-[#6756ca]"></span>
                    <a
                      href="/products"
                      class="group hover:text-purple-600 transition-colors duration-300"
                    >
                      Sản phẩm
                    </a>
                  </li>
                  <li class="relative tracking-wider btn4 whitespace-nowrap leading-none overflow-hidden py-3">
                    <span class="absolute inset-x-0 h-[1.5px] bottom-0 bg-[#6756ca]"></span>
                    <a
                      href="/about"
                      class="group hover:text-purple-600 transition-colors duration-300"
                    >
                      Về chúng tôi
                    </a>
                  </li>
                  <li class="relative tracking-wider btn4 whitespace-nowrap leading-none overflow-hidden py-3">
                    <span class="absolute inset-x-0 h-[1.5px] bottom-0 bg-[#6756ca]"></span>
                    <a
                      href="/contact"
                      class="group hover:text-purple-600 transition-colors duration-300"
                    >
                      Liên hệ
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    );
};

export default Header;