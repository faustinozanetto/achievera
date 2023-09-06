'use client';

import React, { createContext, useMemo, useReducer } from 'react';
import { RegistriesContextState } from '@typedefs/registries.types';
import { registriesReducer } from './reducer';

const initialState: RegistriesContextState = {
  state: { registries: [], isLoading: true, hasMore: true, currentPage: 0 },
  dispatch: () => {},
};

export const RegistriesContext = createContext<RegistriesContextState>(initialState);

type RegistriesProviderProps = {
  children: React.ReactNode;
};

export const RegistriesProvider: React.FC<RegistriesProviderProps> = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(registriesReducer, {
    ...initialState.state,
  });

  const memoizedValue = useMemo(() => ({ state, dispatch }), [state]);

  return <RegistriesContext.Provider value={memoizedValue}>{children}</RegistriesContext.Provider>;
};
