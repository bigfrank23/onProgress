import React from 'react'
import Img from '../../images/living-generously.jpg'
import Img2 from '../../images/bg2.jpg'
import PFN from '../../images/PFN4.png'
import styled from 'styled-components'
import Button from '../Button/Button'
import { Link } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  margin-top: 2rem;
  background: url(${Img2});
  .topFooter {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url(${Img});
    height: 50vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4rem;
    .center {
      .lineShape {
        width: 50%;
        height: 20px;
        background: green;
        position: absolute;
        transform: translate(-50%, 100%);
        left: 50%;
      }
      .mainText {
        font-size: 46px;
        margin-top: 0;
        text-transform: uppercase;
        position: relative;
        color: #fff;
        margin-bottom: 40px;
        z-index: 2;
      }
      .btnContent {
        .topTextBox {
          text-align: center;
          color: #fff;
          margin-bottom: 10px;
        }
      }
      .topBtnBox {
        display: flex;
        justify-content: space-evenly;
      }
    }
  }
  .bottomFooter {
    padding: 4rem;
    .bottomFooterContent {
      display: flex;
      justify-content: space-around;
      align-items: center;
      .logoBox {
        display: flex;
        .logoText {
          align-self: center;
          margin-left: 10px;
          h1 {
            font-size: 3rem;
          }
          h2 {
            font-weight: 300;
          }
        }
      }
      .list {
        list-style: none;
        display: flex;
        gap: 20px;
        a {
          color: #232e32;
          font-weight: 900;
          text-decoration: none;
          text-transform: uppercase;
        }
      }
      .footerButton {
        .buttonBox {
          display: flex;
          gap: 1rem;
        }
        .socialBox {
          float: right;
          margin-top: 20px;
          .social {
            display: flex;
            gap: 10px;
            a {
              color: #fff;
              background: green;
              font-weight: 400;
              font-size: 1rem;
              padding: 5px;
              width: 30px;
              height: 30px;
              text-align: center;
              border-radius: 50%;
            }
          }
        }
      }
    }
  }
`;
const Credits = styled.section`
    text-align: center;
    color: #b5b5b4;
    font-size: 18px;
`;
const Footer = () => {
  return (
    <Container>
        <div className="topFooter">
            <div className="center">
                <div className="lineShape"></div>
                <h1 className='mainText'>Lorem, ipsum dolor sit.</h1>
                <div className="btnContent">
                    <div className="topTextBox">
                    <span>Lorem, ipsum dolor.</span>
                    </div>
                    <div className="topBtnBox">
                        <Link to='#' className='links' style={{background: '#fff', borderRadius: '20px'}}>
                            <Button outline/>
                        </Link>
                        <Link to='#' className='links'>
                            <Button/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="bottomFooter">
            <div className="bottomFooterContent">
                <div className="logoBox">
                    <img src={PFN} width={100} alt="" />
                    <div className="logoText">
                        <h1>PFN</h1>
                        <h2>Lagos State</h2>
                    </div>
                </div>
                <ul className="list">
                    <Link to="#" className='links'>
                        <li className="listItems">Lorem.</li>
                    </Link>
                    <Link to="#" className='links'>
                        <li className="listItems">Lorem.</li>
                    </Link>
                    <Link to="#" className='links'>
                        <li className="listItems">Lorem.</li>
                    </Link>
                </ul>
                <div className="footerButton">
                    <div className="buttonBox">
                        <Button />
                        <Button outline />
                    </div>
                    <div className="socialBox">
                        <div className="social">
                            <Link to="#" className='links'>
                                <i className="fa fa-youtube footerSocialIcon" aria-hidden="true" />
                            </Link>
                            <Link to="#" className='links'>
                                <i className="fa fa-facebook footerSocialIcon" aria-hidden="true" />
                            </Link>
                            <Link to="#" className='links'>
                                <i className="fa fa-twitter footerSocialIcon" aria-hidden="true" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Credits>
            &copy; 2022 PFN Lagos. All Rights Reserved.
        </Credits>
    </Container>
  )
}

export default Footer