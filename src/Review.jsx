import React from "react";
import { Progress } from 'antd';
import {
    StarOutlined,
    StarFilled
} from '@ant-design/icons';

const reviewStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '50px 70px 50px 40px',
    gap: '30px',
    width: '400px',
    height: '330px',
    background: '#FAF7F2',
    borderRadius: '20px'
}

const reviewNameStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    width: '180px',
    height: '41px',
}

const overallReviewStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '0px',
    width: '320px',
    height: '24px',
}

const reviewDetailsStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '5px',
    height: '105px',
}

const filledStarStyle = {
    color: "#FFD80B",
}
const outlinedStarStyle = {
    color: "#FFD80B"
}

const detailedReviewBarStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: '0px',
    gap: '30px',
    width: '320px',
    height: '17px',
}

export default function Review({ name, subname, reviews }) {


    const detailedReviews = [
        {
            score: '5/5',
            percent: 84,
            reviewNumber: reviews[0]
        },
        {
            score: '4/5',
            percent: 10,
            reviewNumber: reviews[1]
        },
        {
            score: '3/5',
            percent: 4,
            reviewNumber: reviews[2]
        },
        {
            score: '2/5',
            percent: 1,
            reviewNumber: reviews[3]
        },
        {
            score: '1/5',
            percent: 1,
            reviewNumber: reviews[4]
        },
    ]

    return (
        <div style={reviewStyle}>
            <div style={reviewNameStyle}>
                <span style={{
                    width: '162px',
                    height: '24px',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '24px',
                    color: '#000000'
                }}
                >{name}</span>
                <span style={{
                    width: '180px',
                    height: '17px',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#8A8A8A'

                }}
                >{subname}</span>
            </div>
            <div style={overallReviewStyle}>
                <span style={{
                    width: '24px',
                    height: '17px',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#252D42',
                }}>4/5</span>
                <span style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    padding: '0px',
                    height: '24px',
                    gap: '5px',
                }}>
                    <StarFilled style={filledStarStyle} />
                    <StarFilled style={filledStarStyle} />
                    <StarFilled style={filledStarStyle} />
                    <StarFilled style={filledStarStyle} />
                    <StarOutlined style={outlinedStarStyle} />
                </span>
                <span style={{
                    width: '93px',
                    height: '17px',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '14px',
                    lineHeight: '17px',
                    color: '#252D42'
                }}>5480 reviews</span>
            </div>
            <div style={reviewDetailsStyle}>
                {detailedReviews.map(review => {
                    return (
                        <div style={detailedReviewBarStyle}>
                            <span style={{
                                height: '17px',
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                fontSize: '14px',
                                lineHeight: '17px',
                                color: '#252D42',

                            }}>{review.score}</span>
                            <Progress showInfo={false} style={{ width: '120px' }} size="small" strokeColor={'#FFD80B'} trailColor={'#FFF7CA'} percent={review.percent} />
                            <span style={{
                                height: '17px',
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                fontSize: '12px',
                                lineHeight: '17px',
                                color: '#5A5B5B',
                                textAlign: 'justify'
                            }}>{review.reviewNumber} reviews</span>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}