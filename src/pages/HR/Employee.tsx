import EmployeeTable from "../../components/HR/EmployeeTable"
import EmpRegistationModal from "../../components/HR/EmpRegistationModal"
import Navbar from "../../components/Navbar"
import { FaPlus } from "react-icons/fa";
const Employee = () => {



    const OperModal = (modalId: string) => () => {
        const modal = document.getElementById(modalId) as HTMLDialogElement | null;
        if (modal) {
            modal.showModal();
        }
    };

    return (
        <>
            <Navbar />
            <div className="bg-gray-100 min-h-screen flex flex-col items-center p-5">
                <div className="flex w-full justify-end">
                    <EmpRegistationModal />
                    <button className="btn btn-primary" onClick={OperModal('Employee_Form_Modal')}>
                        <FaPlus />
                    </button>
                </div>
                <div className="bg-white w-full p-5 m-5 rounded-lg shadow-lg transition">
                    <EmployeeTable />
                </div>
            </div>
        </>
    )
}
export default Employee