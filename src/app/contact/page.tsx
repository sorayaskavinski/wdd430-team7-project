"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <main className="max-w-7xl mx-auto p-8 flex flex-col gap-12">
        
        <section className="text-center">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-gray-700 mb-2">Email: support@byumarketplace.com</p>
          <p className="text-lg text-gray-700 mb-2">Phone: +1 (808) 123-4567</p>
          <p className="text-lg text-gray-700">Address: 123 Marketplace St, Honolulu, HI</p>
        </section>

        <section className="flex flex-col md:flex-row gap-8">
          <div className="flex-1 bg-gray-100 p-8 rounded-lg">
            <h2 className="text-2xl font-semibold mb-6 text-center">Send Us a Message</h2>
            {submitted && (
              <p className="text-green-600 mb-4 text-center">Thank you! Your message has been sent.</p>
            )}
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 border rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border rounded"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="p-3 border rounded h-32"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="flex-1 h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.0043578019647!2d-157.858333!3d21.306944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c006e5a6e68eaa1%3A0x1f10ebc1e9156f1f!2sHonolulu%2C%20HI!5e0!3m2!1sen!2sus!4v1695600000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>

      </main>
    </>
  );
};

export default ContactPage;
