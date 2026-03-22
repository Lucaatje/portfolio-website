import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-mist-700 shadow-md">
    
      <div className="flex gap-8 items-center">
        <Link to="/" className="hover:text-[#64ffda]">About</Link>
        <Link to="/projects" className="hover:text-[#64ffda]">Projects</Link>
        <Link to="/experience" className="hover:text-[#64ffda]">Experience</Link>
        <Link to="/contact" className="hover:text-[#64ffda]">Contact</Link>

        <button className="border border-[#64ffda] text-[#64ffda] px-4 py-2 rounded hover:bg-[#64ffda]/10">
          Resume
        </button>
      </div>
    </nav>
  );
}