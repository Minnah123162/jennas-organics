import { RiLeafFill } from "react-icons/ri";
import { FaClock, FaUsers } from "react-icons/fa";
import { GiCookingPot } from "react-icons/gi";
function WhyUs(){
    const reasons = [
        {
            iconSm: <FaClock size={23} color="#27500a" />,
            iconLg: <FaClock size={36} color="#27500a" />,
            title: "Made Fresh Daily",
            desc: "Small batches prepared fresh every day — no bulk production, no shortcuts.",
        },
        {
            iconSm: <RiLeafFill size={26} color="#27500a" />,
            iconLg: <RiLeafFill size={36} color="#27500a" />,
            title: "Organically Sourced",
            desc: "Every ingredient is carefully sourced from organic farms across Kerala.",
        },
        {
            iconSm: <FaUsers size={26} color="#27500a" />,
            iconLg: <FaUsers size={34} color="#27500a" />,
            title: "Trusted by Families",
            desc: "Loved by 500+ Kerala families who trust us with their little ones.",
        },
        {
            iconSm: <GiCookingPot size={29} color="#27500a" />,
            iconLg: <GiCookingPot size={39} color="#27500a" />,
            title: "Traditional Recipes",
            desc: "Age-old Kerala recipes made with modern hygiene and safety standards.",
        },
    ];
    return(
        <section className="bg-[#eaf3de] px-12 md:px-16 lg:px-12 py-12 md:py-16">
            <div className="w-full max-w-[1500px] mx-auto">

                <div className="mb-10">
                    <p className="text-xs md:text-sm lg:text-base uppercase tracking-widest text-[#639922] mb-1 font-medium lg:font-semibold">Why Jenna's Organics</p>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-[#27500a]">Rooted in tradition,<br />trusted by moms</h2>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
                    {reasons.map((reason, index) => (
                        <div key={index} className="bg-white rounded-2xl p-6 lg:p-8 border border-[#c0dd97]flex flex-col items-center text-center">
                            <div className="w-10 h-10 lg:w-14 lg:h-14 bg-[#eaf3de] rounded-full flex items-center justify-center mb-4 mx-auto">
                                <span className="block lg:hidden">{reason.iconSm}</span>
                                <span className="hidden lg:block">{reason.iconLg}</span>
                            </div>
                            <h3 className="text-sm md:text-base lg:text-lg font-semibold text-[#27500a] mb-2">{reason.title}</h3>
                            <p className="text-xs md:text-sm text-gray-500 leading-relaxed lg:font-medium">{reason.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WhyUs;