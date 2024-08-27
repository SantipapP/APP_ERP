const DepartmentForm = () => {
    return (
        <>
            <div className="container mx-auto px-4">
                <div className="overflow-x-auto">
                    <div className="flex items-center justify-between mb-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 w-full">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6 w-full">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                                    <select className="select select-bordered w-full">
                                        <option value="">-Please select-</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Code</label>
                                    <input type="text" className="input input-bordered w-full" required />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Department name</label>
                                <input type="text" className="input input-bordered w-full" required />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-6 w-full">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Building</label>
                                    <select className="select select-bordered w-full">
                                        <option value="">-Please select-</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Floor</label>
                                    <select className="select select-bordered w-full">
                                        <option value="">-Please select-</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DepartmentForm