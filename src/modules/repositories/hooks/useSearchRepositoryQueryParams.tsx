import { useRouter } from 'next/router';

import { GetRepositoriesQueryVariables } from '../../../generated/graphql-types';

export const useSearchRepositoryQueryParams = () => {
  const router = useRouter();

  const queryPrams = router.query as GetRepositoriesQueryVariables;

  const pushParams = (query: GetRepositoriesQueryVariables) => {
    router.push({
      query
    });
  };

  return { queryPrams, pushParams };
};
