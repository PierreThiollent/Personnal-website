import { config } from '../config';

export async function getSortedProjects() {
  const projectsResponse = await fetch(`${config.API_URL}/projects`);
  const projects = await projectsResponse.json();
  return projects.sort((a, b) => {
    if (a.createdAt < b.createdAt) {
      return 1;
    } else {
      return -1;
    }
  });
}
