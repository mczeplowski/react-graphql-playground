import { GetRepositoriesDocument } from '../../../generated/graphql-types';

const edges = [
  {
    node: {
      forkCount: 30347,
      id: 'MDEwOlJlcG9zaXRvcnkyODQ1NzgyMw==',
      name: 'freeCodeCamp',
      stargazerCount: 356450,
      url: 'https://github.com/freeCodeCamp/freeCodeCamp',
      __typename: 'Repository'
    },
    __typename: 'SearchResultItemEdge'
  },
  {
    node: {
      forkCount: 21490,
      id: 'MDEwOlJlcG9zaXRvcnkxNzc3MzY1MzM=',
      name: '996.ICU',
      stargazerCount: 264373,
      url: 'https://github.com/996icu/996.ICU',
      __typename: 'Repository'
    },
    __typename: 'SearchResultItemEdge'
  },
  {
    node: {
      forkCount: 52224,
      id: 'MDEwOlJlcG9zaXRvcnkxMzQ5MTg5NQ==',
      name: 'free-programming-books',
      stargazerCount: 253480,
      url: 'https://github.com/EbookFoundation/free-programming-books',
      __typename: 'Repository'
    },
    __typename: 'SearchResultItemEdge'
  },
  {
    node: {
      forkCount: 63430,
      id: 'MDEwOlJlcG9zaXRvcnk2MDQ5MzEwMQ==',
      name: 'coding-interview-university',
      stargazerCount: 237092,
      url: 'https://github.com/jwasham/coding-interview-university',
      __typename: 'Repository'
    },
    __typename: 'SearchResultItemEdge'
  },
  {
    node: {
      forkCount: 24379,
      id: 'MDEwOlJlcG9zaXRvcnkyMTczNzQ2NQ==',
      name: 'awesome',
      stargazerCount: 224409,
      url: 'https://github.com/sindresorhus/awesome',
      __typename: 'Repository'
    },
    __typename: 'SearchResultItemEdge'
  },
  {
    node: {
      forkCount: 31340,
      id: 'MDEwOlJlcG9zaXRvcnk4NTA3NzU1OA==',
      name: 'developer-roadmap',
      stargazerCount: 216843,
      url: 'https://github.com/kamranahmedse/developer-roadmap',
      __typename: 'Repository'
    },
    __typename: 'SearchResultItemEdge'
  },
  {
    node: {
      forkCount: 24417,
      id: 'MDEwOlJlcG9zaXRvcnk1NDM0Njc5OQ==',
      name: 'public-apis',
      stargazerCount: 213525,
      url: 'https://github.com/public-apis/public-apis',
      __typename: 'Repository'
    },
    __typename: 'SearchResultItemEdge'
  },
  {
    node: {
      forkCount: 36317,
      id: 'MDEwOlJlcG9zaXRvcnk4MzIyMjQ0MQ==',
      name: 'system-design-primer',
      stargazerCount: 201780,
      url: 'https://github.com/donnemartin/system-design-primer',
      __typename: 'Repository'
    },
    __typename: 'SearchResultItemEdge'
  },
  {
    node: {
      forkCount: 32993,
      id: 'MDEwOlJlcG9zaXRvcnkxMTczMDM0Mg==',
      name: 'vue',
      stargazerCount: 200411,
      url: 'https://github.com/vuejs/vue',
      __typename: 'Repository'
    },
    __typename: 'SearchResultItemEdge'
  },
  {
    node: {
      forkCount: 40864,
      id: 'MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==',
      name: 'react',
      stargazerCount: 197089,
      url: 'https://github.com/facebook/react',
      __typename: 'Repository'
    },
    __typename: 'SearchResultItemEdge'
  }
];

export const MOCK_GET_REPOSITORIES_SUCCESS_ITEMS = edges.map(
  ({ node }) => node
);

export const MOCK_GET_REPOSITORIES_SUCCESS = {
  request: {
    query: GetRepositoriesDocument,
    variables: {
      after: 'Y3Vyc29yOjA=',
      first: 10,
      query: 'stars:>100000'
    }
  },
  result: {
    data: {
      search: {
        repositoryCount: 36,
        pageInfo: {
          hasNextPage: true,
          hasPreviousPage: false,
          endCursor: 'Y3Vyc29yOjEw',
          startCursor: 'Y3Vyc29yOjE=',
          __typename: 'PageInfo'
        },
        edges,
        __typename: 'SearchResultItemConnection'
      }
    }
  }
};
