import { BookmarkFolder } from './BookmarkFolder';

export interface BookmarkFolderDto extends BookmarkFolder {
  bookmarks: number[];
  folders: number[];
}
