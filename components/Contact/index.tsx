"use client";
import React, { useState } from "react";
import { API_BASE_URL } from "../../endpoint/endpoint";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<{ success?: string; error?: string }>({});

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus({});
    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus({ success: data.message });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({ error: data.message || "Failed to send message." });
      }
    } catch {
      setStatus({ error: "Failed to send message." });
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28 flex items-center justify-center min-h-screen">
      <div className="container flex justify-center">
        <div className="w-full max-w-2xl px-4">
          <div
            className="wow fadeInUp shadow-three dark:bg-gray-dark mb-12 rounded-sm bg-white px-8 py-11 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
            data-wow-delay=".15s"
          >
            <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl text-center">
              Need Help? Open a Ticket
            </h2>
            <p className="mb-12 text-base font-medium text-body-color text-center">
              Our support team will get back to you ASAP via email.
            </p>
            {status.success && (
              <div className="mb-4 text-green-600 font-semibold text-center">{status.success}</div>
            )}
            {status.error && (
              <div className="mb-4 text-red-600 font-semibold text-center">{status.error}</div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="-mx-4 flex flex-wrap">
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label
                      htmlFor="name"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Name
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      required
                    />
                  </div>
                </div>
                <div className="w-full px-4 md:w-1/2">
                  <div className="mb-8">
                    <label
                      htmlFor="email"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      required
                    />
                  </div>
                </div>
                <div className="w-full px-4">
                  <div className="mb-8">
                    <label
                      htmlFor="message"
                      className="mb-3 block text-sm font-medium text-dark dark:text-white"
                    >
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Enter your Message"
                      className="border-stroke dark:text-body-color-dark dark:shadow-two w-full resize-none rounded-sm border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-none focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:focus:border-primary dark:focus:shadow-none"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="w-full px-4 flex justify-center">
                  <button className="shadow-submit dark:shadow-submit-dark rounded-sm bg-primary px-9 py-4 text-base font-medium text-white duration-300 hover:bg-primary/90">
                    Submit Ticket
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;