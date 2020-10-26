import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import { simpleGlobalStateActions } from '../../SimpleGlobalState/slice';

interface Props {
  folderId: number;
}

export function AddFolderForm({ folderId }: Props) {
  const [folderName, setFolderName] = useState('');
  const dispatch = useDispatch();

  const addFolderFn = useCallback(() => {
    dispatch(
      simpleGlobalStateActions.addFolder({
        parentFolderId: folderId,
        title: folderName,
      }),
    );
  }, [dispatch, folderId, folderName]);

  return (
    <div className="mt-3">
      <h3>Add folder</h3>
      <div>
        <label>
          Folder Name:
          <input type="text" onChange={e => setFolderName(e.target.value)} />
        </label>
        <button onClick={addFolderFn}>add folder</button>
      </div>
    </div>
  );
}
