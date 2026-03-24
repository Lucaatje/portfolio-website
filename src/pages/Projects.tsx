import Page from "../Page";
import cinemaproject from "../assets/cinemaproject.png"

export function Projects() {
  const projects = [
    {
      title: "Cinema Console Application",
      description: "This was my first project during my first year of my study, developed in a team of four. The application is built in C# and uses Microsoft SQL Server as an external database. Users can create an account, log in, browse available cinema screens, and reserve seats for specific movies. Through this project, I learned how to structure code using object-oriented programming principles and properly separate logic. It was also my first experience working in a team using Scrum, where I developed strong collaboration and communication skills.",
      image: cinemaproject,
      github: "https://github.com/Lucaatje/Cinema-Reservation-System"
    },
    {
      title: "Project Two",
      description: "Another cool project you worked on.",
      image: "/project2.png",
      github: "https://github.com/jouwusername/jouwrepo",
    },
    {
      title: "Project Three",
      description: "Something you built while learning.",
      image: "/project3.png",
      github: "https://github.com/jouwusername/jouwrepo",
    },
  ];

  return (
    <Page>
      <h1 className="text-4xl font-bold text-slate-400 text-center mt-16">
        Projects
      </h1>

      <div className="max-w-6xl mx-auto mt-12 px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="border border-slate-400 rounded-lg overflow-hidden 
                        transform transition duration-300 
                        hover:scale-105 hover:shadow-xl hover:shadow-cyan-700/20 
                        hover:border-cyan-700 block"
            >
                <div className="h-48 w-full bg-slate-700">
                    <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    />
                </div>

                <div className="p-4">
                    <h2 className="text-xl font-bold text-slate-200 mb-2">
                    {project.title}
                    </h2>

                    <p className="text-slate-400 text-sm">
                    {project.description}
                    </p>
                </div>
            </a>
        ))}
      </div>
    </Page>
  );
}