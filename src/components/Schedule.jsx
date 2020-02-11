import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import marketSchedule from '../marketSchedule.js';

function Schedule(props) {
    const scheduleStyle = {
        backgroundColor: 'lightblue',
        height: '300px',
        color: 'black',
        textAlign: 'center',
    };
    const itemStyles = {
        color: 'red',
    };

    return (
        <Carousel style={scheduleStyle} hover="test">
            {marketSchedule.map((day, i) => (
                <Carousel.Item style={itemStyles} key={i}>
                    <h2 style={{ fontSize: '60px' }}>{day.day}</h2>
                    <p style={{ fontSize: '30px' }}>{day.location}</p>
                    <p style={{ fontSize: '30px' }}>{day.hours}</p>
                    <p style={{ fontSize: '30px' }}>{day.booth}</p>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Schedule;
