import { RegistriesState, RegistriesActions, RegistriesActionType } from '@typedefs/registries.types';

export const registriesReducer = (state: RegistriesState, action: RegistriesActions): RegistriesState => {
  switch (action.type) {
    case RegistriesActionType.ADD_REGISTRIES: {
      return {
        ...state,
        registries: [...state.registries, ...action.payload.registries],
      };
    }
    case RegistriesActionType.CLEAR_REGISTRIES: {
      return {
        ...state,
        registries: [],
      };
    }
    case RegistriesActionType.SET_IS_LOADING: {
      return {
        ...state,
        isLoading: action.payload.isLoading,
      };
    }
    case RegistriesActionType.SET_HAS_MORE: {
      return {
        ...state,
        hasMore: action.payload.hasMore,
      };
    }
    case RegistriesActionType.INCREASE_PAGE: {
      const newPage = state.currentPage + 1;
      return {
        ...state,
        currentPage: newPage,
      };
    }
    case RegistriesActionType.DECREASE_PAGE: {
      const newPage = Math.max(0, state.currentPage - 1);
      return {
        ...state,
        currentPage: newPage,
      };
    }
    default:
      throw new Error('The action you requested does not exists!');
  }
};
