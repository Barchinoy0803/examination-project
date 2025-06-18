import { NavLink } from 'react-router-dom'
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoIosColorPalette } from "react-icons/io";

const Sidebar = () => {
    return (
        <div className='w-[300px] bg-[#427DC0] min-h-[100vh] h-full flex flex-col gap-3 text-white p-4'>
            <h1 className='mb-2 text-[24px]'>LOGOO</h1>
            <NavLink
                to='create-product'
                className={({ isActive }) =>
                    `flex gap-2 items-center text-[18px] px-3 py-2 rounded-md transition-all duration-200 ${isActive ? 'bg-white/20' : 'hover:bg-white/10'
                    }`
                }
            >
                <AiOutlineAppstoreAdd />
                <span>Create phone</span>
            </NavLink>

            <NavLink
                to='phones'
                className={({ isActive }) =>
                    `flex gap-2 items-center text-[18px] px-3 py-2 rounded-md transition-all duration-200 ${isActive ? 'bg-white/20' : 'hover:bg-white/10'
                    }`
                }
            >
                <MdOutlinePhoneAndroid />
                <span>Phones</span>
            </NavLink>

            <NavLink
                to='colors'
                className={({ isActive }) =>
                    `flex gap-2 items-center text-[18px] px-3 py-2 rounded-md transition-all duration-200 ${isActive ? 'bg-white/20' : 'hover:bg-white/10'
                    }`
                }
            >
                <IoIosColorPalette />
                <span>Colors</span>
            </NavLink>
        </div>

    )
}

export default Sidebar