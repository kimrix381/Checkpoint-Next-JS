import Navbar from "../components/navbar";
import "../app/globals.css";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p className="text-gray-700">
          I'm a developer with a strong passion for front-end development,
          Next.js, and clean UI.
        </p>
      </main>
    </>
  );
}
