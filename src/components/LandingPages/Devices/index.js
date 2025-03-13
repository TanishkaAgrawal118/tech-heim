import React from 'react';
import { Paper } from '@mui/material';
import './style.css';
import { devices } from '../../constants/constant';
import { Container } from 'react-bootstrap';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Devices = () => {
  const settings = {
    dots: false,
    infinite: true, 
    speed: 7000, 
    slidesToShow: 5,
    slidesToScroll: 1, 
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear', 
    arrows: false, 
    pauseOnHover: true,
    rtl: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Container>
    <Slider {...settings} className="devices-slider-wrapper">
      {devices.map((item, index) => (
        <div key={index} className="devices">
          <Paper elevation={3} className="device-container">
            <img src={item.image} alt={item.device} />
            <p>{item.device}</p>
          </Paper>
        </div>
      ))}
    </Slider>
  </Container>
  );
};

export default Devices;
