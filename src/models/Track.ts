import type { User } from './User';

export type Track = {
  kind: 'track';
  id: number;
  duration: number;
  commentable: true;
  comment_count: number;
  sharing: 'public';
  tag_list: string;
  streamable: boolean;
  genre: string;
  title: string;
  description: string;
  label_name?: string;
  release_year: number;
  release_month: number;
  release_day: number;
  user: User;
  permalink_url: string;
  artwork_url: string;
  stream_url?: string;
  download_url?: string;
  waveform_url: string;
  user_favorite: boolean;
  user_playback_count: number;
  playback_count: number;
  download_count: number;
  favoritings_count: number;
  reposts_count: number;
  downloadable: boolean;
  access: 'blocked' | 'playable' | 'preview';
};
