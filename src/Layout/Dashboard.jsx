import { FaAd, FaCalendar, FaHome, FaList, FaShoppingCart } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
            {/* Dashboard side bar */}
            <div className="w-64 min-h-screen bg-[#D1A054]">
                <ul className="menu p-4">
                <li>
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
                        My Cart</NavLink>
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
                    </li>
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;