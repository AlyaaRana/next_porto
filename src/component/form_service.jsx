"use client";
import { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const FormInput = ({ label, name, type = "text", value, onChange, placeholder }) => (
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
      {label}
    </label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="bg-gray-800 text-white text-sm rounded-lg block w-full p-2.5 border-0 focus:ring-2 focus:ring-yellow-400"
    />
  </div>
);

const FormTextarea = ({ label, name, value, onChange, placeholder }) => (
  <div>
    <label className="block mb-1 text-sm font-medium text-gray-900 dark:text-white">
      {label}
    </label>
    <textarea
      name={name}
      rows="5"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required
      className="bg-gray-800 text-white text-sm rounded-lg block w-full p-2.5 border-0 focus:ring-2 focus:ring-yellow-400"
    />
  </div>
);

const FormService = () => {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [hasSent, setHasSent] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const sentStatus = localStorage.getItem("hasSentEmail");
    if (sentStatus === "true") setHasSent(true);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (hasSent) {
      toast.error(
        "⚠️ Kamu sudah mengirim satu pesan. Jika urgent, hubungi saya via LinkedIn:\n👉 https://linkedin.com/in/alyaa-rana-raya-32a763271/"
      );
      return;
    }

    setIsSending(true);
    const currentTime = new Date().toLocaleString();

    toast
      .promise(
        emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
          {
            user_name: form.name,
            user_email: form.email,
            user_subject: form.subject,
            user_message: form.message,
            user_time: currentTime,
          },
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
        ),
        {
          loading: "📨 Sending your message...",
          success: "✅ Message sent successfully!",
          error: "❌ Failed to send message.",
        }
      )
      .then(() => {
        setForm({ name: "", subject: "", email: "", message: "" });
        localStorage.setItem("hasSentEmail", "true");
        setHasSent(true);
        setShowPopup(true);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-xl mx-auto space-y-6">
        <FormInput label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Input your name" />
        <FormInput label="Subject" name="subject" value={form.subject} onChange={handleChange} placeholder="Input subject email" />
        <FormInput label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="Input your email" />
        <FormTextarea label="Message" name="message" value={form.message} onChange={handleChange} placeholder="How can I help you?" />
        <button
          type="submit"
          disabled={isSending}
          className={`w-full border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition font-medium py-2.5 px-5 rounded-lg cursor-pointer ${
            isSending ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isSending ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* ✅ Confirmation Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 w-[90%] max-w-md text-center">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">Pesan terkirim!</h2>
            <p className="mt-2 text-gray-600 dark:text-gray-300">
              Terima kasih sudah menghubungi saya. Jika ini urgent, langsung klik LinkedIn dibawah ini ya 👇
            </p>
            <a
              href="https://linkedin.com/in/alyaa-rana-raya-32a763271/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-yellow-500 hover:underline"
            >
              🔗 LinkedIn-ku
            </a>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-6 px-4 py-2 bg-yellow-400 text-black rounded-lg hover:bg-yellow-500 transition"
            >
              Oke!
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FormService;
