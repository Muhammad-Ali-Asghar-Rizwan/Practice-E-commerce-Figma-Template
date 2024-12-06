import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-6 px-6">
        {/* Exclusive Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Exclusive</h3>
          <p className="mb-4">Subscribe</p>
          <p className="mb-4 text-sm">Get 10% off your first order</p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 w-full rounded-l-md focus:outline-none text-black"
            />
            <button className="bg-red-500 px-4 py-2 rounded-r-md text-white hover:bg-red-600">
              &gt;
            </button>
          </div>
        </div>

        {/* Support Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Support</h3>
          <p className="text-sm mb-2">111 Bijoy Sarani, Dhaka, DH 1515, Bangladesh</p>
          <p className="text-sm mb-2">exclusive@gmail.com</p>
          <p className="text-sm">+88015-88888-9999</p>
        </div>

        {/* Account Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Account</h3>
          <ul className="text-sm space-y-2">
            <li>My Account</li>
            <li>Login / Register</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
        </div>

        {/* Quick Link Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Quick Link</h3>
          <ul className="text-sm space-y-2">
            <li>Privacy Policy</li>
            <li>Terms Of Use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Download App Section */}
        <div>
          <h3 className="text-lg font-bold mb-4">Download App</h3>
          <p className="text-sm mb-4">Save $3 with App New User Only</p>
          {/* <div className="flex items-center space-x-4 mb-4">
            <Image 
              src="/google-play.png"
              alt="Google Play"
              className="w-28"
            />
            <Image 
              src="/app-store.png"
              alt="App Store"
              className="w-28"
            />
          </div> */}

          <div className="flex gap-3">
            <div>
              <Image   src="/images/scan.png"  alt="footer" width={200} height={100} className="w-[76px] h-[76px]"/>
            </div>
            <div className="gap-4">
             <Image  src="/images/play.png" alt="footer" width={100} height={50} />
             <Image  src="/images/apple.png"  alt="footer" width={100} height={50} className="mt-2"/>
            </div>
          </div>
          <div className="flex space-x-4">
            <a href="#" aria-label="Facebook">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-sm mt-8 border-t border-gray-700 pt-4">
        © Copyright Rimel 2022. All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
