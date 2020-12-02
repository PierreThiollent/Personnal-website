import { Project } from '@interfaces/Project';
import { config } from 'config';
import fs from 'fs';
import fetch from 'node-fetch';

export async function getSortedProjects(): Promise<Project[]> {
  const projectsResponse = await fetch(`${config.API_URL}/projects`);
  const projects = await projectsResponse.json();

  // Pour chaque projet récupéré
  projects.forEach(async (project: Project) => {
    // On fetch l'image
    const image = await fetch(`${config.API_URL}${project.image.url}`);

    // On recupère le buffer
    const buffer = await image.buffer();

    try {
      // On vérifie si l'image existe deja
      if (fs.existsSync(`./public/${project.image.name}`)) {
        console.log('File already exist');
      } else {
        // Sinon on la sauvegarde
        fs.writeFile(`./public/${project.image.name}`, buffer, () => console.log('Image downloaded !'));
      }
    } catch (err) {
      console.error(err);
    }
  });

  // On trie les projets par date de création
  return projects.sort((a: Project, b: Project) => {
    if (a.createdAt < b.createdAt) {
      return 1;
    } else {
      return -1;
    }
  });
}
