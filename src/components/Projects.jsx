import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Github, Globe, Sparkles } from "lucide-react";
import projectsData from "../data/projects.json";

const fadeIn = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };

export default function Projects() {
  const sourceProjects =
    Array.isArray(projectsData) && projectsData.length > 0
      ? projectsData
      : [];

  useEffect(() => {
    console.log("Projects component mounted");
  }, []);

  return (
    <section className="relative w-full min-h-screen bg-white dark:bg-gray-900">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white to-indigo-50/40 dark:from-gray-900 dark:to-gray-950"></div>
      
      {/* Decorative elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -right-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-fuchsia-400/10 blur-3xl" />
      </div>

      {/* Main content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-16 pt-20 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-28">
        <motion.div
          initial="hidden"
          animate="visible"
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.span
            variants={fadeIn}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur dark:border-indigo-800/40 dark:bg-gray-800/60 dark:text-gray-200"
          >
            <Sparkles className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />
            Selected work
          </motion.span>

          <motion.h1
            variants={fadeIn}
            className="mt-3 text-3xl sm:text-4xl md:text-5xl font-extrabold -tracking-tighter text-gray-900 dark:text-white"
          >
            Projects
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="mt-3 max-w-2xl text-gray-600 dark:text-gray-300"
          >
            A showcase of clean builds, thoughtful UX, and solid engineering.
          </motion.p>

          {/* Projects Grid */}
          <motion.div
            variants={fadeIn}
            className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
          >
            {sourceProjects.length > 0 ? (
              sourceProjects.map((project) => (
                <motion.article
                  key={project.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35 }}
                  className="group relative h-full overflow-hidden rounded-2xl bg-white/80 shadow-sm ring-1 ring-gray-200/60 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:bg-gray-800/70 dark:ring-gray-700/60"
                >
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-purple-500 opacity-0 blur-2xl transition group-hover:opacity-20" />

                  {/* Project Image */}
                  {project.image && (
                    <div className="relative w-full h-40 sm:h-48 md:h-56 lg:h-64 overflow-hidden rounded-t-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition group-hover:scale-105"
                        loading="lazy"
                        onError={(e) => {
                          console.error(`Failed to load image: ${project.image}`);
                          e.target.style.display = 'none';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  )}

                  <div className="relative p-4 sm:p-5">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {Array.isArray(project.tech) &&
                        project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-200"
                          >
                            {tech}
                          </span>
                        ))}
                    </div>

                    {/* Project Links */}
                    <div className="mt-4 flex flex-wrap gap-3">
                      {project.liveUrl ? (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-indigo-700 transition"
                        >
                          <Globe className="h-4 w-4" /> Live demo
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-200">
                          <Globe className="h-4 w-4" /> Coming soon
                        </span>
                      )}
                      {project.repoUrl ? (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-800 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-100 transition"
                        >
                          <Github className="h-4 w-4" /> View code
                        </a>
                      ) : null}
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <div className="col-span-full flex items-center justify-center py-20">
                <p className="text-gray-600 dark:text-gray-400 text-center">
                  🚧 Projects coming soon...
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
