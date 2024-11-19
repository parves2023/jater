import About from "../components/About";

const AboutUs = () => {
  const projects = [
    {
      title: "E-commerce Store",
      description:
        "A fully responsive e-commerce platform built with React, Tailwind CSS, and Firebase. Features include user authentication, product listings, and a secure payment system.",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing my web development projects, skills, and experience. Built with React, Vite, and Tailwind CSS.",
    },
    {
      title: "Blogging Platform",
      description:
        "A platform for users to create and share blog posts. Developed using MERN stack and includes CRUD operations and user authentication.",
    },
  ];

  const skills = [
    "HTML5",
    "CSS3 (Tailwind CSS, Bootstrap)",
    "JavaScript (ES6+)",
    "React (Hooks, Context API)",
    "Firebase (Authentication, Firestore, Hosting)",
    "Node.js & Express.js",
    "MongoDB",
    "Git & GitHub",
  ];

  return (
    <div className="container mx-auto px-4 py-10">
      <h1 className="text-3xl ralewayfont font-bold text-center mb-8">
        About <span className="text-[#309255]">Me</span>
      </h1>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-3xl ralewayfont font-bold mb-4">
          Who <span className="text-[#309255]">I Am</span>
        </h2>
        <p className="text-lg mb-6">
          Hi, I'm Anamul Hauqe, a passionate web developer currently honing my
          skills in modern web technologies. I love building interactive,
          user-friendly applications and learning new tools to solve real-world
          problems. Currently, I'm focusing on mastering React and Firebase.
        </p>

        <h2 className="text-3xl ralewayfont font-bold mb-4">
          My <span className="text-[#309255]">Skills</span>
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-green-300 bg-[#EEFBF3]  p-4 rounded-lg shadow-md text-center"
            >
              <p className="text-lg font-medium">{skill}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl ralewayfont font-bold mb-4">
          My<span className="text-[#309255]">Projects</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#e6f4ea] p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-lg">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8">
        <About></About>
      </div>
    </div>
  );
};

export default AboutUs;
