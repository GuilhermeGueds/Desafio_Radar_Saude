import {
  UserAddOutlined,
  PieChartOutlined,
  SearchOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import "./App.css"
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import React, { useState, useMemo, useCallback } from 'react';
import {
  CreateForm,
  Grafic,
  SearchForm
} from './components';

const CONSTANTS = {
  SCREEN: {
    GRAFIC: '1',
    CREATE_USER: '2',
    SEARCH_USER: '3'
  }
}

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Gráfico', CONSTANTS.SCREEN.GRAFIC, <PieChartOutlined />),
  getItem('Cadastrar', CONSTANTS.SCREEN.CREATE_USER, <UserAddOutlined />),
  getItem('Buscar', CONSTANTS.SCREEN.SEARCH_USER, <SearchOutlined />),

];


function App() {
  const [element, setElement] = useState(CONSTANTS.SCREEN.GRAFIC);
  const [id, setID] = useState('1');

  const openUpdateUser = useCallback((id: string) => {
    setElement(CONSTANTS.SCREEN.CREATE_USER)
    setID(id)
  }, [])

  const layout = useMemo(() => {
    if (element === CONSTANTS.SCREEN.GRAFIC) {
      return <Grafic/>
    } else if (element === CONSTANTS.SCREEN.CREATE_USER) {
      return <CreateForm id={id} />
    } else if (element === CONSTANTS.SCREEN.SEARCH_USER) {
      return <SearchForm openUpdateUser={openUpdateUser} />
    }
  }, [element, id])

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div className="logo" />
        <Menu theme="dark" key={id} defaultSelectedKeys={[id]} mode="inline" items={items} onSelect={(element) => setElement(element.key)} />
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          {layout}
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default App;