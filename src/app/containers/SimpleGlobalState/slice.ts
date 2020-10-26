import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { generateRandomId } from '../../../org/helpers/generateRandomId';

// The initial state of the SimpleGlobalState container
export const initialState: ContainerState = {
  bookmarks: {
    10001: {
      id: 10001,
      title: 'google',
      link: 'https://google.com',
      folderId: 0,
    },
    10002: {
      id: 10002,
      title: 'amazon',
      link: 'https://amazon.com',
      folderId: 0,
    },
  },
  bookmarksToFolders: { 0: [10001, 10002] },
  folders: {
    0: {
      id: 0,
      title: 'bookmarks',
    },
    2001: {
      id: 2001,
      parentFolderId: 0,
      title: 'YEN',
    },
    3001: {
      id: 3001,
      title: 'Yen Nested',
      parentFolderId: 2001,
    },
  },
  foldersToFolders: {
    0: [2001],
    2001: [3001],
  },
  rootFolderId: 0,
};

const simpleGlobalStateSlice = createSlice({
  name: 'simpleGlobalState',
  initialState,
  reducers: {
    addFolder(
      state,
      action: PayloadAction<{ parentFolderId: number; title: string }>,
    ) {
      const id = generateRandomId();
      const { title, parentFolderId } = action.payload;

      state.folders[id] = {
        id,
        title,
        parentFolderId,
      };

      if (!state.foldersToFolders[parentFolderId]) {
        state.foldersToFolders[parentFolderId] = [];
      }
      state.foldersToFolders[parentFolderId].push(id);
    },
    removeFolder(state, action: PayloadAction<number>) {
      const folder = state.folders[action.payload];

      if (!folder) {
        return;
      }

      if (folder.parentFolderId !== undefined) {
        state.foldersToFolders[folder.parentFolderId] = state.foldersToFolders[
          folder.parentFolderId
        ].filter(f => f !== folder.id);
      }

      delete state.folders[action.payload];
    },
    addBookmark(
      state,
      action: PayloadAction<{ title: string; link: string; folderId: number }>,
    ) {
      const id = generateRandomId();
      const { title, link, folderId } = action.payload;
      state.bookmarks[id] = {
        id,
        title,
        link,
        folderId,
      };

      if (!state.bookmarksToFolders[folderId]) {
        state.bookmarksToFolders[folderId] = [];
      }

      state.bookmarksToFolders[folderId].push(id);
    },
    removeBookmark(state, action: PayloadAction<number>) {
      const bookmark = state.bookmarks[action.payload];

      if (!bookmark) {
        return;
      }

      state.bookmarksToFolders[bookmark.folderId] = state.bookmarksToFolders[
        bookmark.folderId
      ].filter(i => i !== bookmark.id);

      delete state.bookmarks[action.payload];
    },
  },
});

export const { actions, reducer, name: sliceKey } = simpleGlobalStateSlice;

export { actions as simpleGlobalStateActions };
