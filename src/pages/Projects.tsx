import cinemaproject from "../assets/cinemaproject.png";
import entityframework from "../assets/entityframework.png"
import agenda from "../assets/agenda.png"
import dodomanager from "../assets/dodomanager.png"

export function Projects() {
  const projects = [
    {
      title: "Cinema Console Application",
      description:
        "This was my first project during my first year of study, developed in a team of four. The application is built in C# and uses Microsoft SQL Server as an external database. Users can create an account, log in, browse available cinema screens, and reserve seats for specific movies. This project served as my introduction to C# and object-oriented programming, where I learned the fundamentals of working with classes, methods, and structured application design.",
      image: cinemaproject,
      github: "https://github.com/Lucaatje/Cinema-Reservation-System",
      tags: ["C#", "Microsoft SQL Server"]
    },
    {
      title: "CargoHub Warehouse Management API",
      description: "A second-year group project where we transformed an existing Python codebase into a scalable and maintainable API using C# and ASP.NET Core. The project focused on improving architecture, implementing Entity Framework Core, and ensuring reliability through unit and integration testing. I contributed to API design, endpoint development, and enhancing code quality and security.",
      image: entityframework,
      github: "https://github.com/Lucaatje/CargoHub-API",
      tags: ["C#", "ASP.NET Core", "Entity Framework", "Python", "SQLite"],
    },
    {
      title: "Agenda App for Disabled People",
      description: "A project developed for a real client, Sogeti in Utrecht, where we were challenged to create an innovative solution for people with disabilities. We built a mobile application using React Native and TypeScript designed to support people with dementia or memory difficulties. The app focuses on helping users manage their daily agenda in a simple and accessible way. Through this project, I gained experience in mobile development, user-centered design, and collaborating with a real stakeholder.",
      image: agenda,
      github: "https://github.com/Lucaatje/Agenda-App",
      tags: ["Typescript", "React Native"]
    },
    {
      title: "Dodo Manager",
      description: "A first-year elective project where I developed a web application using Python and Django. The platform allows users to manage 'dodos' and includes an authentication system for account registration and login. Through this project, I gained experience with Django’s MVC structure, database models, and building dynamic web applications.",
      image: dodomanager,
      github: "https://github.com/Lucaatje/DodoManager",
      tags: ["Python", "Django", "HTML"]
    }
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex flex-col items-center px-6 py-20"
    >
      <h2 className="text-3xl font-bold text-slate-400 mb-12">
        Projects
      </h2>

      <div className="w-full max-w-4xl mx-auto flex flex-col gap-12">
        {projects.map((project, index) => (
          <a
            key={index}
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col sm:flex-row items-start gap-8 group 
                       hover:bg-slate-800/40 p-4 rounded-lg transition"
          >
            <div className="w-40 h-28 rounded-md overflow-hidden border border-slate-600 shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            <div className="flex flex-col flex-1">
              <h3 className="text-xl font-semibold text-slate-200 group-hover:text-cyan-400 transition">
                {project.title}
              </h3>

              <p className="text-slate-400 text-base mt-2 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold text-cyan-700 bg-cyan-900/20 px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}