import { RiLeafFill } from "react-icons/ri";
import { FaShieldAlt } from "react-icons/fa";
import { FaBaby } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
function TrustBadges(){
    const badges = [
        {icon: <RiLeafFill size={28} className="md:w-8 md:h-8 lg:w-10 lg:h-10" color="#3b6d11"/>, label: "Organic Certified"},
        {icon: <FaShieldAlt size={28} className="md:w-8 md:h-8 lg:w-10 lg:h-10" color="#3b6d11"/>, label: "No Preservatives"},
        {icon: <FaBaby size={28} className="md:w-8 md:h-8 lg:w-10 lg:h-10" color="#3b6d11"/>, label: "Pediatrician Approved"},
        {icon: <MdDeliveryDining className="md:w-8 md:h-8 lg:w-10 lg:h-10" size={28} color="#3b6d11"/>, label: "Fresh Delivery"}
    ]
    return(
        <section className="border-t border-b border-[#c0dd97] bg-[#faf7f0]">
            <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-[#c0dd97] divide-y md:divide-y-0">
                {badges.map((badge, index) =>(
                    <div key={index} className="flex flex-col items-center justify-center py-6 md:py-8 lg:py-12 px-4 text-center">
                        <span className="mb-2 lg:mb-4">{badge.icon}</span>
                        <span className="text-xs md:text-sm md:font-medium lg:font-semibold lg:text-lg text-gray-500">{badge.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default TrustBadges;