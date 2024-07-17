const Main = () => {
    return (
        <>
            <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center py-10">
                <h1 className="text-4xl font-bold mb-8">ERP Main Menu</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:scale-125 hover:shadow-2xl transition">
                        <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
                        <p className="text-gray-600 mb-4">Overview of all metrics</p>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-blue-600 transition">
                            Go to Dashboard
                        </button>
                    </div> */}
                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition">
                        <h2 className="text-2xl font-semibold mb-4">Sales</h2>
                        <p className="text-gray-600 mb-4">Manage sales and orders</p>
                        <button className="bg-green-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-green-600 transition">
                            Go to Sales
                        </button>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition">
                        <h2 className="text-2xl font-semibold mb-4">Inventory</h2>
                        <p className="text-gray-600 mb-4">Track and manage inventory</p>
                        <button className="bg-red-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-red-600 transition">
                            Go to Inventory
                        </button>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition">
                        <h2 className="text-2xl font-semibold mb-4">Finance</h2>
                        <p className="text-gray-600 mb-4">Manage financial records</p>
                        <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-yellow-600 transition">
                            Go to Finance
                        </button>
                    </div>
                    <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition">
                        <h2 className="text-2xl font-semibold mb-4">HR</h2>
                        <p className="text-gray-600 mb-4">Human resources management</p>
                        <button className="bg-purple-500 text-white py-2 px-4 rounded-lg shadow-lg hover:bg-purple-600 transition">
                            Go to HR
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Main