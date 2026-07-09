import Link from "next/link"

export const GetQuote = () => {

return (
    <div className="bg-gray-200 md:px-20 px-10 py-10 md:py-20">

    <div className="bg-red-700 py-20 md:py-40 rounded-4xl  ">
        <h1 className="text-3xl md:text-5xl font-bold text-white text-center">Ready to Order Wholesale Water?</h1>
        <p className="text-gray-200 text-center mt-4">Join the network of business that priortize quality and efficiency.</p>
        <div className="flex justify-center">
<Link href={"/support"}>
        <button className="bg-white text-red-500 px-4 border-2 border-black  py-5 mt-4 rounded-2xl   hover:scale-105 transition-all shadow-xl">Get a Custom Quote</button>
</Link>
        </div>
    </div>
    </div>
)

}