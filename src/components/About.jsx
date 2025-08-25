import React from "react";
import { motion } from "framer-motion";
import { Code2, Palette, Zap, Sparkles, Mail, FolderKanban, Check, Rocket, Trophy } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section id="about" className="relative w-full overflow-hidden scroll-mt-28 md:scroll-mt-36 bg-gradient-to-b from-white to-indigo-50/40 dark:from-gray-900 dark:to-gray-950 transition-colors duration-500">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-fuchsia-400/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pt-28 pb-20 md:pt-36 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-10 md:gap-12">
          {/* Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.08 }}
            className="order-1"
          >
            <motion.span
              variants={fadeIn}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur dark:border-indigo-800/40 dark:bg-gray-800/60 dark:text-gray-200">
              <Rocket className="h-4  w-4 text-indigo-600 dark:text-indigo-400" /> Full‑Stack Developer
            </motion.span>
            <motion.h1
              variants={fadeIn}
              className="text-4xl mt-4 md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center md:text-left">
              About <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">Me</span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="mt-5 text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl text-center md:text-left mx-auto md:mx-0"
            >
              Hi, I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Nilaf</span> — 
               a Full-Stack Developer blending speed, precision, and design clarity to create web applications that look as good as they perform. I’m passionate about writing clean, scalable code and building intuitive interfaces that deliver both functionality and delight. With a sharp eye for detail and a commitment to accessibility, I ensure every project is crafted to last and designed to impress. My mission is simple: develop digital experiences that people remember — for all the right reasons.
            </motion.p>

            {/* What I do */}
            <motion.ul variants={fadeIn} className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-xl mx-auto md:mx-0">
              {[
                "Design and build responsive React frontends",
                "Develop secure REST APIs with Express",
                "Model and optimize data with MongoDB",
                "Ship performant Node.js backends",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-700 dark:text-gray-200">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-green-500/15 text-green-600 ring-1 ring-green-500/30 dark:text-green-400">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </motion.ul>

            {/* Highlights */}
            <motion.div variants={fadeIn} className="mt-9 flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                { icon: <Sparkles className="h-4 w-4" />, label: "Polished UI/UX" },
                { icon: <Zap className="h-4 w-4" />, label: "Performance First" },
                { icon: <Code2 className="h-4 w-4" />, label: "Clean Architecture" },
                { icon: <Palette className="h-4 w-4" />, label: "Design Systems" },
              ].map((item, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-white/70 px-3 py-1 text-sm text-gray-700 shadow-sm backdrop-blur dark:border-indigo-800/40 dark:bg-gray-800/60 dark:text-gray-200"
                >
                  {item.icon}
                  {item.label}
                </span>
              ))}
            </motion.div>

            {/* Tech marquee */}
            <motion.div
              variants={fadeIn}
              className="relative mt-8 w-full overflow-hidden rounded-xl ring-1 ring-gray-200/60 bg-white/70 backdrop-blur dark:ring-gray-700/60 dark:bg-gray-800/60">
              {/* edge masks */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white/80 dark:from-gray-800/60 to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white/80 dark:from-gray-800/60 to-transparent" />
              <motion.div className="relative py-3 ">
                <motion.div
                  initial={{ x: "0%" }}
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="flex gap-3 whitespace-nowrap px-3"
                >
                  {[
                    "React",
                    "Express",
                    "MongoDB",
                    "Node.js",
                    "Tailwind CSS",
                    "Framer Motion",
                    "REST APIs",
                    "Firebase",
                    "Figma",
                    "Jwt Authentication"
                  ]
                    .concat([
                      "React",
                      "Express",
                      "MongoDB",
                      "Node.js",
                      "Tailwind CSS",
                      "Framer Motion",
                      "REST APIs",
                    ])
                    .map((skill, i) => (
                      <span
                        key={`${skill}-${i}`}
                        className="inline-flex items-center rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-200"
                      >
                        {skill}
                      </span>
                    ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Core skills with progress */}
            <motion.div variants={fadeIn} className="mt-8 max-w-xl mx-auto md:mx-0">
              <h2 className="text-sm font-semibold  tracking-wider text-gray-700 dark:text-gray-300">CORE SKILLS</h2>
              <div className="mt-4 space-y-4">
                {[
                  { name: "React", level: 96, color: "from-indigo-500 to-fuchsia-500" },
                  { name: "Express", level: 92, color: "from-amber-500 to-orange-500" },
                  { name: "MongoDB", level: 93, color: "from-emerald-500 to-teal-500" },
                  { name: "Node.js", level: 95, color: "from-sky-500 to-indigo-500" },
                ].map((skill) => (

                  <div key={skill.name} className="">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-800 dark:text-gray-200">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div
                      role="progressbar"
                      aria-valuenow={skill.level}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      className="mt-2 h-3 w-full overflow-hidden rounded-full bg-gray-200/70 dark:bg-gray-700/60">

                      <div
                        className={`h-full w-[${skill.level}%] bg-gradient-to-r ${skill.color}`}
                        style={{ width: `${skill.level}%` }}/>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeIn} className="mt-10 flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:shadow-indigo-900/30"
              >
                <Mail className="h-5 w-5" /> Get in touch
              </a>
              <a
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-800 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
              >
                <FolderKanban className="h-5 w-5" /> View projects
              </a>
            </motion.div>
          </motion.div>

          {/* Feature cards (replaces avatar) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="order-2">

            <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl mx-auto">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-purple-500 opacity-30 blur-2xl" />
              <div className="relative rounded-3xl bg-white/80 p-6 shadow-xl ring-2 ring-gray-200/60 backdrop-blur transition-transform dark:bg-gray-800/70 dark:ring-gray-700/60">
                <div className="grid gap-4 sm:grid-cols-2 auto-rows-fr">
                  <div className="group h-full rounded-xl border border-gray-200/70 bg-white/80 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:scale-[1.02] dark:border-gray-700/60 dark:bg-gray-900/40">
                    <div className="flex items-center gap-3">
                      <Palette className="h-5 w-5 text-fuchsia-500" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">UI / UX</h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Thoughtful, accessible interfaces with crisp micro‑interactions.</p>
                  </div>
                  <div className="group h-full rounded-xl border border-gray-200/70 bg-white/80 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:scale-[1.02] dark:border-gray-700/60 dark:bg-gray-900/40">
                    <div className="flex items-center gap-3">
                      <Code2 className="h-5 w-5 text-indigo-500" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">Full‑stack</h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Clean architecture from API to UI with robust tooling.</p>
                  </div>
                  <div className="group h-full rounded-xl border border-gray-200/70 bg-white/80 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:scale-[1.02] dark:border-gray-700/60 dark:bg-gray-900/40">
                    <div className="flex items-center gap-3">
                      <Zap className="h-5 w-5 text-yellow-500" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">Performance</h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Speed, bundle control, and smooth animations without jank.</p>
                  </div>
                  <div className="group h-full rounded-xl border border-gray-200/70 bg-white/80 p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md hover:scale-[1.02] dark:border-gray-700/60 dark:bg-gray-900/40">
                    <div className="flex items-center gap-3">
                      <Trophy className="h-5 w-5 text-purple-500" />
                      <h3 className="font-semibold text-gray-900 dark:text-white">Polish</h3>
                    </div>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">Tiny details that create memorable product quality.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Skills & Tools */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.06 }}
          className="mt-16"
        >
          <motion.h2 variants={fadeIn} className="text-xl font-semibold text-gray-900 dark:text-white">
            Skills & Tools
          </motion.h2>

          {/* Badge grid */}
          <div className="mt-5 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">

            {/* Frontend Development */}
            <div className="items-center">
              <h3 className="mb-2 text-sm font-semibold text-indigo-600 dark:text-indigo-400">Frontend Development</h3>
              <ul className="space-y-2">
                {
                [
                  "React.js",
                  "JavaScript (ES6+)",
                  "Tailwind CSS",
                  "Framer Motion",
                  "Responsive & Accessible UX",
                  "FireBase"
                ].map((skill) => (
                  <motion.li
                    key={skill}
                    variants={fadeIn}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200">
                    {skill}
                  </motion.li>
                ))
                }

              </ul>
            </div>
            {/* Backend Development */}
            <div>
              <h3 className="mb-2 text-sm font-semibold text-fuchsia-600 dark:text-fuchsia-400">Backend Development</h3>
              <ul className="space-y-2">
                {[
                  "Node.js & Express",
                  "MongoDB",
                  "RESTful API Development",
                  "JWT Authentication & Authorization",
                ].map((skill) => (
                  <motion.li
                    key={skill}
                    variants={fadeIn}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
            
            {/* Tools & Practices */}
            <div>
              <h3 className="mb-2 text-sm font-semibold text-purple-600 dark:text-purple-400">Tools & Practices</h3>
              <ul className="space-y-2">
                {[
                  "Git & GitHub",
                  "Vite",
                  "Postman",
                  "Figma",
                  "Version Control & Collaboration",
                ].map((tool) => (
                  <motion.li
                    key={tool}
                    variants={fadeIn}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  >
                    {tool}
                  </motion.li>
                ))}
              </ul>
            </div>
            {/* Deployment */}
            <div>
              <h3 className="mb-2 text-sm font-semibold text-yellow-600 dark:text-yellow-400">Deployment</h3>
              <ul className="space-y-2">
                {[
                  "Vercel",
                  "Render",
                  "Netlify",
                  "Railway",
                ].map((platform) => (
                  <motion.li
                    key={platform}
                    variants={fadeIn}
                    className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  >
                    {platform}
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

          {/* Short blurb */}
          <motion.p variants={fadeIn} className="mt-10 text-lg max-w-3xl text-gray-600 dark:text-gray-300">
            I build fast, purposeful, and reliable interfaces using the MERN stack—rooted in solid architecture, smooth animations, and a maintainable codebase. From crafting scalable React component systems to structuring efficient MongoDB data models, I deliver quality and performance at every stage.


          </motion.p>
        </motion.div>

        {/* CTA banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.06 }}
          className="mt-16"
        >
          <motion.div
            variants={fadeIn}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-600 to-purple-600 p-6 md:p-8 text-white shadow-lg"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
            <h3 className="text-2xl md:text-3xl font-bold">Open to opportunities and collaborations</h3>
            <p className="mt-2 max-w-2xl text-white/90">Have a project in mind? I love building polished, performant apps with React, Node.js, and modern tooling.</p>
            <div className="mt-5 flex flex-wrap gap-4">
              <a href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-gray-900 shadow-sm hover:bg-gray-100/70">
                <Mail className="h-5 w-5" /> Get in touch
              </a>
              <a href="/projects" className="inline-flex items-center gap-2 rounded-lg border border-white/40 px-5 py-3 text-white hover:bg-white/20">
                <FolderKanban className="h-5 w-5" /> View projects
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
