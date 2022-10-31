import 'antd/dist/antd.css';

import { Layout } from 'antd';
import { FC, PropsWithChildren } from 'react';

import { Logo } from '../Logo/Logo';
import { PageContainer } from './ApplicationLayout.styles';

const { Header, Footer, Content } = Layout;

const ApplicationLayout: FC<PropsWithChildren> = ({ children }) => (
  <Layout>
    <Header>
      <Logo />
    </Header>
    <Content>
      <PageContainer>{children}</PageContainer>
    </Content>
    <Footer>Mateusz Czepłowski - 2022</Footer>
  </Layout>
);

export { ApplicationLayout };
