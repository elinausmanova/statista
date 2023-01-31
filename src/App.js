import { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  SlidersOutlined,
  CompassOutlined,
  FieldTimeOutlined,
  CarOutlined,
  AppstoreOutlined,
  EditOutlined,
  LogoutOutlined,
  RiseOutlined,
  FallOutlined
} from '@ant-design/icons';

import AspectScores from './AspectScores';
import Benchmark from './Benchmark';
import './App.css';

const siderStyle = {
  minHeight: '100vh',
};

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}
const siderItems = [
  getItem('Aspect scores', '1', <SlidersOutlined />),
  getItem('Benchmark', '2', <CompassOutlined />),
  getItem('Time series', '3', <FieldTimeOutlined />),
  getItem('Driver analysis', '4', <CarOutlined />),
  getItem('Aspect details', '5', <AppstoreOutlined />),
  getItem('Change Dashboard', '6', <EditOutlined />),
  getItem('Log out', '7', <LogoutOutlined />),
];

function App() {

  const { Sider } = Layout;

  const [pageKey, changePageKey] = useState(1);

  const items = [
    {
      label: 'Device 1',
      key: '1',
    },
    {
      label: 'Device 2',
      key: '2',
    },
    {
      label: 'Device 3',
      key: '3',
    }
  ];

  const onHandleClick = (item) => {
    changePageKey(item.key)
  }

  return (
    <Layout>
      <Sider style={siderStyle}>Sider
        <div
          style={{
            height: 32,
            margin: 16,
            color: 'white',
            fontSize: 24,
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          ReQiew
        </div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={siderItems} onClick={onHandleClick} />

      </Sider>
      {pageKey == 1 && <AspectScores />}
      {pageKey == 2 && <Benchmark />}

    </Layout>
  );
}

export default App;
