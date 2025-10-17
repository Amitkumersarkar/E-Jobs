import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/youthLogo.png";
const Navbar = () => {

    const navLinks = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-cyan-600 font-semibold" : "hover:text-cyan-500"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        isActive ? "text-cyan-600 font-semibold" : "hover:text-cyan-500"
                    }
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/add-job"
                    className={({ isActive }) =>
                        isActive ? "text-cyan-600 font-semibold" : "hover:text-cyan-500"
                    }
                >
                    Add Job
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/myApplications"
                    className={({ isActive }) =>
                        isActive ? "text-cyan-600 font-semibold" : "hover:text-cyan-500"
                    }
                >
                    My Applications
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/statistic"
                    className={({ isActive }) =>
                        isActive ? "text-cyan-600 font-semibold" : "hover:text-cyan-500"
                    }
                >
                    Statistics
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        isActive ? "text-cyan-600 font-semibold" : "hover:text-cyan-500"
                    }
                >
                    Contact
                </NavLink>
            </li>
        </>
    );

    return (
        <div className="bg-white shadow-md sticky top-0 z-50">
            <div className="navbar max-w-6xl mx-auto px-4 py-2">
                {/*  Left: Brand  */}
                <div className="navbar-start">
                    <Link
                        to="/"
                        className="text-2xl font-bold text-cyan-600 tracking-wide hover:text-cyan-700 transition"
                    >
                        <img src={logo} alt="Youth Logo"
                            className="h-10 sm:h-12 object-contain" />

                    </Link>

                    {/* Mobile Dropdown */}
                    <div className="dropdown lg:hidden ml-3">
                        <div tabIndex={0} role="button" className="btn btn-ghost p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6 text-cyan-600"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-white rounded-xl mt-3 w-52 p-2 shadow-md border border-gray-100"
                        >
                            {navLinks}
                        </ul>
                    </div>
                </div>

                {/*  Center (Desktop Menu)  */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-3">{navLinks}</ul>
                </div>

                {/* Right (Button)  */}
                <div className="navbar-end">
                    <Link
                        to="/sign-in"
                        className="btn btn-primary rounded-full px-5 text-sm sm:text-base hover:bg-cyan-700 transition"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
