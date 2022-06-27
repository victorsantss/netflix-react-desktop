import { User } from 'store/user/user.type';
import { Shows } from 'store/shows/shows.type';
import { ShowInfo } from 'store/show/show.type';

export type Store = {
  user: User
  shows: Shows
  show: ShowInfo
};
