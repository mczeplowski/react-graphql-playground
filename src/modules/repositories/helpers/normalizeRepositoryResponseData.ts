import {
  GetRepositoriesQuery,
  Repository
} from '../../../generated/graphql-types';

const isRepository = function (node: unknown): node is Partial<Repository> {
  return !!node && (node as Partial<Repository>).__typename === 'Repository';
};

export const normalizeRepositoryResponseData = (
  data: GetRepositoriesQuery | undefined
): Partial<Repository>[] => {
  const nodes =
    data?.search?.edges?.map(edge => {
      if (!edge || !edge.node) {
        return;
      }

      return edge.node;
    }) ?? [];

  const typedNodes = nodes
    .map((node: unknown) => {
      if (isRepository(node)) {
        return node;
      }

      return null;
    })
    .filter((node): node is NonNullable<typeof node> => node !== null);

  return typedNodes;
};
