function Skills() {
  const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "SQL" , "Drizzle"],
  },
  {
    title: "App Development",
    skills: ["React Native", "Expo"],
  },
  // {
  //   title: "Machine Learning & AI",
  //   skills: ["Pandas", "NumPy", "LangChain", "PyTorch", "OpenAI API", "Hugging Face"],
  // },
  {
    title: "Deployment & DevOps",
    skills: [
      "Docker",
      "Google Cloud Platform",
      "Vercel",
      "Netlify",
      "Render",
      "CI/CD (GitHub Actions)",
      
    ],
  },
  {
    title: "Tools & Platforms",
    skills: ["Git", "GitHub", "Postman"],
  },
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "C", "C++", "Java"],
  },
];

  return (
    <section className="mt-9">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 border-b border-black/10 dark:border-white/10 pb-2">
        Skills
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {skillGroups.map((group, index) => (
          <div
            key={index}
            className="p-4 rounded-md backdrop-blur-md bg-white/10 dark:bg-black/10 border-x-4 border-y-1 border-black/20 dark:border-white/10"
          >
            <h3 className="text-sm font-medium mb-2">{group.title}</h3>
            <ul className="flex flex-wrap gap-2 text-sm">
              {group.skills.map((skill, i) => (
                <li
                  key={i}
                  className="px-2 py-1 rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10 hover:scale-105 transition-transform"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
