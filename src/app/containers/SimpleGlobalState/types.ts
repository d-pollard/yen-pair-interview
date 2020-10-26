/* --- STATE --- */
import { Bookmark } from '../../../org/types/Bookmark';
import { BookmarkFolder } from '../../../org/types/BookmarkFolder';

export interface SimpleGlobalStateState {
  bookmarks: Record<number, Bookmark>;
  folders: Record<number, BookmarkFolder>;
  bookmarksToFolders: Record<number, number[]>;
  foldersToFolders: Record<number, number[]>;
  rootFolderId: number;
}

export type ContainerState = SimpleGlobalStateState;
