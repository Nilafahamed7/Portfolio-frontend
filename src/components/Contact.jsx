import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, FileDown, CheckCircle2, AlertTriangle } from "lucide-react";
import Footer from "./Footer";

const fadeIn = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:3000";

  const onChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccess("");
    setError("");
    try {
      await axios.post(`${API_BASE}/api/contact`, form, { timeout: 10000 });
      setSuccess("Thanks! Your message has been sent.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      const message = err?.response?.data?.message || err?.message || "Something went wrong. Please try again.";
      setError(message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative w-full overflow-hidden scroll-mt-28 md:scroll-mt-36 bg-gradient-to-b from-white to-indigo-50/40 dark:from-gray-900 dark:to-gray-950 transition-colors duration-500 min-h-screen">
      {/* Decorative shapes */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-indigo-400/20 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-72 w-72 rounded-full bg-fuchsia-400/10 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 lg:px-16 pt-28 pb-20 md:pt-36 md:pb-28">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} transition={{ staggerChildren: 0.08 }}>
          <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white text-center">
            Get in <span className="bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-purple-500 bg-clip-text text-transparent">Touch</span>
          </motion.h1>
          <motion.p variants={fadeIn} className="mt-4 text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-300 max-w-2xl text-center mx-auto">
            Have a project or opportunity? Drop a message and I’ll get back within 24 hours.
          </motion.p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.06 }}
            className="order-2 lg:order-1"
          >
            <motion.div variants={fadeIn} className="rounded-2xl ring-1 ring-gray-200/60 bg-white/80 p-6 shadow-sm backdrop-blur dark:ring-gray-700/60 dark:bg-gray-800/60">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Contact details</h2>
              <div className="mt-4 space-y-4 text-gray-700 dark:text-gray-200">
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium">Phone</div>
                    <a href="tel:+91 9626202630" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">+91 9626202630</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium">Email</div>
                    <a href="mailto:nilafiphone@gmail.com" className="text-sm text-indigo-600 dark:text-indigo-400 hover:underline">nilafiphone@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-indigo-600 dark:text-indigo-400 mt-0.5" />
                  <div>
                    <div className="text-sm font-medium">Address</div>
                    <div className="text-sm">4/152 East Street Keelakarai Ramanathapuram District - 623517 Tamil Nadu </div>
                  </div>
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="/Nilaf Ahamed FSW resume.pdf"
                  download
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">
                  <FileDown className="h-4 w-4" /> Download Resume
                </a>
                
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.06 }}
            className="lg:col-span-2 order-1 lg:order-2">
            <motion.form
              variants={fadeIn}
              onSubmit={onSubmit}
              className="rounded-2xl ring-1 ring-gray-200/60 bg-white/80 p-6 shadow-lg backdrop-blur dark:ring-gray-700/60 dark:bg-gray-800/50">
              {success && (
                <div className="mb-4 flex items-start gap-3 rounded-lg border border-green-300 bg-green-50 p-3 text-green-800 dark:border-green-800/60 dark:bg-green-900/40 dark:text-green-200">
                  <CheckCircle2 className="h-5 w-5 mt-0.5" />
                  <p className="text-sm">{success}</p>
                </div>
              )}
              {error && (
                <div className="mb-4 flex items-start gap-3 rounded-lg border border-amber-300 bg-amber-50 p-3 text-amber-800 dark:border-amber-800/60 dark:bg-amber-900/40 dark:text-amber-200">
                  <AlertTriangle className="h-5 w-5 mt-0.5" />
                  <p className="text-sm">{error}</p>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    placeholder="John Doe"
                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white/80 px-3 py-2 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    placeholder="you@example.com"
                    className="mt-1 w-full rounded-lg border border-gray-300 bg-white/80 px-3 py-2 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-100"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Subject</label>
                <input
                  required
                  name="subject"
                  value={form.subject}
                  onChange={onChange}
                  placeholder="Let’s build something great"
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white/80 px-3 py-2 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-100"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Message</label>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={onChange}
                  rows={6}
                  placeholder="Tell me about your project..."
                  className="mt-1 w-full rounded-lg border border-gray-300 bg-white/80 px-3 py-2 text-gray-800 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:border-gray-700 dark:bg-gray-900/50 dark:text-gray-100"
                />
              </div>

              <div className="mt-6 flex items-center gap-3">
                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-2.5 text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 disabled:opacity-60">
                  <Send className="h-4 w-4" /> {submitting ? "Sending..." : "Send Message"}
                </button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
      <Footer/>
    </section>
  );
};

export default Contact;