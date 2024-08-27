import { useEffect, useState } from "react";
import axios from "axios";
const DepartmentTable = () => {
    const [Departments, setDepartments] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [searchTerm, setSearchTerm] = useState<string>("");

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('http://localhost:5196/HRControllers/allDept');
                console.log(response.data);
                setDepartments(response.data);
            } catch (error) {
                setError('Failed to fetch employees.');
            } finally {
                setLoading(false);
            }
        };

        fetchEmployees();
    }, []);

    if (loading) {
        return <div className="container mx-auto px-4">Loading...</div>;
    }

    if (error) {
        return <div className="container mx-auto px-4">{error}</div>;
    }

    const indexOfLastDepartment = currentPage * itemsPerPage;
    const indexOfFirstDepartment = indexOfLastDepartment - itemsPerPage;

    const filteredDepartments = Departments.filter(Departments =>
        Departments.DEP_DepartmentName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="container mx-auto px-4">
                <div className="overflow-x-auto">
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            <label htmlFor="itemsPerPage" className="mr-2">Items per page:</label>
                            <select
                                id="itemsPerPage"
                                value={itemsPerPage}
                                onChange={(e) => setItemsPerPage(Number(e.target.value))}
                                className="select select-bordered"
                            >
                                <option value="5">5</option>
                                <option value="10">10</option>
                                <option value="15">15</option>
                                <option value="20">20</option>
                            </select>
                        </div>

                        <div className="flex items-center space-x-2">
                            <input
                                type="text"
                                placeholder="Search department"
                                className="input input-bordered w-full max-w-xs"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="w-full overflow-x-auto table table-hover table-striped table-mobile-responsive table-mobile-sided">
                        <table className="min-w-full border-collapse bg-white text-left text-sm text-gray-500 table w-full table-xs">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-4 font-medium text-gray-900">ID</th>
                                    <th className="px-6 py-4 font-medium text-gray-900">Department name</th>
                                    <th className="px-6 py-4 font-medium text-gray-900">Department Location</th>
                                    <th className="px-6 py-4 font-medium text-gray-900"></th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredDepartments.slice(indexOfFirstDepartment, indexOfLastDepartment).map((Departments, index) => (
                                    <tr key={index}>
                                        <td className="py-2 px-4">{Departments.DEP_DepartmentID}</td>
                                        <td className="py-2 px-4">{Departments.DEP_DepartmentName}</td>
                                        <td className="py-2 px-4">{Departments.DEP_Location}</td>
                                        <td className="py-2 px-4 flex"></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <div className="flex justify-center my-4">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="px-4 py-2 mx-1 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-gray-400"
                            >
                                Previous
                            </button>
                            <span className="px-4 py-2 mx-1 border-t border-b text-blue-500">Page {currentPage}</span>
                            <button
                                onClick={() => setCurrentPage(prev => prev + 1)}
                                disabled={indexOfLastDepartment >= filteredDepartments.length}
                                className="px-4 py-2 mx-1 text-white bg-blue-500 rounded hover:bg-blue-600 disabled:bg-gray-400"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default DepartmentTable