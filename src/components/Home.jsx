import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Mail, Github, Linkedin,FileUserIcon, Sparkles, Zap, ShieldCheck, Trophy, Info, Layers } from "lucide-react";
import avatar from "../assets/avatar.jpg";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-b from-white to-indigo-50/40 dark:from-gray-900 dark:to-gray-950 transition-colors duration-500">

      {/* Decorative background */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-20 h-80 w-80 lg:h-96 lg:w-96 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-80 w-80 lg:h-96 lg:w-96 rounded-full bg-fuchsia-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-16 py-28 md:py-36">
        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Left: Content */}

          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.08 }}
            className="order-2 lg:order-1">
            <motion.span
              variants={fadeIn}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur dark:border-indigo-800/40 dark:bg-gray-800/60 dark:text-gray-200">
              <Sparkles className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
              Full‑Stack Developer
            </motion.span>

            {/* Welcome message */}
            <motion.p
              variants={fadeIn}
              className="mt-4 text-sm md:text-base text-gray-500 dark:text-gray-400">
              Welcome to my portfolio
            </motion.p>

            <motion.h1
              variants={fadeIn}
              className="mt-4 text-4xl md:text-6xl xl:text-7xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Building
              <span className="mx-2 bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent"> clean, fast, and delightful</span>
              web experiences.
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="mt-7 text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 md:max-w-2xl lg:max-w-3xl">
              Hey I’m <span className="font-semibold text-indigo-600 dark:text-indigo-400 text-3xl">NILAF AHAMED</span>,
              a full-stack developer specializing in the <span className="font-medium text-3xl text-indigo-600 dark:text-indigo-400">MERN stack </span>
              (MongoDB, Express.js, React, Node.js).
              I craft modern, scalable, and visually refined applications with a strong focus on
              performance, accessibility, and delivering exceptional user experiences.
            </motion.p>

            {/* CTAs */}
            <motion.div variants={fadeIn} className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={() => navigate("/projects")}
                className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:shadow-indigo-900/30">
                View projects <ArrowRight size={18} />
              </button>
              <button
                onClick={() => navigate("/about")}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-800 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
              >
                About me <Info size={18} />
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 text-gray-800 shadow-sm transition hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-300 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
              >
                Contact me <Mail size={18} />
              </button>

              <a
                href="/Nilaf_Ahamed_FSW_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-fuchsia-600 px-5 py-3 text-white shadow-lg shadow-indigo-600/20 transition hover:from-indigo-700 hover:to-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
              >
                View Resume <FileUserIcon size={18} />
              </a>

            </motion.div>


            {/* Socials */}
            <motion.div variants={fadeIn} className="mt-6 flex items-center gap-4">
              <a href="https://github.com/Nilafahamed7" target="_blank" rel="noopener noreferrer" title="GitHub"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/nilaf-ahamed-fullstackdeveloper" target="_blank" rel="noopener noreferrer" title="LinkedIn"
                className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">
                <Linkedin className="h-6 w-6" />
              </a>
            </motion.div>

            {/* Feature strip */}
            <motion.div
              variants={fadeIn}
              className="mt-12 grid grid-cols-1 md:[grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-4 md:gap-6 lg:gap-8">
              <div className="h-full min-h-[140px] rounded-xl border border-gray-200 bg-white/80 p-5 md:p-6 lg:p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md backdrop-blur ring-1 ring-gray-200/60 dark:border-gray-700 dark:bg-gray-800/70 dark:ring-gray-700/60">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-lg bg-yellow-400/20 text-yellow-600 dark:text-yellow-400">
                    <Zap className="h-4 w-4 lg:h-5 lg:w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold leading-snug text-gray-900 dark:text-white text-base lg:text-lg">Speed that scales</h3>
                    <p className="mt-1 text-sm lg:text-base leading-relaxed text-gray-600 dark:text-gray-300">Performance without compromise—streamlined bundles, intelligent prefetching, and navigation so fluid it feels invisible.</p>
                  </div>
                </div>
              </div>
              <div className="h-full min-h-[140px] rounded-xl border border-gray-200 bg-white/80 p-5 md:p-6 lg:p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md backdrop-blur ring-1 ring-gray-200/60 dark:border-gray-700 dark:bg-gray-800/70 dark:ring-gray-700/60">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-lg bg-sky-400/20 text-sky-600 dark:text-sky-400">
                    <Layers className="h-4 w-4 lg:h-5 lg:w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold leading-snug text-gray-900 dark:text-white text-base lg:text-lg">Scalable architecture</h3>
                    <p className="mt-1 text-sm lg:text-base leading-relaxed text-gray-600 dark:text-gray-300">Modular components, clear boundaries, and patterns that grow with your product.</p>
                  </div>
                </div>
              </div>
              <div className="h-full min-h-[140px] rounded-xl border border-gray-200 bg-white/80 p-5 md:p-6 lg:p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md backdrop-blur ring-1 ring-gray-200/60 dark:border-gray-700 dark:bg-gray-800/70 dark:ring-gray-700/60">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-lg bg-emerald-400/20 text-emerald-600 dark:text-emerald-400">
                    <ShieldCheck className="h-4 w-4 lg:h-5 lg:w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold leading-snug text-gray-900 dark:text-white text-base lg:text-lg">Solid engineering</h3>
                    <p className="mt-1 text-sm lg:text-base leading-relaxed text-gray-600 dark:text-gray-300">Type‑safe code, tested APIs, and a clear architecture for long‑term growth.</p>
                  </div>
                </div>
              </div>
              <div className="h-full min-h-[140px] rounded-xl border border-gray-200 bg-white/80 p-5 md:p-6 lg:p-7 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md backdrop-blur ring-1 ring-gray-200/60 dark:border-gray-700 dark:bg-gray-800/70 dark:ring-gray-700/60">
                <div className="flex items-start gap-3">
                  <span className="inline-flex h-8 w-8 lg:h-10 lg:w-10 items-center justify-center rounded-lg bg-fuchsia-400/20 text-fuchsia-600 dark:text-fuchsia-400">
                    <Trophy className="h-4 w-4 lg:h-5 lg:w-5" />
                  </span>
                  <div>
                    <h3 className="font-semibold leading-snug text-gray-900 dark:text-white text-base lg:text-lg">Design that feels right</h3>
                    <p className="mt-1 text-sm lg:text-base leading-relaxed text-gray-600 dark:text-gray-300">An experience shaped by intention—elegant motion, balanced hierarchy, and interactions that quietly inspire trust.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Portrait card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-xs sm:max-w-sm md:max-w-sm lg:max-w-md xl:max-w-lg">
              <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-purple-500 opacity-30 blur-2xl" />
              <div className="relative rounded-3xl bg-white/80 p-4 md:p-5 lg:p-6 shadow-xl ring-1 ring-gray-200/60 backdrop-blur dark:bg-gray-800/70 dark:ring-gray-700/60">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                  <img src={avatar} alt="Nilaf" className="h-full w-full object-cover scale-95 md:scale-90" loading="lazy" />
                </div>

                {/* Floating label */}
                <motion.div
                  initial={{ y: 12, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="pointer-events-none absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 rounded-full bg-yellow-300/95 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-gray-900 shadow-lg ring-1 ring-black/10 dark:ring-white/10 backdrop-blur-md">
                  Open for work 🚀
                </motion.div>

                {/* Floating chips */}
                <motion.span
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 rounded-full bg-indigo-600/90 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-white shadow">
                  Remote‑friendly
                </motion.span>
                <motion.span
                  initial={{ y: -10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="absolute top-2 left-2 sm:top-3 sm:left-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] sm:text-xs font-medium text-gray-800 shadow ring-1 ring-gray-200/80 dark:bg-gray-900/80 dark:text-gray-100 dark:ring-gray-700/70">
                  Full‑stack
                </motion.span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
