import { RiLeafFill } from "react-icons/ri";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdLocationOn, MdPhone } from "react-icons/md";
import logo from "../assets/logo.png";

function Footer(){
    return(
        <footer className="bg-[#27500a] text-[#eaf3de] px-12 md:px-14 lg:px-12 py-12">
            <div className="w-full max-w-[1500px] mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="bg-[#eaf3de] rounded-full p-0.5 border border-[#c0dd97]">
                                <img src={logo} alt="Jenna's Organics" className="w-12 h-12 object-contain rounded-full" />
                            </div>
                            <span className="text-base md:text-lg font-medium">Jenna's Organics</span>
                        </div>
                        <p className="text-xs md:text-sm lg:text-base text-[#c0dd97] leading-relaxed">
                            Homemade organic baby food made with love in Kerala. No preservatives, no added sugar — just pure nutrition for your little one.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm md:text-base lg:text-lg font-semibold mb-4">Quick Links</h4>
                        <div className="flex flex-col gap-2 text-xs md:text-sm lg:text-base font-medium text-[#c0dd97]">
                            <Link to="/" className="hover:text-white transition">Home</Link>
                            <Link to="/products" className="hover:text-white transition">Products</Link>
                            <Link to="/about" className="hover:text-white transition">About Us</Link>
                            <Link to="/contact" className="hover:text-white transition">Contact</Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-sm md:text-base lg:text-lg font-semibold mb-4">Contact Us</h4>
                        <div className="flex flex-col gap-3 text-xs md:text-sm lg:text-base text-[#c0dd97]">
                            <div className="flex items-center gap-2">
                                <MdLocationOn size={22} color="#c0dd97" />
                                <span>Kottakoor, Malappuram, Kerala</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MdPhone size={22} color="#c0dd97" />
                                <span>+91 96472 22009 / 97477 84844</span>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-4 text-[#c0dd97]">
                            <a href="https://www.instagram.com/jennasorganics?igsh=MWd4bmR3d2Q0ZDFpZQ==" target="_blank" rel="noreferrer">
                                <FaInstagram size={22} className="hover:text-white cursor-pointer transition" />
                            </a>
                            <FaWhatsapp size={22} className="hover:text-white cursor-pointer transition" />
                            <FaFacebook size={22} className="hover:text-white cursor-pointer transition" />
                        </div>
                    </div>

                </div>
                <div className="border-t border-[#3b6d11] pt-6 text-xs md:text-sm lg:text-base font-medium text-[#c0dd97] flex flex-col md:flex-row justify-between gap-2">
                    <p>© 2026 Jenna's Organics. All rights reserved.</p>
                    <p>Made with 🌿 in Kerala, India</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;