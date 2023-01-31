import { Layout } from 'antd';
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

import SelectMenu from './SelectMenu';
import DateMenu from './DateMenu';
import PriceMenu from './PriceMenu';
import ClearMenu from './ClearMenu';
import Card from './Card';
import Review from './Review';
import './App.css';


const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  display: 'flex',
  height: 'auto',
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#fff',
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: '10px',
  gap: '10px',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'flex-start',
  padding: '10px',
  gap: '60px',
  width: 'auto',
  height: 'auto',
};

const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridTemplateRows: '1fr 1fr 1fr',
  columnGap: '30px',
  alignItems: 'flex - start',
  rowGap: '10px',
  width: '476px',
}

const subscriptionStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '50px 100px 50px 40px',
  gap: '60px',
  width: '400px',
  height: '230px',
  background: '#D2ECFF',
  borderRadius: '20px'
}

const subscriptionReviewStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '40px',
  width: '400px',
  height: '600px'
}

const versionStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  padding: '0px',
  gap: '5px',
  width: '217px',
  height: '46px'
}

function getItem(label, key, icon) {
  return {
    key,
    icon,
    label,
  };
}

export default function AspectScores() {

  const { Header, Content } = Layout;

  const items = [
    {
      label: 'Choice 1',
      key: '1',
    },
    {
      label: 'Choice 2',
      key: '2',
    },
    {
      label: 'Choice 3',
      key: '3',
    }
  ];

  const menuProps = {
    items,
  };

  const cards = [
    {
      name: 'Quality',
      color: '#DEFFC3',
      percent: '90%',
      icon: <RiseOutlined style={{ fontSize: '150%' }} />
    },
    {
      name: 'Safety',
      color: '#DEFFC3',
      percent: '72%',
      icon: <RiseOutlined style={{ fontSize: '150%' }} />
    },
    {
      name: 'Design',
      color: '#DEFFC3',
      percent: '93%',
      icon: <RiseOutlined style={{ fontSize: '150%' }} />
    },
    {
      name: 'Service',
      color: '#FFEEC3',
      percent: '64%',
      icon: <FallOutlined style={{ fontSize: '150%' }} />
    },
    {
      name: 'Cleaning',
      color: '#FFEEC3',
      percent: '61%',
      icon: <RiseOutlined style={{ fontSize: '150%' }} />
    },
    {
      name: 'Food Taste',
      color: '#DEFFC3',
      percent: '87%',
      icon: <FallOutlined style={{ fontSize: '150%' }} />
    },
  ]

  return (
    <Layout>
      <Header style={headerStyle}>
        <SelectMenu name='Device type' filterName='All devices' options={menuProps} />
        <SelectMenu name='Brand' filterName='Weber' options={menuProps} />
        <SelectMenu name='Model' filterName='All models' options={menuProps} />
        <DateMenu />
        <PriceMenu />
        <ClearMenu />

      </Header>
      <Content style={contentStyle}>
        <div></div>
        <div style={subscriptionReviewStyle}>
          <div style={subscriptionStyle}>
            <div style={versionStyle}>
              <span style={{
                width: 'auto',
                height: '24px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '20px',
                lineHeight: '24px',
                color: '#000000'
              }}

              >Pro Version ON</span>
              <span style={{
                width: 'auto',
                height: '17px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                fontsize: '14px',
                lineHeight: '17px',
                color: '#8A8A8A'
              }}

              >You have access to all functions</span>
            </div>
            <span style={{
              width: '164px',
              height: '24px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '24px',
              color: '#000000',
              cursor: 'pointer'
            }}
            >Edit subscription</span>
          </div>
          <Review name='Reliable Reviews' subname='Anti-spam filtered reviews' reviews={[4135, 636, 729, 320, 281]} />
        </div>

        <div style={gridStyle}>
          {cards.map(el => {
            return (
              <Card name={el.name} percent={el.percent} icon={el.icon} color={el.color} style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '30px 60px 30px 20px',
                gap: '20px',
                width: '213px',
                height: '145px',
                borderRadius: '20px',
              }} />
            )
          })}

        </div>
      </Content>
    </Layout>
  )
}