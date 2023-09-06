import React from 'react';
import { DailyRegistry } from '@prisma/client';
import { ActionMap } from './app.types';

export type SafeRegistry = Pick<DailyRegistry, 'content' | 'createdAt' | 'id'>;

export type RegistriesState = {
  currentPage: number;
  hasMore: boolean;
  isLoading: boolean;
  registries: SafeRegistry[];
};

export type RegistriesContextState = {
  dispatch: React.Dispatch<RegistriesActions>;
  state: RegistriesState;
};

export enum RegistriesActionType {
  SET_IS_LOADING,
  SET_HAS_MORE,
  ADD_REGISTRIES,
  CLEAR_REGISTRIES,
  INCREASE_PAGE,
  DECREASE_PAGE,
}

type RegistriesPayload = {
  [RegistriesActionType.SET_IS_LOADING]: {
    isLoading: boolean;
  };
  [RegistriesActionType.SET_HAS_MORE]: {
    hasMore: boolean;
  };
  [RegistriesActionType.ADD_REGISTRIES]: {
    registries: SafeRegistry[];
  };
  [RegistriesActionType.CLEAR_REGISTRIES]: {};
  [RegistriesActionType.INCREASE_PAGE]: {};
  [RegistriesActionType.DECREASE_PAGE]: {};
};

export type RegistriesActions = ActionMap<RegistriesPayload>[keyof ActionMap<RegistriesPayload>];
