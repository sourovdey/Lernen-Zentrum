import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/Lernen_Zentrum_logo.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Community", path: "/community" },
    { name: "Courses", path: "/courses" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="font-poppins sticky top-0 z-40 border-b border-gray-300 bg-slate-50/70 backdrop-blur-md transition-colors duration-500">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Left Side - Logo */}
          <div className="shrink-0">
            <NavLink to="/" className="flex items-center">
              <img src={logo} alt="Lernen Zentrum Logo" className="h-8 w-auto" />
            </NavLink>
          </div>

          {/* Right Side - Menu + Buttons */}
          <div className="flex items-center space-x-4">

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-4">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `rounded-md px-3 py-2 text-sm font-medium hover:bg-gray-200 ${isActive ? "bg-gray-200" : ""}`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Login Button */}
            <NavLink
              to="/memberships"
              className="hidden lg:block bg-slate-900 text-white text-sm px-4 py-2 rounded-full"
            >
              Become a Member
            </NavLink>

            {/* Mobile Menu Button */}
<button
  className="lg:hidden flex flex-col justify-center items-center w-8 h-8 relative group"
  onClick={() => setMenuOpen(!menuOpen)}
  aria-label="Toggle Menu"
>
  {/* Line 1 */}
  <span
    className={`block h-0.5 w-6 bg-gray-500 transform transition duration-300 ease-in-out ${
      menuOpen ? "rotate-45 translate-y-2" : ""
    }`}
  ></span>
  {/* Line 2 */}
  <span
    className={`block h-0.5 w-6 bg-gray-500 my-1 transition-opacity duration-300 ease-in-out ${
      menuOpen ? "opacity-0" : "opacity-100"
    }`}
  ></span>
  {/* Line 3 */}
  <span
    className={`block h-0.5 w-6 bg-gray-500 transform transition duration-300 ease-in-out ${
      menuOpen ? "-rotate-45 -translate-y-2" : ""
    }`}
  ></span>
</button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-2 space-y-2 pb-4">

            {/* Menu Items */}
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-200 ${isActive ? "bg-gray-200" : ""}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}

            {/* Join Our Community Button */}
            <div className="mt-2 border-t border-gray-300 pt-4 flex justify-center">
              <NavLink
                to="/memberships"
                className="bg-slate-900 text-white text-sm px-4 py-2 rounded-full"
                onClick={() => setMenuOpen(false)}
              >
                Become a Member
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}