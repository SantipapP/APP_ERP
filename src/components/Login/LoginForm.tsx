import { useState } from "react"
import SHA256 from "crypto-js/sha256";
import Swal from 'sweetalert2';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ChangePassModal from "./ChangePassModal";
const LoginForm = () => {
    const navigate = useNavigate();
    const [EMP_ID, setEMP_ID] = useState('')
    const [EMP_PASSWORD, setEMP_PASSWORD] = useState('')
    const [loading, setLoading] = useState(false);

    const SubmitLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setLoading(true); // เริ่มการโหลด

        const SHA256PASSWORD = SHA256(EMP_PASSWORD).toString();
        console.log(EMP_ID, EMP_PASSWORD, SHA256PASSWORD);

        try {
            const AuthLoginResponse = await axios.post('http://localhost:5196/SystemControllers/AuthLogin',
                {
                    "EMP_ID": EMP_ID,
                    "EMP_Password": SHA256PASSWORD
                }, {
                validateStatus: function (status) {
                    return status < 500; // จะไม่ throw error สำหรับ status ที่มากกว่าหรือเท่ากับ 500
                }
            });

            console.log(AuthLoginResponse.data)
            // console.log(AuthLoginResponse.status, AuthLoginResponse.data);
            if (AuthLoginResponse.status === 200) {
                localStorage.setItem('userData', JSON.stringify(AuthLoginResponse.data));
                if (AuthLoginResponse.data[0]['EMP_IsChangePass'] == "N") {
                    Swal.fire({
                        title: "Login successful. You need to change your password to proceed.",
                        showCancelButton: true,
                        confirmButtonText: "Yes"
                    }).then((result) => {
                        if (result.isConfirmed) {
                            OperModal("Change_Pass_Modal")
                        }
                    });
                } else {
                    Swal.fire({
                        icon: 'success',
                        title: 'Login completed',
                        text: 'Please wait a moment to proceed to the next page',
                        showConfirmButton: false,
                        timer: 1000,
                    }).then(() => {
                        navigate('/Main')
                    });
                }
            } else if (AuthLoginResponse.status === 404) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'An error occurred during login. Please try again later.',
                });
            }

        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'An unexpected error occurred. Please try again later.',
            });
        } finally {
            setLoading(false); // สิ้นสุดการโหลด
        }
    }

    const OperModal = (modalId: string) => {
        const modal = document.getElementById(modalId) as HTMLDialogElement | null;
        if (modal) {
            modal.showModal();
        }
    };
    return (
        <>
            <ChangePassModal />
            <div className="flex bg-white rounded-lg shadow-lg border overflow-hidden max-w-sm lg:max-w-4xl w-full animate-fade-up">
                <div
                    className="hidden md:block lg:w-1/2 bg-cover bg-blue-700"
                    style={{
                        backgroundImage: `url(/images/81070.jpg)`,
                    }}
                ></div>
                <div className="w-full p-8 lg:w-1/2">
                    <form onSubmit={SubmitLogin}>
                        <p className="text-xl text-gray-600 text-center">Welcome back!</p>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Email Address
                            </label>
                            <input
                                className="text-white-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                type="text"
                                value={EMP_ID} onChange={(e) => setEMP_ID(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mt-4 flex flex-col justify-between">
                            <label className="block text-gray-700 text-sm font-bold mb-2">
                                Password
                            </label>
                            <input
                                className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-2 focus:outline-blue-700"
                                type="password"
                                value={EMP_PASSWORD} onChange={(e) => setEMP_PASSWORD(e.target.value)}
                            />
                        </div>
                        <div className="mt-8">
                            <button
                                className={`mt-1 bg-blue-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                                type="submit"
                                disabled={loading} // ปิดใช้งานปุ่มเมื่อกำลังโหลด
                            >
                                {loading ? 'Loading...' : 'Login'}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default LoginForm