import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import BgImg from '../../images/bg2.jpg'
import PlayImg from '../../images/splash1.jpg'
import Button from '../Button/Button'
import './Extraordinary.css'
import { landscapeTab, mobile, tab } from '../../responsive'
import H3 from '../Text/H3'
import PText from '../Text/PText'
import { Grid } from '@material-ui/core'
import Img1 from '../../images/gallery/88.jpg'
import Img2 from '../../images/gallery/33.jpg'
import Img3 from '../../images/gallery/58.jpg'


const Container = styled.div`
    background: url(${BgImg});
    /* margin-top: 10rem; */
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    ${mobile({ marginTop: "1rem", padding: "2rem" })}
    `
const ExtraContentContainer = styled.div`
    /* text-align: center; */
    padding: 4rem 7rem;
    ${mobile({padding: "2rem" })}
`
const ExtraTextContainer = styled.div`
    text-align: center;
`
const ExtraText = styled.h1`
  font-size: 2.5rem;
  font-style: italic;
  color: #008753;
  margin: 0 auto 20px auto;
  text-align: center;
  ${mobile({ padding: "1rem 0", fontSize: "1.7rem" })}
`;
const ExtraContent = styled.div`
    display: flex;
    gap: 20px;
    ${mobile({display: 'block'})}
    ${tab({display: 'block'})}
    ${landscapeTab({display: 'flex'})}
`
const ExtraImg = styled.div`
    /* flex: 1; */
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${PlayImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    height: 450px;
    width: 450px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    ${mobile({height: '300px', width: '300px'})}
    ${tab({height: '600px', width: "100%"})}
    ${landscapeTab({height: "450px", width: "450px"})}
`
const ExtraIconContainer = styled.div`
    background: linear-gradient(#7bff7b, #7bff7b);
    height: 100px;
    width: 100px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    ${mobile({height: '50px', width: '50px'})}
    .playIcon{
        color: #000;
        font-size: 2rem;
        ${mobile({fontSize: '1rem'})}
    }
`
const ExtraContentText = styled.div`
    flex: 1;
    align-self: center;
`
const ExtraDesc = styled.p`
    color: #232e32;
    font-weight: 900;
    line-height: 25px;
    margin: 18px 0;
    ${mobile({fontSize: '1rem', fontWeight: 700, textAlign: 'center'})}
`
const ExtraName = styled.p`
    color: #232e32;
    margin: 18px 0 40px;
    ${mobile({textAlign: 'center'})}
`
//Second section
const ExtraContentContainer2 = styled.div`
    align-self: flex-start;
    width: 100%;
    padding: 0 7rem 4rem 7rem;
    ${mobile({padding: "0", width: "unset", alignSelf: "unset"})}
    .extraLink{
    display: flex;
    justify-content: center;
    margin: 18px 0px;
    text-decoration: none;
    }
`
const ExtraTextContainer2 = styled.div`
    text-align: center;
`
const ExtraText2 = styled.h1`
    font-size: 25px;
    margin: 0 0 30px;
    text-align: center;
`
const ExtraCard = styled.div`
    /* width: 300px; */
    /* height: 100%; */
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    transform: scale(1);
    transition: transform .2s ease-in-out;
    &:hover{
        transform: scale(1.1);
    }
    ${mobile({margin: "1rem 0"})}
`
const ExtraCardImgContainer = styled.div`
    width: 100%;
    background-color: #008753;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    `
const ExtraCardImg = styled.img`
    width: 100%;
    /* height: 200px; */
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
`
const ExtraContentText2 = styled.div`
    background-color: #008753;
    padding: 2rem;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`
const ExtraTitle = styled.div`
    color: #fff;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
`
const ExtraDate = styled.div`
    color: #fff;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
    /* margin-right: 5px; */
`
const ExtraLocation = styled.div`
    color: #fff;
    font-weight: 900;
    text-align: center;
    text-transform: uppercase;
      /* margin-right: 5px; */
`
const Extraordinay = () => {
    const cards = [
        {
            id: 1,
            img: Img1,
            title: "Upcoming Events",
            desc: "Know More"
        },
        {
            id: 2,
            img: Img2,
            title: "Current Events",
            desc: "Know More"
        },
        {
            id: 3,
            img: Img3,
            title: "Past Events",
            desc: "Know More"
        },
    ]
  return (
    <Container>
      <ExtraContentContainer>
        <ExtraTextContainer>
          <ExtraText>Get to know us</ExtraText>
        </ExtraTextContainer>
        <ExtraContent>
          <ExtraImg>
            <ExtraIconContainer>
              <i className="fa fa-play playIcon" aria-hidden="true" />
            </ExtraIconContainer>
          </ExtraImg>
          <ExtraContentText>
            <ExtraDesc>
              "PFN is the umbrella Body which coordinates the activities of
              Penticostal, Evangelical and Chrismatic Ministries, Churches and
              Associations, for the purpose of unity as underlined by the prayer
              of the Lord Jesus in John 17."
            </ExtraDesc>
            <Link to="#">
              <ExtraName>Know more</ExtraName>
            </Link>
          </ExtraContentText>
        </ExtraContent>
      </ExtraContentContainer>
      <ExtraContentContainer2>
        <ExtraTextContainer2>
          <ExtraText2>Our Events</ExtraText2>
        </ExtraTextContainer2>
        {/* <div className='extraGrid'> */}
        <Grid container spacing={3}>
          {cards.map((card) => (
            <Grid item xs={12} sm={6} md={4} key={card.id}>
              <ExtraCard>
                <ExtraCardImgContainer>
                  <ExtraCardImg src={card.img} />
                </ExtraCardImgContainer>
                <ExtraContentText2>
                  <ExtraTitle>
                    {" "}
                    <H3 children={card.title} color={true} />{" "}
                  </ExtraTitle>
                  {/* <div style={{display: 'flex', color: "white"}}> */}
                  <ExtraDate>
                    {" "}
                    <PText children="" color={true} />{" "}
                  </ExtraDate>
                  {/* </div> */}
                  {/* <div style={{display: 'flex', color: "white"}}> */}
                  <ExtraLocation>
                    <PText children="View Detail" color={true} />{" "}
                  </ExtraLocation>
                  {/* </div> */}
                </ExtraContentText2>
              </ExtraCard>
            </Grid>
          ))}
        </Grid>
        {/* </div> */}
        <Link to="#" className="extraLink">
          <Button BtnText="VIEW ALL EVENTS" />
        </Link>
      </ExtraContentContainer2>
    </Container>
  );
}

export default Extraordinay