"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>

      {/* HERO */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">

        <motion.img
          src="/images/anjali.jpg"
          
          className="w-44 h-44 rounded-full object-cover border-4 border-indigo-500 glow mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        <motion.h1
          className="text-5xl font-bold gradient-text"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Anjali Mishra
        </motion.h1>

        <p className="mt-3 text-lg text-gray-300">
          Aspiring Software Engineer | Python Developer
        </p>

        <p className="mt-4 max-w-2xl text-gray-400 leading-relaxed">
          B.Tech Computer Science student targeting Software Engineer roles,
          with hands-on experience in Python backend development, automation,
          and AI-driven systems. Skilled in building scalable Flask applications,
          working with SQL databases, and applying computer vision techniques
          in real-world projects and internships.
        </p>

        <motion.div
          className="mt-6 flex gap-4 flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <a href="https://github.com/Anju0825" className="px-5 py-2 bg-indigo-500 rounded glow hover:scale-110 transition">
            GitHub
          </a>

          <a href="https://linkedin.com/in/anjali-mishra-792b77205" className="px-5 py-2 border rounded hover:bg-white hover:text-black transition">
            LinkedIn
          </a>

          <a href="/resume.pdf" download className="px-5 py-2 border rounded hover:bg-white hover:text-black transition">
            Resume
          </a>
        </motion.div>

        <p className="mt-4 text-gray-400">📧 go4anjali08@gmail.com</p>

      </section>

      {/* EXPERIENCE */}
      <section className="min-h-screen px-6 md:px-20 flex flex-col justify-center">

        <h2 className="text-3xl font-bold text-center mb-10 gradient-text">Experience</h2>

        <div className="border-l-2 border-indigo-500 pl-6 space-y-10">

          {[
            {
              title: "Python Intern – Dezignolics",
              points: [
                "Engineered web scraping pipelines using Python & BeautifulSoup",
                "Automated data extraction improving efficiency",
                "Built SQL-based systems for analysis"
              ]
            },
            {
              title: "AI Content Intern – Next Leap",
              points: [
                "Optimized AI content pipelines",
                "Worked with LLM workflows",
                "Improved data accuracy"
              ]
            },
            {
              title: "Tech Intern – Octanet",
              points: [
                "Developed automation scripts",
                "Improved backend workflows",
                "Designed responsive UI"
              ]
            }
          ].map((exp, i) => (
            <motion.div key={i} whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }}>
              <h3 className="text-xl font-bold">{exp.title}</h3>
              <ul className="text-gray-400 list-disc ml-5 mt-2 space-y-1">
                {exp.points.map((p, idx) => <li key={idx}>{p}</li>)}
              </ul>
            </motion.div>
          ))}

        </div>

      </section>

      {/* PROJECTS */}
      <section className="min-h-screen px-6 md:px-20 flex flex-col justify-center">

        <h2 className="text-3xl font-bold text-center mb-10 gradient-text">Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">

          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 rounded-xl glow">
            <h3 className="text-xl font-bold">AI Online Proctoring System</h3>
            <ul className="text-gray-400 list-disc ml-5 mt-2 space-y-1">
              <li>Built using Python, Flask & OpenCV</li>
              <li>Real-time monitoring system</li>
              <li>Fraud detection using AI</li>
            </ul>
            <a href="https://github.com/Anju0825" className="text-indigo-400 mt-3 block">
              View Project →
            </a>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="p-6 bg-gray-900 rounded-xl glow">
            <h3 className="text-xl font-bold">AI Library Assistant</h3>
            <ul className="text-gray-400 list-disc ml-5 mt-2 space-y-1">
              <li>Built chatbot using NLP models</li>
              <li>Handled complex queries</li>
              <li>Integrated APIs</li>
            </ul>
          </motion.div>

        </div>

      </section>

      {/* SKILLS */}
      <section className="min-h-screen flex flex-col justify-center items-center px-6">

        <h2 className="text-3xl font-bold mb-10 gradient-text">Technical Skills</h2>

        <div className="max-w-3xl space-y-6 text-gray-300">

          <div>
            <h3 className="font-semibold text-lg">Languages</h3>
            <p>Python, SQL, HTML, CSS, JavaScript</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Frameworks & Tools</h3>
            <p>Flask, SQLAlchemy, Bootstrap, Git, Docker</p>
          </div>

          <div>
            <h3 className="font-semibold text-lg">Libraries</h3>
            <p>OpenCV, NumPy, Flask</p>
          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center">

        <h2 className="text-3xl font-bold mb-6 gradient-text">Contact</h2>

        <p className="text-gray-400">📧 go4anjali08@gmail.com</p>
        <p className="text-gray-400">📞 8452906480</p>

        <div className="flex gap-6 mt-4">
          <a href="https://linkedin.com/in/anjali-mishra-792b77205">LinkedIn</a>
          <a href="https://github.com/Anju0825">GitHub</a>
        </div>

      </section>

    </main>
  );
}

<div className="fixed bottom-5 right-5">

  <button
    onClick={() => alert("Hi! I'm Anjali's portfolio assistant 👋")}
    className="bg-indigo-500 text-white px-4 py-2 rounded-full shadow-lg"
  >
    Chat 💬
  </button>

</div>