import { Tag } from './Tag';

export interface Project {
  _id: string;
  createdAt: string;
  created_by: Created_by;
  description: string;
  github_url: string;
  id: string;
  image: {
    _id: string;
    alternativeText: string;
    caption: string;
    createdAt: string;
    created_by: Created_by;
    ext: string;
    hash: string;
    height: number;
    id: string;
    mime: string;
    name: string;
    provider: string;
    size: number;
    updatedAt: string;
    updated_by: string;
    url: string;
    width: number;
  };
  name: string;
  project_tags: Tag[];
  updatedAt: string;
  updated_by: Updated_by;
  url: string;
}

interface Updated_by {
  _id: string;
  createdAt: string;
  firstname: string;
  id: string;
  lastname: string;
  updatedAt: string;
  username: string | null;
}

interface Created_by {
  _id: string;
  createdAt: string;
  firstname: string;
  id: string;
  lastname: string;
  updatedAt: string;
  username: string | null;
}
