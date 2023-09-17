import { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

function MobileNavbar() {
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    // Function to toggle the hamburger menu
    const toggleHamburgerMenu = () => {
        setIsHamburgerOpen(!isHamburgerOpen);
    };

    return (
        <>
            <div className="lg:hidden p-8 flex items-center justify-between">
                <h2 className="text-3xl font-bold text-sky-800">LMSEDU</h2>
                <HiMenu
                    onClick={toggleHamburgerMenu}
                    className="text-3xl cursor-pointer"
                />
                <AnimatePresence>
                    {isHamburgerOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: -50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{duration: 0.3}}
                            className="absolute top-20 bg-white p-4 shadow-lg w-11/12 h-11/12 z-50 flex flex-col justify-between rounded-lg"
                        >
                            <ul className="text-2xl text-sky-900 p-4 mx-3 transition ease-in">
                                <li className="my-4 p-4 hover:scale-105 hover:bg-slate-200 border-b transition-all ease-in rounded-lg">Dasboard</li>
                                <li className="my-4 p-4 hover:scale-105 hover:bg-slate-200 border-b transition-all ease-in rounded-lg">Messages</li>
                                <li className="my-4 p-4 hover:scale-105 hover:bg-slate-200 border-b transition-all ease-in rounded-lg">Grades</li>
                                <li className="my-4 p-4 hover:scale-105 hover:bg-slate-200 border-b transition-all ease-in rounded-lg">Attendance</li>
                                <li className="my-4 p-4 hover:scale-105 hover:bg-slate-200 border-b transition-all ease-in rounded-lg">Schedule</li>
                                <li className="my-4 p-4 hover:scale-105 hover:bg-slate-200 border-b transition-all ease-in rounded-lg">Events</li>
                                <li className="my-4 p-4 ">MOOC's</li>
                                {/* Add more menu items as needed */}
                            </ul>
                            <div className="text-2xl text-sky-900 p-4 mx-3">
                                <h2 className="my-4 p-4 hover:scale-105 hover:bg-slate-200 border-b transition-all ease-in rounded-lg" >Profile</h2>
                                <h2 className="my-4 p-4 hover:scale-105 hover:bg-red-600 hover:text-white  text-red-600 font-semibold transition-all ease-in rounded-lg">Logout</h2>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    )
}


export default MobileNavbar;
