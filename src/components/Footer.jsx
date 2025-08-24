import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer  className=" bg-gradient-to-b from-indigo-50/60 to-white dark:from-gray-900 dark:to-gray-950 border-t border-gray-200/60 dark:border-gray-800/60">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Nilaf Portfolio</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
              Building fast, accessible, and elegant web experiences.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-3 text-gray-700 dark:text-gray-200">
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-0.5" />
              <a href="tel:+1234567890" className="text-sm hover:underline">+91 9626202630</a>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-0.5" />
              <a href="mailto:nilafiphone@gmail.com" className="text-sm hover:underline">nilafiphone@gmail.com</a>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-indigo-600 flex-shrink-0 dark:text-indigo-400 mt-0.5" />
              <span className="text-sm">4/152 East Street Keelakarai Ramanathapuram District - 623517 Tamil Nadu</span>
            </div>
          </div>

          {/* Socials */}
          <div className="flex md:justify-end items-start">
            <div className="flex gap-3">
              <a
                href="https://github.com/Nilafahamed7/"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-gray-300/70 bg-white text-gray-800 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:ring-gray-700"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="http://linkedin.com/in/nilaf-ahamed-fullstackdeveloper/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-gray-300/70 bg-white text-gray-800 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-100 dark:ring-gray-700"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-gray-200/60 dark:border-gray-800/60 pt-6">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            © {year} Nilaf. All rights reserved.
          </p>
          {/* <p className="text-sm text-gray-600 dark:text-gray-300 inline-flex items-center gap-1">
            Made with <Heart className="h-4 w-4 text-pink-500" /> in MERN
          </p> */}
        </div>
      </div>
    </footer>
  );
}


