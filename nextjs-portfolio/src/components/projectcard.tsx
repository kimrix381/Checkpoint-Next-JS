import "../app/globals.css";

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
};

export default function ProjectCard({
  title,
  description,
  imageUrl,
  link,
}: ProjectCardProps) {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} className="project-image" />
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="project-button"
        >
          View Project
        </a>
      </div>
    </div>
  );
}
