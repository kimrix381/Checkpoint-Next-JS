import Link from "next/link";
import "../app/globals.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">My Portfolio</div>
      <div>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}

// This is a simple Navbar component for a portfolio website.
// It uses Next.js's Link component for client-side navigation.
