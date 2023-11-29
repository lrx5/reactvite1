import { Link } from 'react-router-dom';
import './Projects.css';

interface Project {
  id: number;
  file: string;
  title: string;
  description: string;
  img: string;
}

const Projects: React.FC = () => {
  // Dummy data for project cards
  const projects: Project[] = [
    { id: 10, file: 'karzhyn-website', title: 'Karzhyn Website', description: 'Bootstrap', img: 'karzhyn_t.png' },
    { id: 9, file: 'friends-list-website', title: 'Friends List', description: 'Bootstrap', img: 'friendslistv_t.png' },
    { id: 8, file: 'ProjectThree', title: 'Memory', description: 'Blender', img: 'memory_t.png' },
    { id: 7, file: 'ProjectFour', title: 'Salad Kitchen', description: 'Blender', img: 'salad_t.jpg' },
    { id: 6, file: 'ProjectFive', title: 'King Tiger', description: 'Blender', img: 'kingtiger_t.png' },
    { id: 5, file: 'ProjectSix', title: '"Start Up" Themed backgrounds', description: 'Blender', img: 'startup_t.png' },
    { id: 4, file: 'ProjectSeven', title: 'Mystery Word: Five Words', description: 'Unity', img: 'mw_t.jpg' },
    { id: 3, file: 'ProjectEight', title: 'CafEight', description: 'Blender', img: 'cafeight_t.png' },
    { id: 2, file: 'ProjectNine', title: 'RX-7 Model', description: 'Blender', img: 'rx7_t.png' },
    { id: 1, file: 'ProjectTen', title: 'Ingen', description: 'Blender', img: 'ingen_t.png' },
    // Add more projects as needed
  ];

  return (
    <div className="projects-grid">
      {projects.map((project, index) => (
        <Link key={project.id} to={`/${project.file}`}>
          <div className="project-card" style={{ animationDelay: `${index * 0.2}s` }}>
            <div>
              <img src={`src/assets/${project.img}`} alt="" />
            </div>
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Projects;
