import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProjectCard from "../components/projectcard";

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="projects-page">
        <h1>My Projects</h1>
        <div className="projects-grid">
          <ProjectCard
            title="Weather App"
            description="A sleek weather app built with OpenWeather API and TypeScript."
            imageUrl="https://media.gettyimages.com/id/1383026300/photo/its-raining-heavily-wearing-an-umbrella-during-the-rainy-season.jpg?s=612x612&w=gi&k=20&c=DgfoOeligEahUMb-xN73TTcRhdLtWVmfG9saNG2t_nQ="
            link="https://your-weather-app.com"
          />
          <ProjectCard
            title="Portfolio Site"
            description="This portfolio site you're looking at — built with Next.js and plain CSS."
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmEEw12ehjg103P5Me-w6wCDHoGtXcTCO8Ig&s"
            link="https://your-portfolio.com"
          />
          <ProjectCard
            title="To-Do App"
            description="A minimal to-do app with local storage and React hooks."
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShNYforJvV5abpUGrxZdxWaUFzCAnN0u-RlA&s"
            link="https://your-todo-app.com"
          />
        </div>
      </main>
      <Footer />
    </>
  );
}
