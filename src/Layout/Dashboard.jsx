import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";


const Dashboard = () => {
    const [cart] = useCart();

    const [isAdmin]=useAdmin();
    return (
        <div className="flex">
            {/* Dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4">
                  {
                    isAdmin ? <>                <li>
                    <NavLink to="/dashboard/adminHome" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-medium " : "font-medium"
                        }>
                        <FaHome></FaHome>
                        Admin Home</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/addItems" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-medium " : "font-medium"
                        }>
                        <FaUtensils></FaUtensils>
                        Add Items</NavLink>
                </li>
                <li><NavLink to='/dashboard/manageItems' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-medium " : "font-medium"
                        }>
                    <FaList></FaList>
                    Manage Items</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/bookings" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-medium " : "font-medium"
                        }>
                        <FaBook></FaBook>
                        Manage Bookings</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/users" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-medium " : "font-medium"
                        }>
                        <FaUsers></FaUsers>
                        All Users</NavLink>
                </li></>
                    :
                    <>                <li>
                    <NavLink to="/dashboard/userHome" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-medium " : "font-medium"
                        }>
                        <FaHome></FaHome>
                        User Home</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/reservation" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-medium " : "font-medium"
                        }>
                        <FaCalendar></FaCalendar>
                        Reservation</NavLink>
                </li>
                <li><NavLink to='/dashboard/cart' className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-medium " : "font-medium"
                        }>
                    <FaShoppingCart></FaShoppingCart>
                    My Cart ({cart.length})</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/review" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-medium " : "font-medium"
                        }>
                        <FaAd></FaAd>
                        Add a Review</NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard/bookings" className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-white font-medium " : "font-medium"
                        }>
                        <FaList></FaList>
                        My Bookings</NavLink>
                </li></>
                  }
                    {/* shared nav link */}
                    <div className="border-t border-white"></div>
                    <li>
                        <NavLink to="/" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white font-medium " : "font-medium"
                            }>
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/salad" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white font-medium " : "font-medium"
                            }>
                            <FaSearch></FaSearch>
                            Menu</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order/contact" className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-white font-medium " : "font-medium"
                            }>
                            <FaEnvelope></FaEnvelope>
                            Contact</NavLink>
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;