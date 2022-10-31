import { Table, TableProps } from 'antd';
import { FC } from 'react';

import { Repository } from '../../../generated/graphql-types';

interface RepositoryTableProps extends TableProps<Partial<Repository>> {}

export const RepositoriesTable: FC<RepositoryTableProps> = props => {
  return (
    <Table
      rowKey={'id'}
      columns={[
        {
          title: 'Name',
          dataIndex: 'name',
          render: (name, { url }) => {
            return (
              <a href={url} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            );
          },
          width: '50%'
        },
        {
          title: 'Stars',
          dataIndex: 'stargazerCount',
          render: stargazerCount => `🌟 ${stargazerCount}`,
          width: '25%'
        },
        {
          title: 'Forks',
          dataIndex: 'forkCount',
          render: forkCount => `🍴 ${forkCount}`,
          width: '25%'
        }
      ]}
      {...props}
    />
  );
};
