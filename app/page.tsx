"use client";

import Navbar from "./components/Navbar";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import CountUp from "react-countup";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050816] text-white">

      <Navbar />

      {/* Hero Section */}
      <section className="grid md:grid-cols-2 items-center px-10 pt-28 pb-20">

        {/* Left Side */}
        <div>

          <p className="text-cyan-400 uppercase tracking-[6px]">
            Data Analytics Portfolio
          </p>

          <h1 className="text-6xl font-extrabold mt-6 leading-tight">
            Hi, I'm
            <span className="block text-cyan-400">
              Abhishek Guda
            </span>
          </h1>

          <div className="mt-6">

            <TypeAnimation
              sequence={[
                "Data Analyst",
                1500,
                "SQL Developer",
                1500,
                "Power BI Expert",
                1500,
                "AI Enthusiast",
                1500,
              ]}
              wrapper="h2"
              speed={50}
              repeat={Infinity}
              className="text-cyan-400 text-3xl font-bold"
            />

            <p className="text-gray-300 mt-6 text-lg leading-8 max-w-xl">
              Passionate Data Analytics student skilled in SQL,
              Power BI, Python and Excel. I enjoy transforming
              raw data into meaningful insights and building
              dashboards that help businesses make better
              decisions.
            </p>

          </div>

          <div className="flex gap-5 mt-10">

            <a
              href="#projects"
              className="bg-cyan-500 text-black px-7 py-3 rounded-xl font-semibold hover:bg-cyan-400 transition"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download
              className="border border-cyan-500 px-7 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition"
            >
              Download Resume
            </a>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center mt-12 md:mt-0">

          <div className="w-80 h-80 rounded-full border-4 border-cyan-400 shadow-[0_0_35px_#22d3ee] overflow-hidden">

            <Image
              src="/images/profile.jpg"
              alt="Abhishek Guda"
              width={320}
              height={320}
              className="w-full h-full object-cover"
            />

          </div>

        </div>

      </section>
      {/* About Section */}
      <section
        id="about"
        className="py-20 px-10 bg-[#0b1120]"
      >
        <h2 className="text-4xl font-bold text-cyan-400 text-center mb-12">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="max-w-2xl">

            <h3 className="text-3xl font-bold text-cyan-400 mb-6">
              Hi, I'm Abhishek Guda 👋
            </h3>

            <p className="text-gray-300 leading-8">
              I am a passionate Data Analytics student with strong
              knowledge of SQL, Python, Excel, Power BI and
              Machine Learning. I enjoy transforming raw data into
              meaningful insights that help businesses make
              better decisions.
            </p>

            <p className="text-gray-300 leading-8 mt-6">
              My goal is to become a professional Data Analyst
              and build intelligent dashboards and AI-powered
              solutions for real-world business problems.
            </p>

          </div>

          {/* Right Side */}
          <div className="bg-[#111827] border border-cyan-500 rounded-2xl p-8 shadow-[0_0_25px_#22d3ee] hover:scale-105 transition duration-300">

            <div className="space-y-5">

              <p>
                <span className="text-cyan-400 font-semibold">
                  🎓 Education:
                </span>{" "}
                B.Tech – CSE (AI & DS)
              </p>

              <p>
                <span className="text-cyan-400 font-semibold">
                  📍 Location:
                </span>{" "}
                India
              </p>

              <p>
                <span className="text-cyan-400 font-semibold">
                  💼 Role:
                </span>{" "}
                Aspiring Data Analyst
              </p>

              <p>
                <span className="text-cyan-400 font-semibold">
                  📊 Projects:
                </span>{" "}
                4+ Data Analytics Projects
              </p>

              <p>
                <span className="text-cyan-400 font-semibold">
                  🛠️ Skills:
                </span>{" "}
                SQL • Power BI • Python • Excel • Machine Learning
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Statistics */}
      <section className="py-16 px-10">

        <div className="grid md:grid-cols-4 gap-6">

          <div className="bg-[#111827] border border-cyan-500 rounded-2xl p-6 text-center hover:scale-105 transition duration-300 shadow-[0_0_20px_#22d3ee]">
            <h2 className="text-4xl font-bold text-cyan-400">
              <CountUp end={4} duration={2} />+
            </h2>
            <p className="mt-2 text-gray-300">
              Projects
            </p>
          </div>

          <div className="bg-[#111827] border border-cyan-500 rounded-2xl p-6 text-center hover:scale-105 transition duration-300 shadow-[0_0_20px_#22d3ee]">
            <h2 className="text-4xl font-bold text-cyan-400">
              <CountUp end={5} duration={2} />+
            </h2>
            <p className="mt-2 text-gray-300">
              Certificates
            </p>
          </div>

          <div className="bg-[#111827] border border-cyan-500 rounded-2xl p-6 text-center hover:scale-105 transition duration-300 shadow-[0_0_20px_#22d3ee]">
            <h2 className="text-4xl font-bold text-cyan-400">
              <CountUp end={8} duration={2} />+
            </h2>
            <p className="mt-2 text-gray-300">
              Skills
            </p>
          </div>

          <div className="bg-[#111827] border border-cyan-500 rounded-2xl p-6 text-center hover:scale-105 transition duration-300 shadow-[0_0_20px_#22d3ee]">
            <h2 className="text-4xl font-bold text-cyan-400">
              Open
            </h2>
            <p className="mt-2 text-gray-300">
              To Work
            </p>
          </div>

        </div>

      </section>

      {/* Skills */}
      <section
        id="skills"
        className="py-20 px-10 bg-[#050816]"
      >

        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {[
            ["SQL",95],
            ["Power BI",90],
            ["Python",85],
            ["Excel",90],
            ["Machine Learning",80],
            ["Data Visualization",88],
          ].map(([skill,value])=>(
            <div key={skill}>

              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill}</span>
                <span className="text-cyan-400">{value}%</span>
              </div>

              <div className="w-full bg-gray-700 rounded-full h-4">
                <div
                  className="bg-cyan-400 h-4 rounded-full shadow-[0_0_15px_#22d3ee]"
                  style={{width: '${value}%'}}
                />
              </div>

            </div>
          ))}

        </div>

      </section>
      {/* ================= Projects ================= */}

<section
  id="projects"
  className="py-20 px-10 bg-[#111827]"
>

  <h2 className="text-4xl font-bold text-center text-cyan-400 mb-14">
    Projects
  </h2>

  <div className="grid md:grid-cols-3 gap-8">

    {/* Project 1 */}

    <div className="bg-[#1b2333] border border-cyan-500 rounded-2xl overflow-hidden shadow-[0_0_20px_#22d3ee] hover:scale-105 transition duration-300">

      <Image
        src="/images/powerbi-dashboard.png"
        alt="Power BI Dashboard"
        width={500}
        height={300}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold text-cyan-400">
          Super Store Sales Dashboard
        </h3>

        <p className="text-gray-300 mt-3 min-h-[80px]">
          Interactive Power BI dashboard visualizing sales, profit,
          customer trends and KPIs using business data.
        </p>

        <div className="flex gap-4 mt-6">

          <a
            href="https://github.com/abhishekguda40-ai"
            target="_blank"
            className="bg-cyan-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="#"
            className="border border-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-500 hover:text-black transition"
          >
            Live Demo
          </a>

        </div>

      </div>

    </div>



    {/* Project 2 */}

    <div className="bg-[#1b2333] border border-cyan-500 rounded-2xl overflow-hidden shadow-[0_0_20px_#22d3ee] hover:scale-105 transition duration-300">

      <Image
        src="/images/netflix-analysis.png"
        alt="Netflix Dashboard"
        width={500}
        height={300}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold text-cyan-400">
          Netflix Analysis
        </h3>

        <p className="text-gray-300 mt-3 min-h-[80px]">
          Python project using Pandas, NumPy and Matplotlib to
          analyze Netflix movies, TV shows and trends.
        </p>

        <div className="flex gap-4 mt-6">

          <a
            href="https://github.com/abhishekguda40-ai"
            target="_blank"
            className="bg-cyan-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="#"
            className="border border-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-500 hover:text-black transition"
          >
            Live Demo
          </a>

        </div>

      </div>

    </div>



    {/* Project 3 */}

    <div className="bg-[#1b2333] border border-cyan-500 rounded-2xl overflow-hidden shadow-[0_0_20px_#22d3ee] hover:scale-105 transition duration-300">

      <Image
        src="/images/imdb-score.png"
        alt="IMDb Dashboard"
        width={500}
        height={300}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">

        <h3 className="text-2xl font-bold text-cyan-400">
          IMDb Movie Dashboard
        </h3>

        <p className="text-gray-300 mt-3 min-h-[80px]">
          Power BI dashboard analysing IMDb ratings,
          genres, popularity and movie performance.
        </p>

        <div className="flex gap-4 mt-6">

          <a
            href="https://github.com/abhishekguda40-ai"
            target="_blank"
            className="bg-cyan-500 text-black px-5 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href="#"
            className="border border-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-500 hover:text-black transition"
          >
            Live Demo
          </a>

        </div>

      </div>

    </div>

  </div>

</section>



{/* ================= Certifications ================= */}

<section
  id="certifications"
  className="py-20 px-10 bg-[#050816]"
>

  <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
    Certifications
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {[
      "HackerRank SQL (Basic)",
      "HackerRank SQL (Intermediate)",
      "HackerRank SQL (Advanced)",
      "Deloitte Data Analytics Job Simulation",
      "Tata GenAI Job Simulation",
    ].map((cert) => (

      <div
        key={cert}
        className="bg-[#111827] border border-cyan-500 rounded-2xl p-8 hover:scale-105 transition duration-300 shadow-[0_0_15px_#22d3ee]"
      >

        <h3 className="text-xl font-bold text-cyan-400">
          {cert}
        </h3>

        <p className="text-gray-300 mt-4">
          Successfully completed certification demonstrating
          practical knowledge and industry-level skills.
        </p>

      </div>

    ))}

  </div>

</section>
{/* ================= Contact ================= */}

<section
  id="contact"
  className="py-20 px-10 bg-[#111827]"
>

  <h2 className="text-4xl font-bold text-center text-cyan-400 mb-12">
    Contact Me
  </h2>

  <div className="max-w-3xl mx-auto bg-[#1b2333] border border-cyan-500 rounded-2xl p-10 shadow-[0_0_20px_#22d3ee]">

    <p className="text-gray-300 text-lg mb-8 text-center">
      I'm actively looking for Data Analyst internships and
      full-time opportunities. Feel free to connect with me.
    </p>

    <div className="space-y-6">

      <div className="flex justify-between border-b border-gray-700 pb-3">
        <span className="font-semibold text-cyan-400">
          📧 Email
        </span>

        <a
          href="mailto:abhishekguda40@gmail.com"
          className="hover:text-cyan-400 transition"
        >
          abhishekguda40@gmail.com
        </a>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-3">
        <span className="font-semibold text-cyan-400">
          💼 LinkedIn
        </span>

        <a
          href="https://linkedin.com/in/abhishek-guda-26083a319"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          linkedin.com/in/abhishek-guda-26083a319
        </a>
      </div>

      <div className="flex justify-between border-b border-gray-700 pb-3">
        <span className="font-semibold text-cyan-400">
          💻 GitHub
        </span>

        <a
          href="https://github.com/abhishekguda40-ai"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-cyan-400 transition"
        >
          github.com/abhishekguda40-ai
        </a>
      </div>

      <div className="flex justify-between pb-3">
        <span className="font-semibold text-cyan-400">
          📍 Location
        </span>

        <span>India</span>
      </div>

    </div>

    <div className="flex flex-wrap gap-5 justify-center mt-10">

      <a
        href="/resume.pdf"
        download
        className="bg-cyan-500 text-black px-6 py-3 rounded-xl font-semibold hover:bg-cyan-400 transition"
      >
        📄 Download Resume
      </a>

      <a
        href="mailto:abhishekguda40@gmail.com"
        className="border border-cyan-500 px-6 py-3 rounded-xl hover:bg-cyan-500 hover:text-black transition"
      >
        📩 Email Me
      </a>

    </div>

  </div>

</section>

{/* ================= Footer ================= */}

<footer className="bg-[#050816] border-t border-cyan-500 py-8">

  <div className="text-center">

    <h3 className="text-2xl font-bold text-cyan-400">
      Abhishek Guda
    </h3>

    <p className="text-gray-400 mt-3">
      Data Analyst • SQL Developer • Power BI Enthusiast
    </p>

    <p className="text-gray-500 mt-6">
      © 2026 Abhishek Guda. All Rights Reserved.
    </p>

  </div>

</footer>

    </main>
  );
}