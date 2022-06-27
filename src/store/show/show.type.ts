import { PayloadAction } from '@reduxjs/toolkit';

export enum Category {
  MOVIE = 'MOVIE',
  TV_SHOWS = 'TV_SHOWS',
}

export type DataShowInfo = {
  id: number
  title: string
  director: string
  actors: string
  description: string
  cover: string
  category: Category
  episodes: []
};

export type Data = {
  showInfo: DataShowInfo
};

export type Settings = {
  loading: boolean
};

export type Error = string;

export type ShowInfo = {
  data: Data
  settings: Settings
  error: Error
};

export type BaseReducer<Payload> = (state: ShowInfo, action: PayloadAction<Payload>) => void;

export type SetShowInfo = BaseReducer<any>;
export type SetSettings = BaseReducer<Settings>;
export type SetError = BaseReducer<Error>;
