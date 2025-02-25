import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./style.css";
import mobiles from "../../../assets/mobiles.svg";
import ellipse from "../../../assets/ellipse.svg";
import ellipse2 from "../../../assets/OrangeEllipse.svg";
import ellipse3 from "../../../assets/largeEllipse.svg";
import device from "../../../assets/ps53.svg";
import Modal from "../../Modals/modal";
import tick from "../../../assets/tick.svg";
import {motion, useScroll} from 'motion/react'

const Banner = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const {scrollYProgress} = useScroll();

  return (
    <>
      <Container>
        <div className="banner-main">
          <Row>
            <Col className="col-lg-8 col-md-12 col-sm-12">
              <div className="banner-left">
                <div style={{ display: "flex" }}>
                  <div>
                    <img src={ellipse} alt="ellipse" className="ellipse1" />
                    <div className="banner-title">
                      <span>IPhone</span>
                      <span className="series-text"> 15 Series</span>
                      <img src={ellipse} alt="ellipse" className="ellipse2" />
                    </div>
                    <img src={mobiles} alt="phones" className="iphone" />
                  </div>

                  <div>
                    <div className="banner-countdown">
                      <div className="countdown">
                        <p>8</p>
                        <p>Days</p>
                      </div>
                      <div className="countdown">
                        <p>8</p>
                        <p>Days</p>
                      </div>
                      <div className="countdown">
                        <p>8</p>
                        <p>Days</p>
                      </div>
                      <div className="countdown">
                        <p>8</p>
                        <p>Days</p>
                      </div>
                    </div>
                    <div className="banner-content">
                      <h3>It feels good to be the first</h3>
                      <p>
                        Get ready for the future of smartphones. Experience
                        innovation like never before. Stay tuned for the big
                        iPhone 15 pre-sale.
                      </p>
                    </div>
                    <div></div>
                    <Button onClick={() => setIsSearchOpen(true)}>
                      Register Now
                    </Button>
                    <img src={ellipse} alt="ellipse" className="ellipse3" />
                  </div>
                </div>
              </div>
            </Col>
            <Col className="col-lg-4 col-md-12 col-sm-12">
              <div className="banner-right">
                <img src={ellipse2} alt="ellipse" className="banner-ellipse4" />
                <h3>Play Station 5</h3>
                <img src={ellipse3} alt="ellipse" className="banner-ellipse5" />
                <p>Digital Edition + 2TB</p>
                <img src={device} alt="device" className="banner-device" />
              </div>
            </Col>
          </Row>
        </div>

        <Modal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)}>
          <div className="complete-modal">
          <div className="done-img">
            <img src={tick} alt="tick" />
          </div>
          <div className="done-content">
            <h3>Well Done</h3>
            <p>Congratulation your account has been successfully created.</p>
          </div>
          </div>
        
        </Modal>
      </Container>
    </>
  );
};

export default Banner;
