import { Button } from "antd";

const selectMenuStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    width: '15%'
}

export default function ClearMenu() {
    return (
        <div style={selectMenuStyle}>
            <div style={{ height: '20px' }}></div>
            <Button style={{ backgroundColor: '#FAF7F2' }}>Clear filters</Button>
        </div>

    )
}