import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { simpleGlobalStateActions } from '../../SimpleGlobalState/slice';

interface Props {
  folderId: number;
}

export function AddBookmarkForm({ folderId }: Props) {
  const [link, setLink] = useState('');
  const [title, setTitle] = useState('');
  const dispatch = useDispatch();

  const addFolderFn = useCallback(() => {
    dispatch(
      simpleGlobalStateActions.addBookmark({
        folderId,
        title,
        link,
      }),
    );
  }, [dispatch, folderId, link, title]);

  return (
    <div className="mt-3">
      <h3>Add bookmark</h3>
      <div>
        <label>
          Title:
          <input type="text" onChange={e => setTitle(e.target.value)} />
        </label>
        <label>
          Link:
          <input type="text" onChange={e => setLink(e.target.value)} />
        </label>
        <button onClick={addFolderFn}>add bookmark</button>
      </div>
    </div>
  );
}
