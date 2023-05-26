import React from 'react';
import { FaFacebook , FaInstagram , FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-rose-100'>
            <footer className="footer p-10 text-base-content max-w-screen-xl mx-auto">
                <div>
                    <div className='flex justify-start items-center'>
                        <img className='w-12 h-12 rounded-full' src="https://cdn-icons-png.flaticon.com/512/95/95510.png?w=1380&t=st=1684390062~exp=1684390662~hmac=7bc302c3acf27b8f3c81c6033ab5abe41005f469a1c94203b679826f53a183fe" alt="" />
                        <a className=" ml-2 normal-case text-2xl font-semibold">ZooToys</a>
                    </div>

                    <div className='mt-2'>
                        <p>Address: Level-12, 34, Avenew, Mirpur, Dhaka</p>
                        <p>Support: zoo@toy.com</p>
                        <p>Helpline: 12944856 , 12340987</p>
                    </div>

                    <div className='flex gap-4 mt-4'>
                        <FaFacebook className='text-3xl'></FaFacebook>
                        <FaInstagram className='text-3xl'></FaInstagram>
                        <FaLinkedin className='text-3xl'></FaLinkedin>
                        <FaTwitter className='text-3xl'></FaTwitter>

                    </div>
                </div>
                <div>
                    <span className="footer-title text-rose-700">Help</span>
                    <a className="link link-hover">Search</a>
                    <a className="link link-hover">Information</a>
                    <a className="link link-hover">Privacy Policy</a>
                    <a className="link link-hover">Shipping Details</a>
                </div>
                <div>
                    <span className="footer-title text-rose-700">Support</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact us</a>
                    <a className="link link-hover">Refunds & Returns</a>
                    <a className="link link-hover">Deliveries</a>
                </div>
                <div>
                    <span className="footer-title text-rose-700">Information</span>
                    <a className="link link-hover">Search Terms</a>
                    <a className="link link-hover">Advance Search</a>
                    <a className="link link-hover">Help & Faq's</a>
                    <a className="link link-hover">Store & Return</a>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-rose-100 text-base-content">
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>

        </div>
    );
};

export default Footer;