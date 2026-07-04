import { LucideShoppingCart } from "lucide-react"
export const Navbar = () => {

    return <div className="container">
        <nav className="flex flex-row justify-between  ">
            <ul className="flex flex-row space-x-14 ml-2">
                <h1 className="text-3xl text-[#e53935] ">KS TRADERS</h1>
                <li>Home</li>
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