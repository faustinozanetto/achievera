import axios from 'axios';
import { RegistriesActionType } from '@typedefs/registries.types';
import { useToast } from '@hooks/toasts/use-toast';
import { GetRegistriesApiResponse } from '@typedefs/api.types';
import { useQuery } from '@tanstack/react-query';
import { useRegistriesContext } from './use-registries-context';

export const useRegistries = (take: number = 4) => {
  const toast = useToast();

  const { state, dispatch } = useRegistriesContext();

  const { data, isLoading } = useQuery<GetRegistriesApiResponse, Error>({
    queryKey: ['registries', state.currentPage],
    queryFn: async () => {
      const url = new URL('/api/registries', process.env.NEXT_PUBLIC_URL);

      const pagination = {
        skip: state.currentPage * take,
        take,
      };

      url.searchParams.append('take', String(pagination.take));
      url.searchParams.append('skip', String(pagination.skip));

      const response = await axios.get<GetRegistriesApiResponse>(url.toString());
      return response.data;
    },
    keepPreviousData: true,

    onError: (err) => {
      toast({ variant: 'danger', content: err.message });
    },
  });

  const increasePage = () => {
    dispatch({ type: RegistriesActionType.INCREASE_PAGE, payload: {} });
  };

  const decreasePage = () => {
    dispatch({ type: RegistriesActionType.DECREASE_PAGE, payload: {} });
  };

  return {
    increasePage,
    decreasePage,
    registries: data?.registries,
    hasMore: data?.hasMore,
    isLoading,
  };
};
