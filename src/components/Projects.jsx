import React from "react";
import { motion } from "framer-motion";
import { Github, Globe, Sparkles } from "lucide-react";
import projectsData from "../data/projects.json";

const fadeIn = { hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } };

export default function Projects() {
  // ✅ Always return an array (avoid map() on string)
  const sourceProjects =
    Array.isArray(projectsData) && projectsData.length > 0
      ? projectsData
      : [];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white to-indigo-500/40 dark:from-gray-600 dark:to-gray-950 transition-colors duration-500">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-28 -right-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-fuchsia-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16 pt-28 pb-20 md:pt-36 md:pb-28">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.span
            variants={fadeIn}
            className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-white/70 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm backdrop-blur dark:border-indigo-800/40 dark:bg-gray-800/60 dark:text-gray-200"
          >
            <Sparkles className="h-4 w-4 text-indigo-600 dark:text-indigo-400" />{" "}
            Selected work
          </motion.span>

          <motion.h1
            variants={fadeIn}
            className="mt-3 text-4xl md:text-5xl font-extrabold -tracking-tighter text-gray-900 dark:text-white"
          >
            Projects
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="mt-3 max-w-2xl text-gray-600 dark:text-gray-300"
          >
            A showcase of clean builds, thoughtful UX, and solid engineering.
          </motion.p>

          {/* Grid */}
          <motion.div
            variants={fadeIn}
            className="mt-8 grid grid-cols-1 md:[grid-template-columns:repeat(auto-fit,minmax(280px,1fr))] gap-5 md:gap-6 lg:gap-8"
          >
            {sourceProjects.length > 0 ? (
              sourceProjects.map((p) => (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.35 }}
                  className="group relative h-full overflow-hidden rounded-2xl bg-white/80 shadow-sm ring-1 ring-gray-200/60 backdrop-blur transition hover:-translate-y-0.5 hover:shadow-md dark:bg-gray-800/70 dark:ring-gray-700/60"
                >
                  <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-purple-500 opacity-0 blur-2xl transition group-hover:opacity-20" />

                  {/* Project Image */}
                  {p.image && (
                    <div className="relative aspect-video overflow-hidden rounded-t-2xl">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="h-full w-full object-cover transition group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>
                  )}

                  <div className="relative p-5">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {p.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {p.description}
                    </p>

                    {/* Tech */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-gray-200 bg-white px-2.5 py-1 text-xs text-gray-700 shadow-sm dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="mt-4 flex flex-wrap gap-3">
                      {p.liveUrl ? (
                        <a
                          href={p.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-3 py-2 text-xs font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          <Globe className="h-4 w-4" /> Live demo
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-700 dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-200">
                          <Globe className="h-4 w-4" /> Coming soon
                        </span>
                      )}
                      {p.repoUrl ? (
                        <a
                          href={p.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-3 py-2 text-xs font-medium text-gray-800 shadow-sm hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900/70 dark:text-gray-100"
                        >
                          <Github className="h-4 w-4" /> View code
                        </a>
                      ) : null}
                    </div>
                  </div>
                </motion.article>
              ))
            ) : (
              <p className="text-gray-600 dark:text-gray-400">
                🚧 Projects coming soon...
              </p>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
