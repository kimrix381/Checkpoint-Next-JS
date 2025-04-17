import Navbar from "../components/navbar";
import "../app/globals.css";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="max-w-xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Contact</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-2 border rounded"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full p-2 border rounded"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </main>
    </>
  );
}
