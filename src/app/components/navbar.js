import { LucideShoppingCart } from "lucide-react"
import { melfira } from "../layout"
export const Navbar = () => {

    return <div className="container">
        <nav className="flex flex-row justify-between  ">
            <ul className="flex flex-row space-x-14 ml-2">
                <h1 className={`text-4xl text-[#e53935] ${melfira.className}  `}>KS TRADERS</h1>
                <li className="text-[#666666] text-2xl transition-all duration-300 hover:text-[#e53935] hover:underline cursor-pointer">
  Home
</li>
                <li>Store</li>
                <li>Support</li>
            </ul>
            <ul>
                <li><LucideShoppingCart  size={24} /></li>
                <li><button>Order Now</button></li>
            </ul>
        </nav>
    </div>
    
}