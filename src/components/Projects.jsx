// Projects.jsx
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Define a type for project categories
const projects = [
  // --- Personal Projects ---
  {
    title: "Rakshak Safety Web & App",
    description:
      "A safety-focused web and mobile app that allows users to report and share safety incidents, with a data-driven map showing tourist safety locations.",
    tech: ["React.js", "Express", "MongoDb", "React Native"],
    github: "https://github.com/Mychad/Rakshak-frontend",
    demo: "https://rakshak-frontend.vercel.app/",
    type: "featured",
    status: "complete",
  },
  {
    title: "MysticMart E-Commerce Website",
    description:
      "MysticMart is a full-stack e-commerce web application featuring product management, cart and order handling, and role-based controls for managing product visibility.",
    tech: ["React.js", "Express", "TailwindCss", "MongoDb"],
    github: "https://github.com/shaharyaarzaye/flowhabit",
    demo: "https://flowhabit-web.vercel.app/",
    type: "featured", 
    status: "working",
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase my skills, projects, and experience. Built using React, TailwindCSS, and React Router.",
    tech: ["React", "TailwindCSS", "Vite"],
    github: "https://github.com/Mychad/portfolio",
    type: "personal",
    status: "complete",
  },
  {
    title: "ShowFusion – Movies & Series Explorer",
    description:
      "ShowFusion is an entertainment discovery web app that allows users to browse movies, TV shows, and anime with ratings and categories.",
    tech: ["React.js", "Express", "MongoDb"],
    github: "https://github.com/Mychad/Show-Fusion",
    demo: "https://showfusion.netlify.app/",
    type: "personal",
    status: "working",
  },
  // --- Freelance Projects ---
  // -- College Projects ---

  {
    title: "Serene Horizon Resort – Hotel Booking & Management Web App",
    description:
      "A hotel booking and management web application that allows users to book rooms based on dates, and receive booking confirmation via email.",
    tech: ["React.js", "Express", "MongoDb"],
    github: "https://github.com/Mychad/Rakshak-frontend",
    demo: "https://rakshak-frontend.vercel.app/",
    type: "personal",
    status: "working",
  },
  // Add more projects as needed
];

// Helper component for a single project card
// helper: map status -> label + tailwind classes + emoji
const getStatusProps = (status) => {
  switch ((status || "").toLowerCase()) {
    case "complete":
    case "done":
      return {
        label: "Complete",
        icon: "✅",
        classes:
          "bg-green-100  text-green-800 border border-green-200 dark:bg-green-900/30 dark:text-green-200",
      };
    case "working":
    case "in-progress":
      return {
        label: "Working",
        icon: "⚙️",
        classes:
          "bg-orange-100 text-orange-800 border border-orange-200 dark:bg-orange-900/30 dark:text-orange-200",
      };
    case "pending":
    default:
      // pending = planned / waiting — neutral gray
      return {
        label: "Pending",
        icon: "⏳",
        classes:
          "bg-gray-100 text-gray-800 border border-gray-200 dark:bg-white/5 dark:text-white/70",
      };
  }
};

// Updated ProjectCard: place badge top-right, card is relative
const ProjectCard = ({ project }) => {
  const status = getStatusProps(project.status);

  return (
    <div className="relative p-5 rounded-lg backdrop-blur-md border bg-white/10 dark:bg-black/10 border-x-4 hover:border-y-1 box-border border-black/20 dark:border-white/10 hover:cursor-pointer transition-all duration-300">
      {/* Status badge (top-right) */}
      <div
        className={`relative w-fit ml-auto mt-3 px-3 py-1 rounded-full text-xs font-medium flex items-center gap-2 ${status.classes}`}
        title={`Status: ${status.label}`}
      >
        <span className="leading-none">{status.icon}</span>
        <span>{status.label}</span>
      </div>

      <h3 className="text-lg font-semibold mb-2">{project.title}</h3>

      <p className="text-sm mb-3 text-black/70 dark:text-white/70">
        {project.description}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 text-xs mb-3">
        {project.tech.map((tech, idx) => (
          <span
            key={idx}
            className="px-2 py-1 rounded-full bg-black/10 dark:bg-white/10"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="flex justify-between items-center text-lg mt-4">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
            title="GitHub"
          >
            <FaGithub />
          </a>
        ) : (
          <span />
        )}

        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black dark:hover:text-white transition-colors"
            title="Live Demo"
          >
            <FaExternalLinkAlt />
          </a>
        )}
      </div>
    </div>
  );
};

// Main component to render all sections
function Projects() {
  // Utility function to filter projects by type
  const filterProjects = (type) => projects.filter((p) => p.type === type);

  // Define the sections to render
  const sections = [
    {
      title: "Freelance Projects 💼",
      type: "freelance",
      description:
        "Client-based projects showcasing professional skills and delivery.",
    },
    {
      title: "Featured Projects ⭐",
      type: "featured",
      description:
        "Highlighted projects that demonstrate real-world problem solving, full-stack development, and practical application of modern web technologies.",
    },
    {
      title: "Personal Projects 🛠️",
      type: "personal",
      description:
        "Passion projects demonstrating a breadth of technical interests.",
    },
    {
      title: "Products 🚀",
      type: "product",
      description:
        "Software products built and maintained (for sale or open-source).",
    },
  ];

  return (
    <div className="flex flex-col font-thin dark:text-white text-black max-w-2xl mx-auto mt-10">
      {/* Map through the defined sections */}
      {sections.map((section, sectionIndex) => {
        const filtered = filterProjects(section.type);

        // Only render the section if there are projects in it
        if (filtered.length === 0) return null;

        return (
          <div key={sectionIndex} className="mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 border-b border-black/10 dark:border-white/10 pb-2">
              {section.title}
            </h2>
            <p className="text-sm mb-6 text-black/70 dark:text-white/70">
              {section.description}
            </p>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
              {filtered.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>

            {/* Add a horizontal line unless it's the last section */}
            {sectionIndex < sections.length - 1 && (
              <div className="mt-10 border-t border-black/10 dark:border-white/10"></div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Projects;
