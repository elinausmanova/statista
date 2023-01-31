import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

const selectMenuStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px'
}

export default function DateMenu() {
    return (
        <div style={selectMenuStyle}>
            <span style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#252D42',
            }}>Date</span>
            <RangePicker size='small' />
        </div>

    )
}