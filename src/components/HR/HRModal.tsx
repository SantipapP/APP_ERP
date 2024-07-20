const HRModal = () => {
    return (
        <>
            {/*------------------------ Employee registation form modal-------------------------------------- */}
            <dialog id="Employee_Form_Modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box w-full max-w-3xl">
                    <h3 className="font-bold text-lg">Empolyee registation form</h3>
                    <form method="dialog">
                        <div className="flex space-x-4">
                            <div className="flex-1">
                                <label htmlFor="first_name" className="input input-bordered w-full max-w-xs">ชื่อ</label>
                                <input type="text" id="first_name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="last_name" className="input input-bordered w-full max-w-xs">นามสกุล</label>
                                <input type="text" id="last_name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
                            </div>
                            <div className="flex-1">
                                <label htmlFor="gender" className="block text-sm font-medium text-gray-700">เพศ</label>
                                <select name="" id="" className="select select-bordered w-full max-w-xs">
                                    <option value="">Male</option>
                                    <option value="">female</option>
                                </select>
                            </div>
                        </div>
                        <div className="modal-action">
                            <button type="submit" className="btn btn-primary">บันทึก</button>
                            <button className="btn">Close</button>
                        </div>
                    </form>
                </div>
            </dialog>
            {/* ----------------------------------------------------------------------------------------------- */}
        </>
    )
}
export default HRModal