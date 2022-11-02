import { Input } from 'antd';
import { ChangeEventHandler, FC, useState } from 'react';

import type { SearchProps } from 'antd/es/input';

const { Search } = Input;

export const RepositoriesSearchInput: FC<SearchProps> = props => {
  const [value, setValue] = useState<string | null>(null);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = event => {
    setValue(event.target.value);
  };

  return (
    <Search
      placeholder="Search GitHub Repositories"
      enterButton="Search"
      size="large"
      value={value ?? props.defaultValue}
      onChange={handleOnChange}
      {...props}
    />
  );
};
