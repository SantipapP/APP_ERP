import DepartmentForm from "../../components/HR/DepartmentForm"
import DepartmentTable from "../../components/HR/DepartmentTable"
import Navbar from "../../components/Navbar"

const Department = () => {
    return (
        <>
            <Navbar />
            <div className="bg-white w-full p-5 m-5 rounded-lg shadow-lg transition">
                <DepartmentForm />
            </div>
            <div className="bg-white w-full p-5 m-5 rounded-lg shadow-lg transition">
                <DepartmentTable />
            </div>
        </>
    )
}
export default Department