import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [cart] = useCart();
    // console.log(user?.email)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const navlink = <div className="flex flex-col  md:flex-row lg:flex-row justify-center items-center">
        <li><Link className="font-semibold text-base" to="/">Home</Link> </li>
        <li><Link className="font-semibold text-base" to="/contact">Contact us</Link> </li>
        <li><Link className="font-semibold text-base" to="/dashboard">Dashboard</Link> </li>
        <li><Link className="font-semibold text-base" to="/menu">Our Menu</Link> </li>
        <li><Link className="font-semibold text-base" to="/order/salad">Order Food</Link> </li>
        {
            // user ? 'true': 'false'
            // user ? condition ? 'double true' : 'one true' : 'false' 
        }
        {
            user && isAdmin && <li><Link to="/dashboard/adminHome">Dashboard</Link></li>
        }
        {
            user && !isAdmin && <li><Link to="/dashboard/userHome">Dashboard</Link></li>
        }
        <li>
            <Link to='/dashboard/cart'>
                <button className="btn">
                <FaShoppingCart className="mr-2"></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart.length}</div>
                </button>
            </Link>
        </li>

        {
            user ? <>
                {/* <span>{user?.displayName}</span>
            <img className="h-6 w-6 rounded-full" src={user?.photoURL} alt="" /> */}
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link className="font-semibold text-base" to="/login">Login</Link> </li>
            </>
        }


    </div>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 bg-black text-white max-w-screen-xl mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navlink}
                    </ul>
                </div>
                <div className="flex flex-col">
                    <p>BISTRO BOSS</p>
                    <p className="uppercase">Restaurant</p>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlink}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="">Sign out</button>
            </div>
        </div>
    );
};

export default Navbar;