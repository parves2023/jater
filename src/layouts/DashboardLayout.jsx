import { Outlet, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from 'react';
import Logo from '../assets/logo.png';
import { FiHome, FiUser, FiSettings, FiCreditCard, FiLogOut } from 'react-icons/fi';

export default function DashboardLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const [showSettingsSubmenu, setShowSettingsSubmenu] = useState(false);
  const submenuRef = useRef(null);
  const isSettingsActive = location.pathname.startsWith("/dashboard/settings");

  // Auto-close submenu when navigating to other routes
  useEffect(() => {
    if (!location.pathname.startsWith("/dashboard/settings")) {
      setShowSettingsSubmenu(false);
    }
  }, [location.pathname]);

  const navLinkBaseClass = "flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200";
  const iconClass = (isActive) => isActive ? "text-white" : "text-black";
  const linkClass = (isActive) =>
    `${navLinkBaseClass} ${isActive ? "bg-green-700 text-white" : "hover:bg-green-100 text-black"}`;

  // Settings click toggles submenu and navigates
  const handleSettingsClick = () => {
    navigate("/dashboard/settings");
    setShowSettingsSubmenu(prev => !prev);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 w-64 h-screen bg-white shadow-lg flex flex-col z-50 overflow-y-auto">
        <div className="p-6">
          <div className="text-xl font-bold mb-6">
            <img className="mx-auto w-24 h-auto" src={Logo} alt="timber logo" />
          </div>

          <nav className="flex flex-col gap-2 relative">
            {/* Dashboard */}
            <NavLink to="/dashboard/statistics" className={({ isActive }) => linkClass(isActive)}>
              {({ isActive }) => (
                <>
                  <FiHome className={`${iconClass(isActive)} text-lg`} />
                  <span>Dashboard</span>
                </>
              )}
            </NavLink>

            {/* User Info */}
            <NavLink to="/dashboard/user-info" className={({ isActive }) => linkClass(isActive)}>
              {({ isActive }) => (
                <>
                  <FiUser className={`${iconClass(isActive)} text-lg`} />
                  <span>User Information</span>
                </>
              )}
            </NavLink>

            {/* Subscription */}
            <NavLink to="/dashboard/subscription" className={({ isActive }) => linkClass(isActive)}>
              {({ isActive }) => (
                <>
                  <FiCreditCard className={`${iconClass(isActive)} text-lg`} />
                  <span>Subscription</span>
                </>
              )}
            </NavLink>

            {/* Settings - opens submenu */}
<button
  onClick={handleSettingsClick}
  className={`${navLinkBaseClass} ${isSettingsActive ? "bg-green-700 text-white" : "hover:bg-green-100 text-black"}`}
>
  <FiSettings className="text-lg" />
  <span>Settings</span>
</button>

            {/* Submenu below Settings */}
         {showSettingsSubmenu && (
  <div ref={submenuRef} className="ml-8 mt-1 flex flex-col gap-1 text-sm">
<NavLink
  to="/dashboard/settings"
  end
  className={({ isActive }) =>
    `px-3 py-1 rounded ${isActive ? "bg-green-200 text-green-900 font-semibold" : "hover:bg-green-100"}`
  }
>
  Profile
</NavLink>

    <NavLink
      to="/dashboard/settings/terms"
      className={({ isActive }) =>
        `px-3 py-1 rounded ${isActive ? "bg-green-200 text-green-900 font-semibold" : "hover:bg-green-100"}`
      }
    >
      Terms & Conditions
    </NavLink>
    <NavLink
      to="/dashboard/settings/privacy"
      className={({ isActive }) =>
        `px-3 py-1 rounded ${isActive ? "bg-green-200 text-green-900 font-semibold" : "hover:bg-green-100"}`
      }
    >
      Privacy Policy
    </NavLink>
  </div>
)}

          </nav>
        </div>

        {/* Logout Button */}
        <div className="mt-auto p-6 border-t border-gray-200">
          <button
            className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-md text-black hover:bg-red-100 hover:text-red-600 transition-all"
            onClick={() => console.log("Logout clicked")}
          >
            <FiLogOut className="text-xl" />
            <span className='font-bold'>Logout</span>
          </button>
        </div>
      </aside>

      {/* Main content */}
      <main className="flex-1 ml-64 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
}
