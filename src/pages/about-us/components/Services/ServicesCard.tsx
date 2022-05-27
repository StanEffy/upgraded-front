import React from 'react'
import styled from 'styled-components'
type CardT = {
    header: string,
    description: string,
    img: string
}
type Props = {
    cardsInfo: Array<CardT>;
}

const CardWrapperStyled = styled.article`
  @media ${props => props.theme.screen.tablet}{
    
  }
  @media ${props => props.theme.screen.desktop}{
   
  }
`
const ImgStyled = styled.img`

`
const CardTextCover = styled.div`
  color: #ffffff;
  background-color: ${props => props.theme.colors.blue};
  
  @media ${props => props.theme.screen.tablet}{
  padding: 25px 20px;
  }
  @media ${props => props.theme.screen.desktop}{
  padding: 50px 45px;
  }
`
const HeaderStyled = styled.h2`
  margin: 0;
`
const Description = styled.p`
    margin: 0;
`
const ServicesCard:React.FC<Props> = ({ cardsInfo }) => {
  return (
        <CardWrapperStyled>
            {cardsInfo.map(card => {
              return (
                    <CardWrapperStyled key={card.header}>
                        <ImgStyled src={card.img}/>
                        <CardTextCover>
                            <HeaderStyled>
                                {card.header}
                            </HeaderStyled>
                            <Description>
                                {card.description}
                            </Description>
                        </CardTextCover>
                    </CardWrapperStyled>
              )
            })}
        </CardWrapperStyled>
  )
}

export default ServicesCard
