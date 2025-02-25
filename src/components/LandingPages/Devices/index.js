import React, { useRef } from 'react';
import { Paper } from '@mui/material';
import './style.css';
import { devices } from '../../constants/constant'
import { Container } from 'react-bootstrap';

const Devices = () => {
  return (
    <Container>
 <div className="devices">
      {devices.map((item, index) => (
        <Paper elevation={3} className="device-container" key={index}>
          <img src={item.image} alt={item.device} />
          <p>{item.device}</p>
        </Paper>
      ))}
    </div>
    </Container>
   
  );
};

export default Devices;
