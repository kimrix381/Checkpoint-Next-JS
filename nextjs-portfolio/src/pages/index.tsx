import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProjectCard from "../components/projectcard";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="hero">
        <h1>Hello, I'm a Next.js Developer!</h1>
        <p>
          Welcome to my portfolio. Check out my projects and feel free to reach
          out!
        </p>
      </section>

      <section
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        <ProjectCard
          title="Weather App"
          description="A simple weather app built with TypeScript and OpenWeather API."
          imageUrl="/weather-app.jpg"
          link="https://your-weather-app.com"
        />
        <ProjectCard
          title="Portfolio Website"
          description="My personal portfolio website built using Next.js and plain CSS."
          imageUrl="/portfolio.jpg"
          link="https://your-portfolio.com"
        />
      </section>

      <Footer />
    </>
  );
}
