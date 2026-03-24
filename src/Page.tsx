import { MdEmail } from "react-icons/md";
import Navbar from "./components/Navbar";
import { FaLinkedin, FaGithub } from "react-icons/fa";

type Props = { children: React.ReactNode };

export default function Page({ children }: Props) {
  return (
    <div className="min-h-screen bg-[#0a192f] text-slate-300 relative">
      <Navbar />

      <div className="fixed top-0 left-8 flex flex-col items-center h-screen z-10 pointer-events-none">
        <div className="w-px bg-slate-400 h-1/3 animate-pulse-lines pointer-events-none mt-30"></div>

    
        <div className="flex flex-col items-center gap-6 pointer-events-auto mt-6">
          <a href="https://www.linkedin.com/in/lucathierrij/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-slate-400 w-6 h-6 hover:text-cyan-700 transition-colors" />
          </a>
          <a href="https://github.com/Lucaatje" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-slate-400 w-6 h-6 hover:text-cyan-700 transition-colors" />
          </a>
          <a href="mailto:luca.thierry.2004@hotmail.com">
            <MdEmail className="text-slate-400 w-6 h-6 hover:text-cyan-700 transition-colors" />
          </a>
        </div>

        <div className="w-px bg-slate-400 h-1/3 animate-pulse-lines pointer-events-none mt-6"></div>
      </div>

      <div className="fixed top-0 right-8 flex flex-col items-center h-screen z-10 pointer-events-none">
        <div className="w-px bg-slate-400 h-1/3 animate-pulse-lines pointer-events-none mt-30"></div>
        <div className="flex flex-col items-center gap-6 pointer-events-auto mt-6">
          <a href="https://www.linkedin.com/in/lucathierrij/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-slate-400 w-6 h-6 hover:text-cyan-700 transition-colors" />
          </a>
          <a href="https://github.com/Lucaatje" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-slate-400 w-6 h-6 hover:text-cyan-700 transition-colors" />
          </a>
          <a href="mailto:luca.thierry.2004@hotmail.com">
            <MdEmail className="text-slate-400 w-6 h-6 hover:text-cyan-700 transition-colors" />
          </a>
        </div>
        <div className="w-px bg-slate-400 h-1/3 animate-pulse-lines pointer-events-none mt-6"></div>
      </div>

      <main className="relative z-0">{children}</main>
    </div>
  );
}