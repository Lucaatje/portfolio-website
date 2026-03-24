import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const links = [
    {
      id: "Home",
      name: "Home",
      path: "/",
    },
    {
      id: "Projects",
      name: "Projects",
      path: "/projects",
    },
    {
      id: "Experience",
      name: "Experience",
      path: "/experience",
    },
    {
      id: "Contact",
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#0a192f]/70 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        
        <div className="flex gap-20 items-center text-lg font-medium">
          <Link to="/" className="flex items-center justify-center w-10 h-10 bg-cyan-700 text-[#0a192f] font-bold rounded-md hover:bg-cyan-600 transition">
            LT
          </Link>

          {links.map((link) => {
            const isActive =
              link.path === "/"
                ? location.pathname === "/"
                : location.pathname.startsWith(link.path);

            return (
              <Link
                key={link.id}
                to={link.path}
                className={`px-3 py-1 rounded-full transition ${
                  isActive
                    ? "text-cyan-700 font-bold"
                    : "hover:bg-cyan-700/10 hover:text-cyan-700"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <button className="border border-cyan-700 text-cyan-700 px-4 py-2 rounded hover:bg-cyan-700/10 transition">
          Download Resume
        </button>

      </div>
    </nav>
  );
}