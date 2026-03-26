export function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen flex flex-col items-center px-6 py-20"
    >
      <h2 className="text-3xl font-bold text-slate-400 mb-12">
        Experience
      </h2>

      <div className="w-full max-w-4xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col sm:flex-row items-start gap-6 group">
          
          <div className="text-sm text-slate-500 min-w-35">
            Sep 2025 — Feb 2026
          </div>

          <div className="flex flex-col flex-1">
            <h3 className="text-xl font-semibold text-slate-200 group-hover:text-cyan-400 transition">
              Full Stack Web Developer Intern
            </h3>

            <p className="text-slate-400 text-sm mt-1">
              360Fabriek — Rotterdam
            </p>

            <p className="text-slate-400 text-base mt-3 leading-relaxed max-w-2xl">
              During my 6-month internship at 360Fabriek, an innovative and immersive
              studio in Rotterdam, I worked as a full stack web developer on an internal
              web platform used by real clients. The platform was designed for managing
              and organizing 3D models.
              
              I contributed to both the frontend and backend using React with TypeScript
              and NestJS. My work included building user interfaces, developing API
              endpoints, and improving overall application structure. During this
              internship, I also learned and applied Tailwind CSS for styling, which
              allowed me to build modern and responsive user interfaces efficiently.
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {["React", "TypeScript", "NestJS"].map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs font-semibold text-cyan-700 bg-cyan-900/20 px-2 py-1 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}