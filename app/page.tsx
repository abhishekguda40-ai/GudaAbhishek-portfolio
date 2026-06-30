"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07091F] text-white">

      {/* ================= NAVBAR ================= */}

      <nav className="fixed top-0 left-0 w-full z-50 bg-[#090B23]/80 backdrop-blur-xl border-b border-purple-500/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

          <h1 className="text-3xl font-bold">
            <span className="text-purple-400">Abhishek</span>{" "}
            <span>Guda</span>
          </h1>

          <ul className="hidden md:flex gap-10 font-medium">

            <li>
              <a href="#home" className="hover:text-purple-400 transition">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-purple-400 transition">
                About
              </a>
            </li>

            <li>
              <a href="#skills" className="hover:text-purple-400 transition">
                Skills
              </a>
            </li>

            <li>
              <a href="#projects" className="hover:text-purple-400 transition">
                Projects
              </a>
            </li>

            <li>
              <a href="#certifications" className="hover:text-purple-400 transition">
                Certificates
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-purple-400 transition">
                Contact
              </a>
            </li>

          </ul>

          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition"
          >
            Resume
          </a>

        </div>
      </nav>

      {/* ================= HERO ================= */}

      <section
        id="home"
        className="max-w-7xl mx-auto pt-36 pb-24 px-8 grid lg:grid-cols-2 gap-16 items-center"
      >

        {/* LEFT */}

        <div>

          <span className="inline-block px-5 py-2 rounded-full border border-purple-500 text-purple-300">
            Data Analyst • Python • SQL • Power BI
          </span>

          <h1 className="mt-8 text-7xl font-extrabold leading-tight">

            Hi, I'm

            <br />

            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Abhishek
            </span>

            <br />

            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              Guda
            </span>

          </h1>

          <h2 className="text-4xl font-bold mt-6">
            Turning Data Into Insights
          </h2>

          <p className="mt-8 text-gray-300 text-lg leading-8 max-w-xl">
            Passionate Data Analyst skilled in SQL, Python, Excel,
            Power BI and Machine Learning. I build interactive
            dashboards and transform raw data into meaningful
            business insights.
          </p>

          <div className="flex gap-5 mt-10">

            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-8 py-4 rounded-xl border border-purple-500 hover:bg-purple-600 transition"
            >
              Contact Me
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative flex justify-center items-center h-[550px]">

          {/* Glow */}

          <div className="absolute w-[380px] h-[380px] rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 blur-3xl opacity-30"></div>

          {/* Profile + Social Icons */}
<div className="absolute right-[-60px] top-1/2 -translate-y-1/2 flex flex-col items-center">

  {/* Profile Image */}
  <Image
    src="/images/profile.jpg"
    alt="Profile"
    width={320}
    height={320}
    priority
    className="rounded-full border-4 border-cyan-400 object-cover"
  />

  {/* Social Icons */}
  <div className="flex justify-center gap-6 mt-6">

    <a
      href="https://linkedin.com/in/abhishek-guda-26083a319"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-[#12172d] border border-purple-500 flex items-center justify-center hover:scale-110 transition"
    >
      in
    </a>

    <a
      href="https://github.com/YOUR_GITHUB_USERNAME"
      target="_blank"
      rel="noopener noreferrer"
      className="w-12 h-12 rounded-full bg-[#12172d] border border-purple-500 flex items-center justify-center hover:scale-110 transition"
    >
      GH
    </a>

    <a
      href="mailto:abhishekguda40@gmail.com"
      className="w-12 h-12 rounded-full bg-[#12172d] border border-purple-500 flex items-center justify-center hover:scale-110 transition"
    >
      ✉️
    </a>

  </div>

</div>
          {/* Analytics Card */}

          <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-[300px] bg-[#10142b]/90 backdrop-blur-xl border border-purple-500/30 rounded-3xl p-6 shadow-xl">

            <h3 className="text-2xl font-bold mb-6">
              Analytics Overview
            </h3>

            {[
              ["Projects", "12", "90%"],
              ["Dashboards", "8", "75%"],
              ["Insights", "250+", "95%"],
              ["Accuracy", "95%", "95%"],
            ].map(([title, value, width]) => (

              <div key={title} className="mb-6">

                <div className="flex justify-between mb-2">
                  <span>{title}</span>
                  <span className="font-bold text-cyan-400">
                    {value}
                  </span>
                </div>

                <div className="h-2 bg-gray-700 rounded-full">

                  <div
                    className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                    style={{ width }}
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>
      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="max-w-7xl mx-auto py-24 px-8 grid lg:grid-cols-2 gap-16 items-center"
      >

        {/* LEFT */}

        <div className="bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-10">

          <span className="text-cyan-400 font-semibold">
            ABOUT ME
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-8">
            Passionate Data Analyst
          </h2>

          <p className="text-gray-300 leading-8 text-lg">

            I am a Data Analyst passionate about turning raw data
            into meaningful business insights. I enjoy building
            dashboards, automating reports, solving business
            problems and creating data-driven solutions using
            SQL, Python, Excel and Power BI.

          </p>

          <div className="grid grid-cols-2 gap-6 mt-10">

            <div className="bg-[#11162B] rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="text-4xl font-bold text-cyan-400">
                12+
              </h3>

              <p className="text-gray-400 mt-2">
                Projects
              </p>
            </div>

            <div className="bg-[#11162B] rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-4xl font-bold text-purple-400">
                6+
              </h3>

              <p className="text-gray-400 mt-2">
                Certifications
              </p>
            </div>

            <div className="bg-[#11162B] rounded-2xl p-6 border border-pink-500/20">
              <h3 className="text-4xl font-bold text-pink-400">
                2+
              </h3>

              <p className="text-gray-400 mt-2">
                Years Learning
              </p>
            </div>

            <div className="bg-[#11162B] rounded-2xl p-6 border border-green-500/20">
              <h3 className="text-4xl font-bold text-green-400">
                95%
              </h3>

              <p className="text-gray-400 mt-2">
                Accuracy
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div
          id="skills"
          className="bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl p-10"
        >

          <span className="text-purple-400 font-semibold">
            MY SKILLS
          </span>

          <h2 className="text-5xl font-bold mt-4 mb-10">
            Technical Skills
          </h2>

          {[
            ["Python",95],
            ["SQL",92],
            ["Power BI",90],
            ["Excel",90],
            ["Pandas",88],
            ["Machine Learning",85],
          ].map(([skill,value]) => (

            <div key={skill} className="mb-8">

              <div className="flex justify-between mb-2">

                <span className="font-semibold text-lg">
                  {skill}
                </span>

                <span className="text-cyan-400">
                  {value}%
                </span>

              </div>

              <div className="w-full h-3 rounded-full bg-gray-700">

                <div
                  className="h-3 rounded-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
                  style={{ width: '${value}%' }}
                />

              </div>

            </div>

          ))}

        </div>

      </section>
      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="max-w-7xl mx-auto py-24 px-8"
      >

        <div className="text-center mb-16">

          <span className="text-cyan-400 font-semibold">
            MY WORK
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Featured <span className="text-purple-400">Projects</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Here are some of my best Data Analytics and Business Intelligence projects
            built using SQL, Python, Power BI and Excel.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
            {
              title: "Netflix Dashboard",
              image: "/images/netflix-analysis.png",
              tech: "Python • Pandas • Matplotlib",
              desc: "Analyzed Netflix movies and TV shows to identify trends, genres, ratings and release patterns."
            },

            {
              title: "Power BI Sales Dashboard",
              image: "/images/powerbi-dashboard.png",
              tech: "Power BI • DAX",
              desc: "Interactive dashboard displaying sales KPIs, profits, regional performance and yearly growth."
            },

            {
              title: "Excel Sales Dashboard",
              image: "/images/excel-dashboard.png",
              tech: "Excel • Pivot Tables",
              desc: "Professional Excel dashboard with slicers, charts, KPIs and automated reporting."
            },

            {
              title: "SQL Data Analysis",
              image: "/images/sql-project.png",
              tech: "SQL • MySQL",
              desc: "Solved complex SQL business problems using joins, CTEs, window functions and aggregations."
            },

            {
              title: "Financial Dashboard",
              image: "/images/finance-dashboard.png",
              tech: "Power BI • Excel",
              desc: "Designed a finance dashboard to track expenses, profits and monthly business performance."
            },

            {
              title: "Machine Learning Project",
              image: "/images/ml-project.png",
              tech: "Python • Scikit-Learn",
              desc: "Built a predictive machine learning model for business forecasting and decision support."
            }

          ].map((project) => (

            <div
              key={project.title}
              className="group bg-white/10 backdrop-blur-xl border border-purple-500/20 rounded-3xl overflow-hidden hover:scale-105 transition duration-500 shadow-xl"
            >

              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-cyan-400 mt-2">
                  {project.tech}
                </p>

                <p className="text-gray-300 mt-5 leading-7">
                  {project.desc}
                </p>

                <div className="flex gap-4 mt-8">

                  <a
                    href="#"
                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:scale-105 transition"
                  >
                    Live Demo
                  </a>

                  <a
                    href="#"
                    className="px-5 py-3 rounded-xl border border-purple-500 hover:bg-purple-600 transition"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </section>
      {/* ================= CERTIFICATIONS ================= */}

      <section
        id="certifications"
        className="max-w-7xl mx-auto py-24 px-8"
      >

        <div className="text-center mb-16">

          <span className="text-cyan-400 font-semibold">
            CERTIFICATIONS
          </span>

          <h2 className="text-5xl font-bold mt-4">
            My <span className="text-purple-400">Achievements</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Professional certifications that validate my skills in
            Data Analytics, SQL, Python, Excel and Power BI.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {[
  {
    title: "Google Data Analytics",
    issuer: "Google",
    icon: "📊",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "SQL Advanced",
    issuer: "HackerRank",
    icon: "💻",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Python Programming",
    issuer: "Coursera",
    icon: "🐍",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Power BI",
    issuer: "Microsoft",
    icon: "📈",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Excel for Business",
    issuer: "Udemy",
    icon: "📑",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Machine Learning",
    issuer: "Coursera",
    icon: "🤖",
    color: "from-indigo-500 to-purple-500",
  },
].map((cert) => (
  <div
    key={cert.title}
    className="rounded-3xl bg-white/10 backdrop-blur-xl border border-purple-500/20 p-8 hover:scale-105 transition duration-500"
  >
    <div
      className={'w-20 h-20 rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-4xl mb-6'}
    >
      {cert.icon}
    </div>

    <h3 className="text-2xl font-bold">
      {cert.title}
    </h3>

    <p className="text-cyan-400 mt-2">
      {cert.issuer}
    </p>
  </div>
))}

      </div>
    </section>

    {/* ================= CONTACT ================= */}

    <section
      id="contact"
      className="max-w-7xl mx-auto py-24 px-8"
    >
      <div className="rounded-3xl bg-white/10 backdrop-blur-xl border border-purple-500/20 p-12">

        <div className="text-center">
          <span className="text-cyan-400 font-semibold">
            CONTACT
          </span>

          <h2 className="text-5xl font-bold mt-4">
            Let's <span className="text-purple-400">Connect</span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-xl mx-auto">
            Interested in collaborating or hiring me?
            Feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mt-16">

          <div className="text-center">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-xl font-bold">Email</h3>
            <p className="text-gray-300 mt-3">
              abhishekguda40@gmail.com
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-xl font-bold">Phone</h3>
            <p className="text-gray-300 mt-3">
              +91 93475 85909
            </p>
          </div>

          <div className="text-center">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-xl font-bold">Location</h3>
            <p className="text-gray-300 mt-3">
              Hyderabad, India
            </p>
          </div>

        </div>

      </div>
    </section>

    {/* ================= FOOTER ================= */}

    <footer className="border-t border-purple-500/20 mt-16">
      <div className="max-w-7xl mx-auto px-8 py-8 flex flex-col md:flex-row justify-between items-center">

        <h2 className="text-2xl font-bold">
          <span className="text-purple-400">Abhishek</span>{" "}
          Guda
        </h2>

        <p className="text-gray-400 mt-4 md:mt-0">
          © 2026 Abhishek Guda. All Rights Reserved.
        </p>

        <div className="flex gap-4 mt-4 md:mt-0">

          <a
            href="https://linkedin.com/in/abhishek-guda-26083a319"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:scale-110 transition"
          >
            in
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:scale-110 transition"
          >
            GH
          </a>

          <a
            href="mailto:abhishekguda40@gmail.com"
            className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center hover:scale-110 transition"
          >
            ✉️
          </a>

        </div>

      </div>
    </footer>

  </main>
);
}