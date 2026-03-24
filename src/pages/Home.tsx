import Page from "../Page";

export default function Home() {
  return (
    <Page>
      <div className="flex justify-center pr-100 relative">

        <section className="flex flex-col justify-center h-[80vh] max-w-3xl">
          <p className="text-cyan-700 mb-4 font-bold">Hello, my name is</p>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-100">
            Luca Thierrij 
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-400 mt-2">
            Building projects and learning every day in tech.
          </h2>

          <p className="mt-6 text-slate-400 max-w-xl">
            I'm a third-year Computer Science student, exploring software development and the world of IT.
            At school and in my free time, I work on various projects and continuously aim to improve my skills as an upcoming professional. 
          </p>

          <button className="mt-8 border border-cyan-700 text-cyan-700 px-6 py-3 w-fit hover:bg-cyan-700/10">
            Learn more about me!
          </button>
        </section>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">

          <p className="text-slate-400 text-sm mb-2">Scroll down</p>

          <div className="flex flex-col items-center gap-1">
            <span className="chevron"></span>
            <span className="chevron"></span>
            <span className="chevron"></span>
          </div>

        </div>
      </div>

      <section
        id="about"
        className="min-h-screen flex items-center justify-center px-6 -mt-25"
      >
        <div className="max-w-3xl text-center">
          
          <h2 className="text-3xl font-bold text-slate-400 mb-6">
            About Me
          </h2>

          <p className="text-slate-400 mb-4">
            My name is Luca Thierrij, I’m 21 years old and currently a third-year Computer Science student at Rotterdam University of Applied Sciences.
          </p>

          <p className="text-slate-400 mb-4">
            I’m driven to continuously improve myself, both personally and professionally. I enjoy learning new technologies, building projects, and challenging myself to grow as a developer every day.
          </p>

          <p className="text-slate-400 mb-4">
            Outside of tech, I have a variety of hobbies. I enjoy reading, traveling, and spending time with friends playing pool or bowling. I also like football and staying active.
          </p>

          <p className="text-slate-400">
            I regularly go to the gym to stay fit and disciplined. In my free time, I also enjoy watching series and movies, as well as listening to music.
          </p>

        </div>
      </section>
    </Page>
  );
}