import React from "react";
import { Button, Space, Dropdown } from 'antd';
import {
    DownOutlined
} from '@ant-design/icons';
import './SelectMenu.css';



const selectMenuStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
}

export default function SelectMenu({ name, filterName, options }) {
    return (
        <div style={selectMenuStyle}>
            <span style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#252D42',
            }}>{name}</span>
            <Dropdown menu={options} trigger={['click']}>
                <Button style={{ backgroundColor: '#FAF7F2' }}>
                    <Space>
                        {filterName}
                        <DownOutlined style={{ fontSize: '10px', color: '#8A8A8A' }} />
                    </Space>
                </Button>
            </Dropdown>
        </div>
    )
}