import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(){
    const[menuOpen, setMenuOpen] = useState(false); 
    return(
        <nav className="bg-[#faf7f0] border-b border-[#c0dd97] px-6 lg:px-12 py-4">
            <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#3b6d11] rounded-full flex items-center justify-center">
                        <span className="text-sm lg:text-lg">🌿</span>
                    </div>
                    <span className="text-[#3b6d11] font-semibold text-xl lg:text-2xl">Jenna's Organics</span>
                </div>

                <div className="hidden md:flex gap-6 lg:gap-10 text-sm lg:text-lg text-gray-500 font-medium lg:font-semibold">
                    <Link to="/" className="hover:text-[#3b6d11]">Home</Link>
                    <Link to="/products" className="hover:text-[#3b6d11]">Products</Link>
                    <Link to="/about" className="hover:text-[#3b6d11]">About</Link>
                    <Link to="/contact" className="hover:text-[#3b6d11]">Contact</Link>
                </div> 

                <Link to="/products" className="hidden md:block">
                    <button className="bg-[#3b6d11] text-[#eaf3de] text-sm px-5 py-2 rounded-full hover:bg-[#27500a] transition font-medium">
                        Shop Now
                    </button>
                </Link>

                <button className="md:hidden text-2xl font-medium text-[#3b6d11]" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? "✕" : "☰"}
                </button>
            </div>

            {menuOpen && (
                <div className="md:hidden flex flex-col gap-4 mt-4 text-sm text-gray-500">
                    <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
                    <Link to="/products" onClick={() => setMenuOpen(false)}>Products</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
                    <Link to="/products" onClick={() => setMenuOpen(false)}>
                        <button className="bg-[#3b6d11] text-[#eaf3de] text-sm px-5 py-2 rounded-full w-full">
                            Shop Now
                        </button>
                    </Link>
                </div>
            )}  
        </nav>
    );
}



export default Navbar;