import { useState, useEffect, useRef } from 'react';
import axios from 'axios';

interface Department {
    DEP_DepartmentID: string;
    DEP_DepartmentName: string;
}


const EmpRegistationModal = () => {
    const [EMP_ID, setEMP_ID] = useState('')
    const [EMP_FirstName, setEMP_FirstName] = useState('')
    const [EMP_LastName, setEMP_LastName] = useState('')
    const [EMP_DateOfBirth, setEMP_DateOfBirth] = useState('')
    const [EMP_Gender, setEMP_Gender] = useState('')
    const [EMP_HireDate, setEMP_HireDate] = useState('')
    const [EMP_DepartmentID, setEMP_DepartmentID] = useState('')
    const [EMP_Position, setEMP_Position] = useState('')
    const [EMP_Salary, setEMP_Salary] = useState('')
    const [EMP_Email, setEMP_Email] = useState('')
    const [EMP_Phone, setEMP_Phone] = useState('')
    const [EMP_Address, setEMP_Address] = useState('')
    const [EMP_City, setEMP_City] = useState('')
    const [EMP_State, setEMP_State] = useState('')
    const [EMP_ZipCode, setEMP_ZipCode] = useState('')
    const [EMP_Country, setEMP_Country] = useState('')

    const [departments, setDepartments] = useState<Department[]>([]);
    const departmentRef = useRef<HTMLSelectElement>(null);

    useEffect(() => {
        const fetchDepartments = async () => {
            try {
                const response = await axios.get('http://localhost:5196/HRControllers/allDept');
                setDepartments(response.data);
            } catch (error) {
                console.error('Error fetching departments:', error);
            }
        };

        fetchDepartments();
    }, []);

    const SubmitRegistation = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const selectedDepartmentID = departmentRef.current?.value || '';
        setEMP_DepartmentID(selectedDepartmentID);

        const RegistationData = [{
            "EMP_ID":EMP_ID,
            "EMP_FirstName":EMP_FirstName,
            "EMP_LastName":EMP_LastName,
            "EMP_DateOfBirth":EMP_DateOfBirth,
            "EMP_Gender":EMP_Gender,
            "EMP_HireDate":EMP_HireDate,
            "EMP_DepartmentID":EMP_DepartmentID,
            "EMP_Position":EMP_Position,
            "EMP_Salary":EMP_Salary,
            "EMP_Email":EMP_Email,
            "EMP_Phone":EMP_Phone,
            "EMP_Address":EMP_Address,
            "EMP_City":EMP_City,
            "EMP_State":EMP_State,
            "EMP_ZipCode":EMP_ZipCode,
            "EMP_Country":EMP_Country
        }]

        console.log(RegistationData)
        // console.log(EMP_ID, EMP_FirstName, EMP_LastName, EMP_DateOfBirth, EMP_Gender, EMP_HireDate, EMP_DepartmentID, EMP_Position, EMP_Salary, EMP_Email, EMP_Phone, EMP_Address, EMP_City, EMP_State, EMP_ZipCode, EMP_Country)
    }
    return (
        <>
            {/*------------------------ Employee registration form modal-------------------------------------- */}
            <dialog id="Employee_Form_Modal" className="modal">
                <div className="modal-box w-full max-w-5xl p-6 bg-white rounded-lg shadow-md">
                    <h3 className="font-bold text-2xl mb-6 text-center">Employee Registration Form</h3>
                    <form onSubmit={SubmitRegistation}>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">ID</label>
                                <input type="text" className="input input-bordered w-full" value={EMP_ID} onChange={(e) => setEMP_ID(e.target.value)} required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                                <input type="text" className="input input-bordered w-full" value={EMP_FirstName} onChange={(e) => setEMP_FirstName(e.target.value)} required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                                <input type="text" className="input input-bordered w-full" value={EMP_LastName} onChange={(e) => setEMP_LastName(e.target.value)} required />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
                                <input type="date" className="input input-bordered w-full" value={EMP_DateOfBirth} onChange={(e) => setEMP_DateOfBirth(e.target.value)} required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Gender</label>
                                <select className="select select-bordered w-full" value={EMP_Gender} onChange={(e) => setEMP_Gender(e.target.value)} defaultValue="" required>
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        <hr className="m-5" />
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Hire Date</label>
                                <input type="date" className="input input-bordered w-full" value={EMP_HireDate} onChange={(e) => setEMP_HireDate(e.target.value)} required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                                <input type="text" className="input input-bordered w-full" value={EMP_Position} onChange={(e) => setEMP_Position(e.target.value)} required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                                <select className="select select-bordered w-full" defaultValue="" ref={departmentRef} required>
                                    <option value="">Select Department</option>
                                    {departments.map((dept) => (
                                        <option key={dept.DEP_DepartmentID} value={dept.DEP_DepartmentID}>{dept.DEP_DepartmentName}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Salary</label>
                                <input type="number" className="input input-bordered w-full" value={EMP_Salary} onChange={(e) => setEMP_Salary(e.target.value)} required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                                <input type="email" className="input input-bordered w-full" value={EMP_Email} onChange={(e) => setEMP_Email(e.target.value)} required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                                <input type="text" className="input input-bordered w-full" value={EMP_Phone} onChange={(e) => setEMP_Phone(e.target.value)} required />
                            </div>
                        </div>
                        <div className="mb-6">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                            <textarea className="input input-bordered w-full" value={EMP_Address} onChange={(e) => setEMP_Address(e.target.value)}></textarea>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                                <input type="text" className="input input-bordered w-full" value={EMP_City} onChange={(e) => setEMP_City(e.target.value)} required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                                <input type="text" className="input input-bordered w-full" value={EMP_State} onChange={(e) => setEMP_State(e.target.value)} required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Zipcode</label>
                                <input type="text" className="input input-bordered w-full" value={EMP_ZipCode} onChange={(e) => setEMP_ZipCode(e.target.value)} required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                                <input type="text" className="input input-bordered w-full" value={EMP_Country} onChange={(e) => setEMP_Country(e.target.value)} required />
                            </div>
                        </div>
                        <div className="modal-action flex justify-end">
                            <button type="submit" className="btn btn-primary">Save</button>
                            <button type="button" className="btn btn-secondary ml-2">Close</button>
                        </div>
                    </form>
                </div>
            </dialog>
            {/* ----------------------------------------------------------------------------------------------- */}
        </>
    )
}

export default EmpRegistationModal;
