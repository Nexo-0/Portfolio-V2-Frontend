import { useState } from "react";
import { SectionWrapper } from "../components/ui/SectionWrapper";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {

      const res = await fetch(
        "https://portfolio-v2-backend-ecka.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await res.json();

      if (data.success) {

        alert("✅ Email sent successfully! I will get back to you soon.");

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });

      } else {

        alert("❌ Failed to send message. Please try again.");

      }

    } catch (error) {

      console.error(error);
      alert("⚠️ Server error. Please try again later.");

    }

    setLoading(false);
  };

  return (
    <SectionWrapper id="contact" className="mb-20">

      <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center gap-3">
        <span className="text-primary">04.</span> Contact
      </h2>

      <div className="grid md:grid-cols-2 gap-12">

        {/* Left info section */}

        <div>
          <p className="text-secondary text-lg mb-8">
            I am available for freelance work and collaboration.
          </p>

          <div className="space-y-6">

            <div className="flex items-center gap-4">
              <Mail className="text-primary"/>
              <span>contact@kunalpetare.in</span>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="text-primary"/>
              <span>+91 9373805186</span>
            </div>

            <div className="flex items-center gap-4">
              <Linkedin className="text-primary"/>
              <a
                href="https://www.linkedin.com/in/kunal-petare"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="text-primary"/>
              <span>Maharashtra, India</span>
            </div>

          </div>
        </div>

        {/* Contact Form */}

        <form
          onSubmit={handleSubmit}
          className="space-y-4 bg-surface/30 p-8 rounded-2xl border border-white/5"
        >

          <div className="grid grid-cols-2 gap-4">

            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              type="text"
              placeholder="Name"
              required
              className="bg-background border border-white/10 p-3 rounded-lg text-white"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              placeholder="Email"
              required
              className="bg-background border border-white/10 p-3 rounded-lg text-white"
            />

          </div>

          <input
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            type="text"
            placeholder="Subject"
            className="w-full bg-background border border-white/10 p-3 rounded-lg text-white"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            placeholder="Message"
            required
            className="w-full bg-background border border-white/10 p-3 rounded-lg text-white"
          />

          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-background font-bold py-3 px-8 rounded-lg w-full hover:bg-primary/90 transition-all"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>

      </div>

    </SectionWrapper>
  );
};