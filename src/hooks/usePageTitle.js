import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setPageTitle } from '../layouts/store/actions';

/**
 * Hook for setting page title.
 *
 * @param {string} title Page title.
 */
export default function usePageTitle(title) {
  const dispatch = useDispatch();
  const pageTitle = useSelector(state => state.layout.pageTitle);

  useEffect(() => {
    dispatch(setPageTitle(title));
    return () => dispatch(setPageTitle(''));
  }, [title, dispatch]);

  return { pageTitle };
}
