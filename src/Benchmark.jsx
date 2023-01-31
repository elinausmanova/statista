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
import SelectMenuExtended from './SelectMenuExtended';
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
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '10px',
    gap: '20px',
    width: 'auto',
    height: 'auto',
    left: '467px',
    top: '282px'
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

const reviewComparisonStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: '10px',
    gap: '80px',
    width: '900px',
    height: '350px',
    margin: 'auto'
}

const aspectComparisonStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '10px',
    gap: '80px',
    width: '900px',
    height: '355px',
    margin: 'auto',
}

function getItem(label, key, icon) {
    return {
        key,
        icon,
        label,
    };
}

export default function Benchmark() {

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
            icon: <RiseOutlined />
        },
        {
            name: 'Safety',
            color: '#DEFFC3',
            percent: '72%',
            icon: <RiseOutlined />
        },
        {
            name: 'Design',
            color: '#DEFFC3',
            percent: '93%',
            icon: <RiseOutlined />
        },
        {
            name: 'Service',
            color: '#FFEEC3',
            percent: '64%',
            icon: <FallOutlined />
        },
        {
            name: 'Cleaning',
            color: '#FFEEC3',
            percent: '61%',
            icon: <RiseOutlined />
        },
        {
            name: 'Food Taste',
            color: '#DEFFC3',
            percent: '87%',
            icon: <FallOutlined />
        },
    ]



    return (
        <Layout>
            <Header style={headerStyle}>
                <SelectMenu name='Device type' filterName='All devices' options={menuProps} />
                <SelectMenuExtended name='Brand' filterName='Weber' options={menuProps} />
                <SelectMenuExtended name='Brand' filterName='Weber' options={menuProps} />
                <DateMenu />
                <PriceMenu />
                <ClearMenu />

            </Header>
            <Content style={contentStyle}>
                <div style={reviewComparisonStyle}>
                    <Review name='Total Reviews' subname='Total unfiltered reviews' reviews={[4100, 696, 629, 325, 261]} />
                    <Review name='Total Reviews' subname='Total unfiltered reviews' reviews={[3135, 736, 749, 340, 271]} />
                </div>
                <div style={aspectComparisonStyle}>

                    <div style={gridStyle}>
                        {cards.map(el => {
                            return (
                                <Card name={el.name} percent={el.percent} icon={el.icon} color={'#FAF7F2'} style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    padding: '15px 30px 15px 10px',
                                    gap: '10px',
                                    width: '185px',
                                    height: '105px',
                                    borderRadius: '20px',
                                }} />
                            )
                        })}

                    </div>
                    <div style={gridStyle}>
                        {cards.map(el => {
                            return (
                                <Card name={el.name} percent={el.percent} icon={el.icon} color={'#FAF7F2'} style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    padding: '15px 30px 15px 10px',
                                    gap: '10px',
                                    width: '185px',
                                    height: '105px',
                                    borderRadius: '20px',
                                }} />
                            )
                        })}

                    </div>
                </div>
            </Content>
        </Layout>
    )
}