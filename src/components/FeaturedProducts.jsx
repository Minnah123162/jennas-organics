import { useNavigate  } from "react-router-dom";

import makhanaOats from "../assets/makhana-oats.jpeg";
import chocoMalt from "../assets/ragi-choco-malt.jpeg";
import ragiStrawberry from "../assets/ragi-strawberry-pancake.jpeg"
import bananaNavara from "../assets/banana-navara.jpeg"
import kunnanKaya from "../assets/kunnan-kaya.jpeg"
function FeaturedProducts(){
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            name: "Makhana Oats + Almonds & Cashews Powder",
            age: "6+ months",
            tag: "Bestseller",
            tagColor: "bg-[#7FB39A]/30 text-[#27500a] font-semibold",
            image: makhanaOats,
        },
        {
            id: 2,
            name: "Sprouted Ragi Choco Malt with Makhana",
            age: "8+ months",
            tag: "New",
            tagColor: "bg-[#F4A261]/30 text-[#7a3d00] font-semibold",
            image: chocoMalt,
        },
        {
            id: 3,
            name: "Ragi Strawberry Pancake Mix",
            age: "8+ months",
            tag: "Popular",
            tagColor: "bg-[#E9C46A]/30 text-[#7a5c00] font-semibold",
            image: ragiStrawberry,
        },
        {
            id: 4,
            name: "Kunnan-Kaya Powder",
            age: "6+ months",
            tag: "Popular",
            tagColor: "bg-[#E9C46A]/30 text-[#7a5c00] font-semibold",
            image: kunnanKaya,
        },
    ];

    return(
        <section className="bg-[#faf7f0] px-10 md:px-14 py-12 md:py-16">
            <div className="w-full max-w-[1500px] mx-auto">

                <div className="flex items-center justify-between mb-8">
                    <div>
                        <p className="text-xs md:text-sm lg:text-lg uppercase tracking-widest text-[#639922] mb-1 md:font-medium lg:font-semibold">Our Products</p>
                        <h2 className="text-2xl md:text-3xl font-medium text-[#27500a]">Made fresh, delivered pure</h2>
                    </div>

                    <button
                        onClick={() => navigate("/products")}
                        className="hidden md:block border border-[#3b6d11] text-[#3b6d11] text-sm px-5 py-2 rounded-full hover:bg-[#eaf3de] transition"
                    >
                        View All
                    </button>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6 lg:gap-10">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-2xl overflow-hidden border border-[#c0dd97] hover:shadow-md lg:hover:shadow-xl transition cursor-pointer"
                            onClick={() => navigate("/products")}
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-48 md:h-56 lg:h-80 object-cover"
                            />
                            <div className="p-3">
                                <span className={`text-xs md:text-sm lg:text-base px-2 py-1 font-medium ${product.tagColor}`}>
                                    {product.tag}
                                </span>
                                <p className="text-sm md:text-base lg:text-lg font-medium lg:font-semibold text-[#27500a] mt-2 leading-snug">{product.name}</p>
                                <p className="text-xs md:text-sm lg:text-base">{product.age}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex justify-center md:hidden">
                    <button
                        onClick={() => navigate("/products")}
                        className="border border-[#3b6d11] text-[#3b6d11] text-sm px-6 py-2 rounded-full hover:bg-[#eaf3de] transition">
                        View All Products
                    </button>
                </div>
            </div>
        </section>
    );

}

export default FeaturedProducts;