import { useNavigate } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import { CiBoxList } from "react-icons/ci";
import { IoIosLogOut,IoIosHome  } from "react-icons/io";
import Swal from 'sweetalert2';
const Navbar = () => {
    const navigate = useNavigate();
    const [StorageUsers] = useLocalStorage('userData', []);

    const Logout = () => {
        Swal.fire({
            title: "Are you sure you want to log out?",
            showCancelButton: true,
            confirmButtonText: "Yes"
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.clear();
                navigate("/");
            }
        });

    }
    return (
        <>
            <div className="navbar bg-base-100 bg-gray-300 overflow-visible">
                <div className="navbar-start">
                    <div className="dropdown relative">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <CiBoxList size={30} />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow">
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl hidden sm:flex">{StorageUsers[0].EMP_FirstName} {StorageUsers[0].EMP_LastName}</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">

                    </ul>

                </div>
                <div className="navbar-end">
                    <a className="btn mr-1" onClick={()=>navigate('/Home')}><IoIosHome size={25} /></a>
                    <a className="btn mr-1" onClick={Logout}><IoIosLogOut size={25} /></a>
                </div>
            </div>
        </>
    )
}
export default Navbar