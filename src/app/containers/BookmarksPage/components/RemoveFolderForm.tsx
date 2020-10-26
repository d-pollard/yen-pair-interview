import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { simpleGlobalStateActions } from '../../SimpleGlobalState/slice';

interface Props {
  folderId: number;
}

export function RemoveFolderForm({ folderId }: Props) {
  const dispatch = useDispatch();
  const deleteFn = useCallback(() => {
    dispatch(simpleGlobalStateActions.removeFolder(folderId));
  }, [dispatch, folderId]);
  return (
    <button onClick={deleteFn} className="text-red-500">
      delete
    </button>
  );
}
