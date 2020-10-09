import fs from 'fs';
import { config } from '../config';
export async function getSortedProjects() {
  const projectsResponse = await fetch(`${config.API_URL}/projects`);
  const projects = await projectsResponse.json();

  projects.forEach(async project => {
    const image = await fetch(`${config.API_URL}${project.image.url}`);
    const buffer = await image.buffer();
    fs.writeFile(`./public/${project.image.name}`, buffer, () => console.log('finished downloading!'));
  });

  return projects.sort((a, b) => {
    if (a.createdAt < b.createdAt) {
      return 1;
    } else {
      return -1;
    }
  });
}
