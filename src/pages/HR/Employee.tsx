import EmployeeTable from "../../components/HR/EmployeeTable"
import HRModal from "../../components/HR/HRModal"
import Navbar from "../../components/Navbar"

const Employee = () => {

    const EmployeeFormModal = () => {
        const modal = document.getElementById('Employee_Form_Modal') as HTMLDialogElement | null;
        if (modal) {
          modal.showModal();
        }
    };

    return (
        <>
            <Navbar />
            <div className="bg-gray-100 min-h-screen flex flex-col items-center p-5">
                <div className="flex w-full justify-end">
                    <HRModal/>
                    <button className="btn btn-primary" onClick={EmployeeFormModal}>Add Employee</button>
                </div>
                <div className="bg-white w-full p-5 m-5 rounded-lg shadow-lg transition">
                    <EmployeeTable />
                </div>
            </div>
        </>
    )
}
export default Employee