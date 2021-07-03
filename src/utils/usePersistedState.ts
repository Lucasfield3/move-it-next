import { useState, useEffect, Dispatch, SetStateAction } from 'react';
import { useCookies } from 'react-cookie';
import { DefaultTheme } from 'styled-components';

type Response<T> = [
  T,
  Dispatch<SetStateAction<T>>,
  DefaultTheme
];

function usePersistedState<T>(key: string, initialState: T, themes:DefaultTheme): Response<T> {
  const [state, setState] = useState(() => {
    const [cookies, setCookies] = useCookies(['themes']) 

    if (cookies.themes) {
      return cookies.themes;
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    setCookies('themes', String(themes))
  }, [key, state]);

  return [state, setState];
}

export default usePersistedState;