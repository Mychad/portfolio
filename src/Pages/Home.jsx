import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "../components/Projects";
import ContactForm from "../components/ContactForm";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function Home() {
  const navigate = useNavigate();

  const handleScrollTo = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col  dark:text-white text-black p-5 max-w-2xl mx-auto ">
      {/* Top section: Picture and Name */}
      <div className="flex  items-center gap-3 mb-6 border-b pb-3 border-black/10 dark:border-white/10">
        {/* <img
          src="/profilepic.png"
          alt="profilepic"
          className="h-24 w-24 md:h-48 md:w-48 rounded-full object-cover"
        /> */}
        <h1 className="text-[1.2rem] font-bold md:text-5xl">
          <span className="block  md:text-4xl ">Hi..👋</span>
          <span className="block md:text-4xl">I'm Mohammed Kadiwal</span>
          <span className="block text-xs md:text-sm font-normal text-zinc-400 mt-1">
            Software Developer & a Generalist.
          </span>
        </h1>
      </div>

      {/* Right section */}
      <div className="flex flex-col text-sm md:text-base">
        <p className=" ">
          Most of my time is spent writing code for business or for personal
          Projects and deepening my understanding of how computers work.
        </p>{" "}
        <p className="mt-1">
          When I’m not developing software, I enjoy traveling to new places,
          exploring local food, and spending time in natural environments, which
          helps me stay balanced and focused.
        </p>
        {/* Button Group */}
        <div className="grid grid-cols-2 md:grid-cols-4 text-center text-sm md:text-sm gap-1  mt-6">
          <div
            className="px-5  rounded-md backdrop-blur-md bg-white/10 dark:bg-black/10 border-x-4 border-y-1 box-border border-black/20 dark:border-white/10 hover:cursor-pointer"
            onClick={() => navigate("/blogs")}
          >
            Blogs
          </div>
          <div
            className="px-5  rounded-md backdrop-blur-md bg-white/10 dark:bg-black/10 border-x-4 border-y-1 box-border border-black/20 dark:border-white/10 hover:cursor-pointer"
            onClick={() => navigate("/ArtGallery")}
          >
            Art
          </div>
        </div>
        {/* Skills Section */}
      </div>
      <div></div>
      <Projects />
      <Skills />
      <Experience />
      <ContactForm />
    </div>
  );
}

export default Home;
