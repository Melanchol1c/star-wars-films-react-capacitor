import { useSelector } from 'react-redux';

/** Hook for getting data about user. */
export default function useUser() {
  const user = useSelector(state => state.auth.user);

  return user;
}
