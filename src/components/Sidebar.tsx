import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdDashboard } from "react-icons/md";
import { IoHomeOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import classNames from 'classnames';
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'

const Sidebar = () => {
    const [nav, setNav] = useState(false);
    const navigate = useNavigate();

    let menuItems: { icon: JSX.Element, text: string, path: string }[] = [];
    menuItems = [
        { icon: <MdDashboard size={25} className="mr-4" />, text: "Dashboard", path: "/Search" },
    ]

    const userMenuItems = [
        { icon: <IoHomeOutline size={25} className="mr-4" />, text: "Menu", path: "/Home" },
        { icon: <CiLogout size={25} className="mr-4" />, text: "Logout" },
    ];

    const handleLogout = () => {
        localStorage.clear();
        navigate("/");
    };

    return (
        <>
            <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4 shadow-sm">
                {/* Left side */}
                <div className="flex items-center">
                    <div onClick={() => setNav(!nav)} className="cursor-pointer">
                        <AiOutlineMenu size={30} />
                    </div>
                    <h1 className="text-2xl sm:text-2xl lg:text-2xl px-2">
                        <span className="font-bold">ITSS</span>
                    </h1>
                </div>
                {/* End side */}
                <div className="hidden sm:flex justify-end">
                    <Menu as="div" className="relative inline-block text-left">
                        <div>
                            <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                                {/* {StorageUsers[0].u_name} */}
                                <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                            </MenuButton>
                        </div>
                        <Transition
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                {menuItems.map(({ icon, text, path }, index) => (
                                    <MenuItem key={index}>
                                        {({ active }) => (
                                            <a
                                                href={path}
                                                className={classNames(
                                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                    'block px-4 py-2 text-sm'
                                                )}
                                                onClick={() => {
                                                    navigate(path);
                                                }}
                                            >
                                                {icon} {text}
                                            </a>
                                        )}
                                    </MenuItem>
                                ))}
                                <MenuItem>
                                    {({ active }) => (
                                        <button
                                            onClick={handleLogout}
                                            type="submit"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block w-full px-4 py-2 text-left text-sm',
                                            )}
                                        >
                                            Sign out
                                        </button>
                                    )}
                                </MenuItem>
                            </MenuItems>
                        </Transition>
                    </Menu>
                </div>

                {/* Mobile Menu */}
                {/* Overlay */}
                {nav ? (
                    <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
                ) : (
                    ""
                )}

                {/* Side drawer menu */}
                <div
                    className={
                        nav
                            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
                            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
                    }
                >
                    <AiOutlineClose
                        onClick={() => setNav(!nav)}
                        size={30}
                        className="absolute right-4 top-4 cursor-pointer"
                    />
                    <h2 className="text-2xl p-4">
                        <span className="font-bold">ITSS</span>
                    </h2>
                    <nav>
                        <ul className="flex flex-col p-4 text-gray-800">
                            <div id="export-menu">
                                {/* Export Menu */}
                                {menuItems.map(({ icon, text, path }, index) => (
                                    <div key={index} className="py-1">
                                        <li
                                            className="text-l flex cursor-pointer w-[100%] rounded-full mx-auto p-2 hover:text-white hover:bg-black"
                                            onClick={() => navigate(path)}
                                        >
                                            {icon} {text}
                                        </li>
                                    </div>
                                ))}
                            </div>
                            <hr />
                            {/* User Menu */}
                            {userMenuItems.map(({ icon, text, path }, index) => (
                                <div key={index} className="py-1">
                                    <li
                                        className="text-xl flex cursor-pointer w-[100%] rounded-full mx-auto p-2 hover:text-white hover:bg-black"
                                        onClick={() => {
                                            if (text === "Logout") {
                                                handleLogout();
                                            } else if (path) {
                                                navigate(path);
                                            }
                                        }}
                                    >
                                        {icon} {text}
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Sidebar
