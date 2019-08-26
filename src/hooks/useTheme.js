import { useSelector } from 'react-redux';

/** Hook for getting data about theme. */
export default function useTheme() {
  const theme = useSelector(state => state.settings.theme);

  return theme;
}
