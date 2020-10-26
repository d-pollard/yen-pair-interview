/**
 *
 * SimpleGlobalState
 *
 */

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectSimpleGlobalState } from './selectors';

interface Props {}

export function SimpleGlobalState(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const simpleGlobalState = useSelector(selectSimpleGlobalState);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  return (
    <>
      <div></div>
    </>
  );
}
