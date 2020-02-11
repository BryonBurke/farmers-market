import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import availableProduce from '../produceSchedule.js';

function Produce(props) {
    const produceStyle = {
        backgroundColor: 'lightgreen',
        height: '600px',
        color: 'black',
        textAlign: 'center',
    };
    const itemStyles = {
        color: 'blue',
    };
    const listStyles = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        listStyleType: 'none',
    };

    return (
        <Carousel style={produceStyle} hover="test">
            {availableProduce.map((month, i) => (
                <Carousel.Item style={itemStyles} key={i}>
                    <h2 style={{ fontSize: '60px' }}>{month.month}</h2>
                    <ul style={listStyles}>
                        {month.selection.map((item, i) => (
                            <li style={{ fontSize: '20px' }}>{item}</li>
                        ))}
                    </ul>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default Produce;
