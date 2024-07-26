import { useEffect, useState } from 'react';
import axios from 'axios';
import { LuPencil } from "react-icons/lu";
interface Employee {
    EMP_ID: string;
    EMP_FirstName: string;
    EMP_LastName: string;
    EMP_Position: string;
    EMP_DepartmentID: string;
    EMP_Status: string;
    DEP_DepartmentName:string;
}

const EmployeeTable = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchEmployees = async () => {
            try {
                const response = await axios.get('http://localhost:5196/HRControllers/allEmp'); // เปลี่ยน URL ให้ตรงกับ API ของคุณ
                console.log(response.data)
                setEmployees(response.data);
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

    const handleEditClick = (employeeId: string) => {
        console.log(`Edit employee with ID: ${employeeId}`);
    };

    return (
        <>
            <div className="container mx-auto px-4">
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse bg-white text-left text-sm text-gray-500">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-4 font-medium text-gray-900">ID</th>
                                <th className="px-6 py-4 font-medium text-gray-900">Name</th>
                                <th className="px-6 py-4 font-medium text-gray-900">Position</th>
                                <th className="px-6 py-4 font-medium text-gray-900">Department</th>
                                <th className="px-6 py-4 font-medium text-gray-900"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee) => (
                                <tr key={employee.EMP_ID}>
                                    <td className="py-2 px-4 border-b">{employee.EMP_ID}</td>
                                    <td className="py-2 px-4 border-b">{employee.EMP_FirstName} {employee.EMP_LastName}</td>
                                    <td className="py-2 px-4 border-b">{employee.EMP_Position}</td>
                                    <td className="py-2 px-4 border-b">{employee.DEP_DepartmentName}</td>
                                    <td className="py-2 px-4 border-b">
                                        <LuPencil className="cursor-pointer" onClick={() => handleEditClick(employee.EMP_ID)} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}
export default EmployeeTable;
