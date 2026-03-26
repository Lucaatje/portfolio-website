import { Link } from "react-router-dom";
import resume from "../assets/resume.pdf"
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = ["home", "about", "projects", "experience"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6, 
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const links = [
    {
      id: "Home",
      name: "Home",
      path: "/",
    },
    {
      id: "about",
      name: "About",
      path: "/about",
    },
    {
      id: "Projects",
      name: "Projects",
      path: "/projects",
    },
    {
      id: "experience",
      name: "Experience",
      path: "/experience",
    }
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
              link.id.toLowerCase() === activeSection;

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

        <a
          href={resume}
          download
          className="border border-cyan-700 text-cyan-700 px-4 py-2 rounded hover:bg-cyan-700/10 transition"
        >
          Download Resume
        </a>

      </div>
    </nav>
  );
}