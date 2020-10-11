import fs from 'fs';
import { config } from '../config';
import { Project } from '../interfaces/Project';

export async function getSortedProjects() {
  const projectsResponse = await fetch(`${config.API_URL}/projects`);
  const projects = await projectsResponse.json();

  projects.forEach(async (project: Project) => {
    const image = await fetch(`${config.API_URL}${project.image.url}`);
    const jsonImage = await image.json();
    const buffer = await jsonImage.buffer();

    try {
      // On vérifie si l'image existe deja
      if (fs.existsSync(`./public/${project.image.name}`)) {
        console.log('File already exist');
      } else {
        // Sinon on la sauvegarde
        fs.writeFile(`./public/${project.image.name}`, buffer, () => console.log('finished downloading!'));
      }
    } catch (err) {
      console.error(err);
    }
  });

  return projects.sort((a: Project, b: Project) => {
    if (a.createdAt < b.createdAt) {
      return 1;
    } else {
      return -1;
    }
  });
}
