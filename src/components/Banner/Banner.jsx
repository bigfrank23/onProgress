import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import './banner.css'
import mapImg from '../../images/map1.PNG'

const Container = styled.div`
    width: 100%;
    /* height: 40vh; */
`
const Banner = () => {
  return (
    <Container>
      <div className="banner">
        <div className="bannerCenter">
          <div className="bannerTitle">
            <blockquote>
              <h2>
                To unite all Pentecostal churches, bodies and believers for the
                fellowship, encouragement and inspiration
              </h2>
            </blockquote>
          </div>
          {/* <Link to='#'>
                  <div className="bannerBtn">Lorem ipsum dolor sit.</div>
              </Link> */}
        </div>
      </div>
      <div className="navyblue">
        <div className="navyblueContainer">
          <div className="navyblueContentLeft">
            {/* <div className="icon">
              <i className="fa fa-map-marker markerBanner" aria-hidden="true" />
            </div> */}
            {/* <div className="title">
              <Link to="#" className="links">
                <h2>Lorem ipsum dolor sit amet.</h2>
              </Link>
              <i className="fa fa-angle-right angleBanner" aria-hidden="true" />
            </div>
            <div className="desc">
              <span>Lorem ipsum dolor sit amet consectetur adipisicing.</span>
            </div> */}
            <img src={mapImg} alt="" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Banner