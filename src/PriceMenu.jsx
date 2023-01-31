import { Slider } from 'antd';

const selectMenuStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '5px',
    width: '15%'
}

export default function PriceMenu() {
    return (
        <div style={selectMenuStyle}>
            <span style={{
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 600,
                fontSize: '14px',
                lineHeight: '20px',
                color: '#252D42',
            }}>Price</span>
            <Slider
                max={2000}
                range={{
                    draggableTrack: true,
                }}
                defaultValue={[89, 1289]}
            />
        </div>

    )
}