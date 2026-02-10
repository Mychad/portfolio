import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission with EmailJS
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS configuration from .env
    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs.send(serviceID, templateID, formData, publicKey).then(
      () => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      },
      (error) => {
        setStatus("Failed to send message. Please try again.");
        setIsSubmitting(false);
        console.error("EmailJS error:", error);
      }
    );
  };

  return (
    <div className="flex flex-col font-thin dark:text-white text-black w-full mx-auto mt-10 mb-5">
      <h2 className="text-2xl md:text-3xl font-semibold mb-2 border-b border-black/10 dark:border-white/10 pb-2">
        Contact Me 📬
      </h2>
      <p className="text-sm mb-6 text-black/70 dark:text-white/70">
        Get in touch with me for inquiries, collaborations, or just to say hi!
      </p>

      <div
        className="p-5 rounded-lg backdrop-blur-md border bg-white/10 dark:bg-black/10 border-x-4 hover:border-y-1 box-border border-black/20 dark:border-white/10 transition-all duration-300"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name Input */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-sm mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="p-2 rounded-md bg-black/10 dark:bg-white/10 text-black dark:text-white border border-black/20 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-black/30 dark:focus:ring-white/30"
              placeholder="Your Name"
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="p-2 rounded-md bg-black/10 dark:bg-white/10 text-black dark:text-white border border-black/20 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-black/30 dark:focus:ring-white/30"
              placeholder="Your Email"
            />
          </div>

          {/* Message Input */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-sm mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              className="p-2 rounded-md bg-black/10 dark:bg-white/10 text-black dark:text-white border border-black/20 dark:border-white/20 focus:outline-none focus:ring-2 focus:ring-black/30 dark:focus:ring-white/30"
              placeholder="Your Message"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-black/20 dark:bg-white/20 hover:bg-black/30 dark:hover:bg-white/30 transition-colors duration-300 ${
              isSubmitting ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <FaPaperPlane />
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>

          {/* Status Message */}
          {status && (
            <p
              className={`text-sm mt-3 ${
                status.includes("successfully")
                  ? "text-green-600 dark:text-green-400"
                  : "text-red-600 dark:text-red-400"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactForm;