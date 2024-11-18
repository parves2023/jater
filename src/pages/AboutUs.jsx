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
        <h2 className="text-4xl font-bold text-center mb-8">About Me</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
          <p className="text-lg mb-6">
            Hi, I'm [Your Name], a passionate web developer currently honing my
            skills in modern web technologies. I love building interactive,
            user-friendly applications and learning new tools to solve real-world
            problems. Currently, I'm focusing on mastering React and Firebase.
          </p>
  
          <h3 className="text-2xl font-semibold mb-4">My Skills</h3>
          <ul className="list-disc list-inside mb-6">
            {skills.map((skill, index) => (
              <li key={index} className="text-lg">
                {skill}
              </li>
            ))}
          </ul>
  
          <h3 className="text-2xl font-semibold mb-4">Projects</h3>
          <ul className="space-y-4">
            {projects.map((project, index) => (
              <li key={index}>
                <h4 className="text-xl font-bold">{project.title}</h4>
                <p className="text-lg">{project.description}</p>
              </li>
            ))}
          </ul>
        </div>
        <div>
            <About></About>
        </div>
      </div>
    );
  };
  
  export default AboutUs;
  