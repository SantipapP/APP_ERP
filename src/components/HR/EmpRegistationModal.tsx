const EmpRegistationModal = () => {
    return (
        <>
            {/*------------------------ Employee registation form modal-------------------------------------- */}
            <dialog id="Employee_Form_Modal" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg">Employee Registration Form</h3>
                    <form method="post">
                        <div className="flex m-5">
                            <div className="flex-1 m-2">
                                <label className="flex items-center gap-2">
                                    ID
                                    <input type="text" className="input input-bordered grow" required />
                                </label>
                            </div>
                            <div className="flex-1 m-2">
                                <label className="flex items-center gap-2">
                                    First Name
                                    <input type="text" className="input input-bordered grow" required />
                                </label>
                            </div>
                            <div className="flex-1 m-2">
                                <label className="flex items-center gap-2">
                                    Last Name
                                    <input type="text" className="input input-bordered grow" required />
                                </label>
                            </div>
                        </div>
                        <div className="flex m-5">
                            <div className="flex-1 m-2">
                                <label className="flex items-center gap-2">
                                    Date of Birth
                                    <input type="date" className="input input-bordered grow" required />
                                </label>
                            </div>
                            <div className="flex-1 m-2">
                                <label className="flex items-center gap-2">
                                    Gender
                                    <select className="select select-bordered w-auto max-w-xs" required>
                                        <option value="" disabled selected>Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className="flex m-5">
                            <div className="flex-1 m-2">
                                <label className="flex items-center gap-2">
                                    Hire Date
                                    <input type="date" className="input input-bordered grow" required />
                                </label>
                            </div>
                            <div className="flex-1 m-2">
                                <label className="flex items-center gap-2">
                                    Department
                                    <select className="select select-bordered w-auto max-w-xs" required>
                                        <option value="" disabled selected>Select Department</option>
                                    </select>
                                </label>
                            </div>
                            <div className="flex-1 m-2">
                                <label className="flex items-center gap-2">
                                    Position
                                    <input type="text" className="input input-bordered grow" required />
                                </label>
                            </div>
                        </div>
                        <div className="flex m-5">
                            <div className="flex-1 m-2">
                                <label className="flex items-center gap-2">
                                    Salary
                                    <input type="number" className="input input-bordered grow" required />
                                </label>
                            </div>
                            <div className="flex-1 m-2">
                                <label className="flex items-center gap-2">
                                    E-mail
                                    <input type="email" className="input input-bordered grow" required />
                                </label>
                            </div>
                            <div className="flex-1 m-2">
                                <label className="flex items-center gap-2">
                                    Phone
                                    <input type="text" className="input input-bordered grow" required />
                                </label>
                            </div>
                        </div>
                        <div className="modal-action">
                            <button type="submit" className="btn btn-primary">Save</button>
                            <button type="button" className="btn">Close</button>                        
                        </div>
                    </form>
                </div>
            </dialog>

            {/* ----------------------------------------------------------------------------------------------- */}
        </>
    )
}
export default EmpRegistationModal