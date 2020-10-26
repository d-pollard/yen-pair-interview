import React from 'react';
import { BookmarkFolderDisplay } from './components/BookmarkFolderDisplay';
import { useSelector } from 'react-redux';
import { selectRootFolderId } from '../SimpleGlobalState/selectors';

export function BookmarksPage() {
  const rootId = useSelector(selectRootFolderId);

  return (
    <div className="ml-10">
      <BookmarkFolderDisplay
        canDelete={false}
        folderId={rootId}
        startOpened={true}
      />
    </div>
  );
}
