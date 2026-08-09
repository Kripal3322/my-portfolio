"use client";

import { FormEvent, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState("");

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!form.current) return;

    setStatus("Sending...");

    try {
      await emailjs.sendForm(
        "service_i9fkw3p",
        "template_4zfbqvs",
        form.current,
        {
          publicKey: "gF-WOHXJ3T2OLcEHz",
        }
      );

      setStatus("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="w-full overflow-hidden bg-[#030712] px-4 py-24 text-white sm:px-6"
    >
      <div className="mx-auto w-full max-w-6xl">

        {/* Heading */}
        <div className="mb-12">
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.35em] text-sky-400">
            Contact
          </p>

          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s Connect
          </h2>

          <p className="mt-4 max-w-2xl text-gray-400">
            Have a project, opportunity, or just want to connect?
            Feel free to reach out.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid gap-6 md:grid-cols-2">

          {/* Contact Information */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">

            <h3 className="text-2xl font-semibold">
              Get in touch
            </h3>

            <p className="mt-4 leading-7 text-gray-400">
              I&apos;m always open to discussing projects, opportunities,
              collaborations, and new ideas.
            </p>

            <div className="mt-8 space-y-6">

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="mt-1 break-all text-gray-300">
                  srinivasannaidu666@gmail.com
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="mt-1 text-gray-300">
                  India
                </p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">

            <form
              ref={form}
              onSubmit={sendEmail}
              className="space-y-5"
            >

              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm text-gray-400"
                >
                  Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-sky-400"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm text-gray-400"
                >
                  Email
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-sky-400"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm text-gray-400"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Subject"
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-sky-400"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm text-gray-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Your message"
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none transition placeholder:text-gray-600 focus:border-sky-400"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "Sending..."}
                className="w-full rounded-xl bg-sky-500 px-6 py-3 font-medium text-white transition hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "Sending..." ? "Sending..." : "Send Message"}
              </button>

              {/* Status */}
              {status && (
                <p
                  className={`text-center text-sm ${
                    status === "Message sent successfully!"
                      ? "text-green-400"
                      : "text-gray-400"
                  }`}
                >
                  {status}
                </p>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}