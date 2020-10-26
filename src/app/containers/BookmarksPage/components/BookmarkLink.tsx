import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectBookmarkById } from '../../SimpleGlobalState/selectors';
import { simpleGlobalStateActions } from '../../SimpleGlobalState/slice';

interface Props {
  bookmarkId: number;
}

export function BookmarkLink({ bookmarkId }: Props) {
  const bookmark = useSelector(selectBookmarkById)(bookmarkId);
  const dispatch = useDispatch();

  const removeBookmarkFn = useCallback(() => {
    dispatch(simpleGlobalStateActions.removeBookmark(bookmarkId));
  }, [bookmarkId, dispatch]);
  return (
    <div>
      <a href={bookmark.link}>{bookmark.title}</a>
      <button className="text-red-500" onClick={removeBookmarkFn}>
        remove
      </button>
    </div>
  );
}
