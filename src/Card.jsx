import React from "react";

export default function Card({ name, percent, icon, color, style }) {

  style.backgroundColor = color;

  return (
    <div style={style}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: '0px',
        width: '100px',
        height: '36px'
      }}>

        <span style={{
          width: 'auto',
          height: '24px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '600',
          fontSize: '20px',
          lineHeight: '24px',
          color: '#000000'
        }}>
          {name}</span>
        <span style={{
          width: 'auto',
          height: '12px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '300',
          fontSize: '10px',
          lineHeight: '12px',
          color: '#8A8A8A'

        }}>
          Score out of 100
        </span>

      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '0px',
        gap: '20px',
        width: '133px',
        height: '29px',
        lineHeight: 0
      }}>
        <span style={{
          width: '49px',
          height: '29px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '24px',
          lineHeight: '29px',
          color: '#000000'
        }}>
          {percent}
        </span>
        <span style={{
          color: '#000000',
          width: '24px',
          height: '24px',
        }}>
          {icon}
        </span>
      </div>

    </div>
  )
}