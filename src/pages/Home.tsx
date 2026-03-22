import Page from "../Page";

export default function Home() {
  return (
    <Page>
      <section className="flex flex-col justify-center h-[80vh] max-w-3xl">
        
        <p className="text-[#64ffda] mb-4">Hello, my name is</p>

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

        <button className="mt-8 border border-[#64ffda] text-[#64ffda] px-6 py-3 w-fit hover:bg-[#64ffda]/10">
          Check out my projects!
        </button>

      </section>
    </Page>
  );
}