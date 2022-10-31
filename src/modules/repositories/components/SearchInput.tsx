import { Input } from 'antd';

import type { FC } from 'react';
import type { SearchProps } from 'antd/es/input';

const { Search } = Input;

export const RepositoriesSearchInput: FC<SearchProps> = props => (
  <Search
    placeholder="Search GitHub Repositories"
    enterButton="Search"
    size="large"
    {...props}
  />
);
