import { Outlet, NavLink } from 'react-router-dom';
import Logo from '../assets/logo.png';
import { FiHome, FiUser, FiSettings, FiCreditCard, FiLogOut } from 'react-icons/fi';
import profile from '../assets/profile.png';

export default function DashboardLayout() {
  const navLinkBaseClass = "flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200";
  const iconClass = (isActive) => isActive ? "text-white" : "text-black";
  const linkClass = (isActive) =>
    `${navLinkBaseClass} ${isActive ? "bg-green-700 text-white" : "hover:bg-green-100 text-black"}`;

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Fixed Sidebar */}
      <aside className="fixed left-0 top-0 w-64 h-screen bg-white shadow-lg flex flex-col z-50 overflow-y-auto">
        <div className="p-6">
          <div className="text-xl font-bold mb-6">
            <img className="mx-auto w-24 h-auto" src={Logo} alt="timber logo" />
          </div>

          <nav className="flex flex-col gap-2">
            <NavLink to="/dashboard/statistics" className={({ isActive }) => linkClass(isActive)}>
              {({ isActive }) => (
                <>
                  <FiHome className={`${iconClass(isActive)} text-lg`} />
                  <span>Dashboard</span>
                </>
              )}
            </NavLink>

            <NavLink to="/dashboard/user-info" className={({ isActive }) => linkClass(isActive)}>
              {({ isActive }) => (
                <>
                  <FiUser className={`${iconClass(isActive)} text-lg`} />
                  <span>User Information</span>
                </>
              )}
            </NavLink>

            <NavLink to="/dashboard/subscription" className={({ isActive }) => linkClass(isActive)}>
              {({ isActive }) => (
                <>
                  <FiCreditCard className={`${iconClass(isActive)} text-lg`} />
                  <span>Subscription</span>
                </>
              )}
            </NavLink>

            <NavLink to="/dashboard/settings" className={({ isActive }) => linkClass(isActive)}>
              {({ isActive }) => (
                <>
                  <FiSettings className={`${iconClass(isActive)} text-lg`} />
                  <span>Settings</span>
                </>
              )}
            </NavLink>
          </nav>
        </div>

        {/* Logout Button - Fixed at bottom of sidebar */}
        <div className="mt-auto p-6 border-t border-gray-200">
          <button
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md text-black hover:bg-red-100 hover:text-red-600 transition-all"
            onClick={() => console.log("Logout clicked")} // Replace with your logout logic
          >
            <FiLogOut className="text-xl" />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main content with left margin to account for fixed sidebar */}
      <main className="flex-1 ml-64 min-h-screen">
        <div className="">
          <Outlet />
        </div>
      </main>
    </div>
  );
}