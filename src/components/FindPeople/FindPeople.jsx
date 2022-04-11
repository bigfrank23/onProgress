import React from 'react'
import styled from 'styled-components'
import './findPeople.css'
import Img from '../../images/splash2.jpg'
import BorderImg from '../../images/bannerH.png'
import Header from '../Text/Header'
import H2 from '../Text/H2'
import { Grid } from '@material-ui/core'

const Container = styled.div`
    width: 100%;
    height: 100%;
    /* padding:  0 4rem; */
    /* margin-top: 15rem;
    border: 10px solid transparent;
  padding: 15px; */
  /* border-image: url(${BorderImg}) 20% round; */
`

const FindPeople = () => {
    const cards = [1, 2, 3]
  return (
    <Container>
        <div className="header">
            <div className="topHeader">
                <Header children="Lorem, ipsum dolor." color={true}/>
            </div>
            <div className="centerHeader">
                <H2 children="Lorem, ipsum dolor." />
            </div>
            <div className="bottomHeader">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque, sequi numquam aperiam eligendi nemo eveniet.</p>
            </div>
        </div>
        {/* <div className="content"> */}
            <Grid container spacing={2}>
                {cards.map((card)=> (
                    <Grid item xs={12} sm={6} md={4}>
                        <div className="card1">
                            <img src={Img} alt="" />
                            <div className="contentTextWrapper">
                                <div className="contentText">
                                    <H2 children="Lorem ipsum dolor sit" />
                                </div>
                                <div className="contentPara">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium magnam ipsam, voluptatem delectus dolores accusamus saepe quod illum a distinctio nulla facere nemo nam repudiandae nesciunt qui nostrum. In accusamus amet debitis libero id? Asperiores, dignissimos. Porro tempora tenetur omnis deleniti facere, animi cum? Temporibus at doloribus sequi blanditiis libero.
                                </div>
                            </div>
                            <i className="fa fa-arrow-circle-right circledArrow" aria-hidden="true" />
                        </div>
                    </Grid>
                ))}
            </Grid>
        {/* </div> */}
    </Container>
  )
}

export default FindPeople