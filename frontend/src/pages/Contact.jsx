import { useState } from "react";

function Contact() {

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {

    e.preventDefault();

    alert("Message Sent Successfully 🎉");

    setName("");
    setEmail("");
    setMessage("");

  };

  return (

    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">

      <div className="bg-white w-full max-w-2xl p-8 rounded-3xl shadow-2xl">

        <h1 className="text-4xl font-bold text-blue-600 mb-6 text-center">
          Contact & Support 📩
        </h1>

        <p className="text-gray-600 text-center mb-8">
          Have questions, feedback, or support requests?
          Reach out to us anytime.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border p-4 rounded-xl"
            required
          />

          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-4 rounded-xl"
            required
          />

          <textarea
            placeholder="Write your message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border p-4 rounded-xl h-40"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 rounded-xl text-lg font-semibold"
          >
            Send Message
          </button>

        </form>

      </div>

    </div>

  );

}

export default Contact;