import { User } from './User';

export interface Tag {
  _id: string;
  createdAt: string;
  created_by: User['_id'];
  id: string;
  name: string;
  updatedAt: string;
  updated_by: User['_id'];
}
