import { useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaComputer } from "react-icons/fa6";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { MdAccountBalanceWallet } from "react-icons/md";
import { IoIosCash } from "react-icons/io";
import Navbar from "../components/Navbar";
const Main = () => {
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className="bg-gray-100 min-h-screen flex flex-col items-center ">
                <h1 className="text-4xl font-bold m-5">ERP Main Menu</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:scale-125 hover:shadow-2xl transition">
                        <FaUser size={50} />
                        <h2 className="text-2xl font-semibold mb-4">HR</h2>
                        <p className="text-gray-600 mb-4">Human resources And Admin</p>
                        <button onClick={()=>navigate("/Employee")} className="bg-purple-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-purple-600 transition">
                            Click
                        </button>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:scale-125 hover:shadow-2xl transition">
                        <FaComputer size={50} />
                        <h2 className="text-2xl font-semibold mb-4">IT</h2>
                        <p className="text-gray-600 mb-4">Information technology</p>
                        <button className="bg-purple-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-purple-600 transition">
                            Click
                        </button>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:scale-125 hover:shadow-2xl transition">
                        <BiSolidPurchaseTag size={50} />
                        <h2 className="text-2xl font-semibold mb-4">PU</h2>
                        <p className="text-gray-600 mb-4">Purchasing</p>
                        <button className="bg-purple-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-purple-600 transition">
                            Click
                        </button>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:scale-125 hover:shadow-2xl transition">
                        <IoIosCash size={50} />
                        <h2 className="text-2xl font-semibold mb-4">FI</h2>
                        <p className="text-gray-600 mb-4">Finance</p>
                        <button className="bg-purple-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-purple-600 transition">
                            Click
                        </button>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:scale-125 hover:shadow-2xl transition">
                        <MdAccountBalanceWallet size={50} />
                        <h2 className="text-2xl font-semibold mb-4">AC</h2>
                        <p className="text-gray-600 mb-4">Accounting</p>
                        <button className="bg-purple-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-purple-600 transition">
                            Click
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main