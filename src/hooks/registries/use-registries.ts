import axios from 'axios';
import { RegistriesActionType } from '@typedefs/registries.types';
import { useToast } from '@hooks/toasts/use-toast';
import { GetRegistriesApiResponse } from '@typedefs/api.types';
import { useEffect } from 'react';
import { useRegistriesContext } from './use-registries-context';

export const useRegistries = (take: number = 4) => {
  const toast = useToast();
  const { state, dispatch } = useRegistriesContext();

  const fetch = async () => {
    try {
      dispatch({ type: RegistriesActionType.SET_IS_LOADING, payload: { isLoading: true } });

      const url = new URL('/api/registries', process.env.NEXT_PUBLIC_URL);

      const pagination = {
        skip: state.currentPage * take,
        take,
      };

      url.searchParams.append('take', String(pagination.take));
      url.searchParams.append('skip', String(pagination.skip));

      const { data } = await axios.get<GetRegistriesApiResponse>(url.toString());

      dispatch({ type: RegistriesActionType.ADD_REGISTRIES, payload: { registries: data.registries } });
      dispatch({ type: RegistriesActionType.SET_HAS_MORE, payload: { hasMore: data.hasMore } });
    } catch (err) {
      toast({ variant: 'danger', content: 'An error occurred!' });
    } finally {
      dispatch({ type: RegistriesActionType.SET_IS_LOADING, payload: { isLoading: false } });
    }
  };

  const loadMore = () => {
    dispatch({ type: RegistriesActionType.INCREASE_PAGE, payload: {} });
  };

  useEffect(() => {
    fetch();
  }, [state.currentPage]);

  return {
    loadMore,
    ...state,
  };
};
