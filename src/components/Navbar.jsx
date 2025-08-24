import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Mail } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored;
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    return prefersDark ? "dark" : "light";
  });

  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  // Hamburger Icon (SVG)
  const MenuIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );

  // Close Icon (SVG)
  const CloseIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-6 h-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );

  // Theme handling
  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") root.classList.add("dark");
    else root.classList.remove("dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Scroll shadow/background intensify
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 shadow-xl transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            onClick={() => navigate("/")}
            className="min-w-0 max-w-[60%] truncate text-xl sm:text-2xl font-bold tracking-wide text-white"
          >
            Nilaf <span className="bg-gradient-to-r from-yellow-300 via-amber-300 to-pink-300 bg-clip-text text-transparent">Portfolio</span>
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <motion.button
                  key={link.name}
                  onClick={() => navigate(link.path)}
                  aria-current={isActive ? "page" : undefined}
                  className={`font-medium relative group transition-colors ${
                    isActive ? "text-yellow-300" : "text-white/90 hover:text-white"
                  }`}
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 300 }}>
                  {link.name}
                  <span
                    className={`absolute left-0 -bottom-1 h-0.5 bg-yellow-300 transition-all duration-300 ${
                      isActive ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </motion.button>
              );
            })}

            {/* CTA */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => navigate("/contact")}
              className="hidden lg:inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-white font-semibold ring-1 ring-white/30 hover:bg_white/30"
            >
              <Mail className="h-4 w-4" /> Hire Me
            </motion.button>

            {/* Theme Toggle */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="hidden md:flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/25">
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>
          </div>

          {/* Mobile actions */}
          <div className="md:hidden flex items-center gap-2 shrink-0">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-white"
            >
              {isOpen ? CloseIcon : MenuIcon}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.94 }}
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/20 backdrop-blur hover:bg-white/25"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="md:hidden mt-1 origin-top rounded-b-2xl backdrop-blur bg-gradient-to-r from-indigo-600/95 to-purple-700/95 shadow-lg ring-1 ring-white/10"
          >
            <div className="grid gap-1 px-4 py-3">
              {navLinks.map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => {
                    navigate(link.path);
                    setIsOpen(false);
                  }}
                  whileHover={{ scale: 1.02 }}
                  className="block w-full text-left text-white py-2 font-medium rounded-md hover:bg-white/10"
                >
                  {link.name}
                </motion.button>
              ))}

              <motion.button
                whileHover={{ scale: 1.01 }}
                onClick={() => {
                  navigate("/contact");
                  setIsOpen(false);
                }}
                className="mt-2 w-full rounded-md bg-yellow-300 px-4 py-2 font-semibold text-gray-900 shadow hover:bg-yellow-500"
              >
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
