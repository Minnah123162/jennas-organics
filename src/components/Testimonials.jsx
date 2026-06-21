import { FaQuoteLeft } from "react-icons/fa";

function Testimonials(){
    const testimonials = [
        {
            name: "Ayesha, Kozhikode",
            review: "My baby absolutely loves the Ragi mix. Finally something clean and homemade! I trust Jenna's Organics completely.",
        },
        {
            name: "Priya, Kochi",
            review: "No more worrying about labels. Jenna's is all natural and my daughter loves every single product.",
        },
        {
            name: "Fathima, Malappuram",
            review: "The Makhana Oats powder is our family favourite. Fresh, healthy and my baby can't get enough of it!",
        },
        {
            name: "Sreelakshmi, Thrissur",
            review: "I love that it's made in small batches. You can actually taste the freshness. Highly recommend to all moms!",
        },
    ];
    return(
        <section className="bg-[#faf7f0] px-12 md:px-14 lg:px-12 py-12 md:py-16">
            <div className="w-full max-w-[1500px] mx-auto">

                <div className="mb-10">
                    <p className="text-xs md:text-sm lg:text-base uppercase tracking-widest text-[#639922] mb-1">What Moms Say</p>
                    <h2 className="text-2xl md:text-3xl font-medium text-[#27500a]">Loved by families across Kerala</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
                    {testimonials.map((item, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 lg:p-8 border border-[#c0dd97] flex flex-col gap-4">
                            <FaQuoteLeft size={20} color="#c0dd97" />
                            <p className="text-sm md:text-base md:font-medium text-gray-500 leading-relaxed flex-1 ml-2">{item.review}</p>
                            <p className="text-sm font-semibold text-[#3b6d11]">{item.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials;