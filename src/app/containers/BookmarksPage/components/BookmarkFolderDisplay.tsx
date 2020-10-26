import React, { useState } from 'react';
import { BookmarkLink } from './BookmarkLink';
import { useSelector } from 'react-redux';
import { selectFolderById } from '../../SimpleGlobalState/selectors';
import { AddFolderForm } from './AddFolderForm';
import { RemoveFolderForm } from './RemoveFolderForm';
import { AddBookmarkForm } from './AddBookmarkForm';

interface Props {
  folderId: number;
  canDelete?: boolean;
  startOpened?: boolean;
}

export function BookmarkFolderDisplay({
  folderId,
  canDelete = true,
  startOpened = false,
}: Props) {
  const bookmarkFolder = useSelector(selectFolderById)(folderId);
  const [isExpanded, setIsExpanded] = useState(startOpened);

  return (
    <div>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        <span>{isExpanded ? '-' : '+'}</span>
        {bookmarkFolder.title}
      </button>
      {isExpanded && (
        <div>
          <div className="ml-5">
            {bookmarkFolder.bookmarks.map(bookmark => (
              <BookmarkLink bookmarkId={bookmark} key={bookmark} />
            ))}
            <AddBookmarkForm folderId={folderId} />
          </div>
          <div className="ml-5">
            {bookmarkFolder.folders.map(folder => (
              <BookmarkFolderDisplay folderId={folder} key={folder} />
            ))}
            <AddFolderForm folderId={folderId} />
            {canDelete && <RemoveFolderForm folderId={folderId} />}
          </div>
        </div>
      )}
    </div>
  );
}
