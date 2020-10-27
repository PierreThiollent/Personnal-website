import { Tag } from './Tag';
import { User } from './User';

export interface Project {
  _id: string;
  createdAt: string;
  created_by: User;
  description: string;
  github_url: string;
  id: string;
  image: {
    _id: string;
    alternativeText: string;
    caption: string;
    createdAt: string;
    created_by: User['_id'];
    ext: string;
    hash: string;
    height: number;
    id: string;
    mime: string;
    name: string;
    provider: string;
    size: number;
    updatedAt: string;
    updated_by: User['_id'];
    url: string;
    width: number;
  };
  name: string;
  project_tags: Tag[];
  updatedAt: string;
  updated_by: User;
  url: string;
}
