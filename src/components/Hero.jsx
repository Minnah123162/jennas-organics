import heroImg from "../assets/hero-products.jpeg";

function Hero(){
    return(
        <section className="bg-[#faf7f0] px-8 md:px-14 py-12 md:py-20 lg:py-28">
            <div className="flex flex-col md:flex-row items-center justify-between gap-10 lg:gap-24 w-full max-w-[1450px] mx-auto">

                <div className="flex-2 lg:flex-1 text-center md:text-left">
                    <span className="bg-[#eaf3de] text-[#3b6d11] text-xs lg:text-sm px-3 py-2 lg:px-4 lg:py-3 rounded-full">
                        100% Organic · Kerala Made
                    </span>
                    <h1 className="text-3xl md:text-5xl lg:text-6xl font-medium text-[#27500a] leading-snug mt-4 mb-4">
                        Pure food, crafted <br /> for your little one
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg text-gray-500 leading-relaxed mb-8 max-w-sm mx-auto md:mx-0">
                        Traditional recipes, organic ingredients, made fresh in small batches. 
            No preservatives. No compromises.
                    </p>

                    <div className="flex gap-4 justify-center md:justify-start">
                        <button className="bg-[#3b6d11] text-[#eaf3de] text-sm lg:text-base lg:font-medium px-6 lg:px-8 py-3 rounded-full hover:bg-[#27500a] transition">
                            Explore Products
                        </button>
                        <button className="border border-[#3b6d11] text-[#3b6d11] text-sm lg:text-base lg:font-medium px-6 lg:px-8 py-3 rounded-full hover:bg-[#eaf3de] transition">
                            Our Story
                        </button>
                    </div>
                </div>
                <div>
                    <img src={heroImg} alt="Jenna's Organics Products" className="w-full max-w-md lg:max-w-xl lg:max-h-[80vh] rounded-2xl object-cover shadow-sm lg:shadow-xl"/>
                </div>
            </div>
        </section>

    );
}


export default Hero;