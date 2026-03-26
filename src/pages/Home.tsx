import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Page from "../Page";
import { About } from "./About";
import { Projects } from "./Projects";
import { Experience } from "./Experience";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.replace("/", "");

    if (path) {
      const el = document.getElementById(path);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0 });
    }
  }, [location]);

  return (
    <Page>
      <section id="home" className="min-h-screen flex justify-center items-center px-6 relative ">
        <div className="max-w-3xl -translate-y-16">
          <p className="text-cyan-700 mb-4 font-bold">
            Hello, my name is
          </p>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-100">
            Luca Thierrij
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-400 mt-2">
            Building projects and learning every day in tech.
          </h2>

          <p className="mt-6 text-slate-400 max-w-xl">
            I'm a third-year Computer Science student, exploring software development and the world of IT.
            At school and in my free time, I work on various projects and continuously aim to improve my skills.
          </p>

          <button
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="mt-8 border border-cyan-700 text-cyan-700 px-6 py-3 hover:bg-cyan-700/10 transition"
          >
            Learn more about me
          </button>
        </div>

        <div className="absolute bottom-50 flex flex-col items-center">
          <p className="text-slate-400 text-sm mb-2">Scroll down</p>
          <div className="flex flex-col gap-1">
            <span className="chevron"></span>
            <span className="chevron"></span>
            <span className="chevron"></span>
          </div>
        </div>
      </section>

      <About />
      <Projects />
      <Experience/>

    </Page>
  );
}