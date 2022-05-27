import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import MockPartners from './MockPartners'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

// https://www.npmjs.com/package/react-multi-carousel
// the docs are here, dude
// gl

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}
const PartnerLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 380px;
  width: 250px;
  background-color: #ffffff;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  box-shadow: 2px 0px 12px 2px rgba(0,0,0,0.34);
  -webkit-box-shadow: 2px 0px 12px 2px rgba(0,0,0,0.34);
  -moz-box-shadow: 2px 0px 12px 2px rgba(0,0,0,0.34);
  img {
    margin: 0 20px;
    width: 100%;
    height: auto;
    max-height: 50%;
  }
`

const PartnersSlider = () => {
  return <Carousel autoPlay={true}
                   keyBoardControl={true}
                   autoPlaySpeed={3000}
                   responsive={responsive}
                   swipeable={true}

                   itemClass={'padding-carousel'}>
      {MockPartners.map(partner => {
        return (
              <PartnerLink about={'_blank'} href={partner.url} key={partner.name}>
                <img src={partner.img} alt={partner.name + ' site link'}/>
              </PartnerLink>
        )
      })}
    </Carousel>
}

export default PartnersSlider
