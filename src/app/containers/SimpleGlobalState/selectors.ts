import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';
import { BookmarkFolderDto } from '../../../org/types/BookmarkFolderDto';

const selectDomain = (state: RootState) =>
  state.simpleGlobalState || initialState;

export const selectSimpleGlobalState = createSelector(
  [selectDomain],
  simpleGlobalStateState => simpleGlobalStateState,
);

export const selectFolderById = createSelector([selectDomain], domain => id => {
  const dto: BookmarkFolderDto = {
    ...domain.folders[id],
    bookmarks: domain.bookmarksToFolders[id] || [],
    folders: domain.foldersToFolders[id] || [],
  };
  return dto;
});

export const selectBookmarkById = createSelector([selectDomain], domain => id =>
  domain.bookmarks[id],
);

export const selectRootFolderId = createSelector(
  [selectDomain],
  domain => domain.rootFolderId,
);
