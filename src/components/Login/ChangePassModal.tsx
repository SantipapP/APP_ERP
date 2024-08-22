import { useState } from "react"
import SHA256 from "crypto-js/sha256";
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import useLocalStorage from "../../hooks/useLocalStorage";
const ChangePassModal = () => {
    const navigate = useNavigate();
    const [NewPass, setNewPass] = useState('')
    const [ConfirmNewPass, setConfirmNewPass] = useState('')
    const [StorageUsers, setStorageUsers] = useLocalStorage('userData', []);

    const SubmitChangePass = async () => {
        // console.log(NewPass,ConfirmNewPass)

        if (NewPass == ConfirmNewPass) {
            const EMP_Password = SHA256(NewPass).toString();
            console.log(StorageUsers[0])
            // console.log(StorageUsers[0].EMP_ID,EMP_Password)
            try {
                const ResetPasswordResponse = await axios.post(
                    'http://localhost:5196/SystemControllers/UpdateEmp',
                    {
                        "EMP_ID": StorageUsers[0].EMP_ID,
                        "EMP_Password": EMP_Password,
                        "EMP_IsChangePass": "Y"
                    },
                    {
                        validateStatus: function (status) {
                            return status < 500;
                        }
                    }
                );
                if (ResetPasswordResponse.status == 200) {
                    // Update localStorage without overwriting other user data
                    const updatedUserData = StorageUsers.map(user =>
                        user.EMP_ID === StorageUsers[0].EMP_ID
                            ? { ...user, EMP_Password }
                            : user
                    );
                    setStorageUsers(updatedUserData);
                    closeModal()
                    Swal.fire({
                        icon: 'success',
                        title: 'Change password completed',
                        text: 'Page will reload',
                        showConfirmButton: false,
                        timer: 1000,
                    }).then(() => {
                        navigate('/Main')
                    });

                }

                console.log(ResetPasswordResponse.data)
            } catch (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'An unexpected error occurred. Please try again later.',
                });
                console.log(error)
            }
        } else {
            closeModal()
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter and confirm the new password to match.',
            });
            showModal()
        }
    }
    const closeModal = () => {
        const modal = document.getElementById('Change_Pass_Modal') as HTMLDialogElement;
        if (modal) {
            modal.close();
        }
    }
    const showModal = () => {
        const modal = document.getElementById('Change_Pass_Modal') as HTMLDialogElement;
        if (modal) {
            modal.show();
        }
    }
    return (
        <>
            <dialog id="Change_Pass_Modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Please change password</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">New password</label>
                            <input type="password" className="input input-bordered w-full" value={NewPass} onChange={(e) => setNewPass(e.target.value)} required />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Confirm password</label>
                            <input type="password" className="input input-bordered w-full" value={ConfirmNewPass} onChange={(e) => setConfirmNewPass(e.target.value)} required />
                        </div>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button type="button" className="btn btn-primary m-1" onClick={SubmitChangePass}>Change</button>
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}
export default ChangePassModal