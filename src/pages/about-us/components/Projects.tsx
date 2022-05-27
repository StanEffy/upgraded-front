import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Carousel, CarouselItem } from '../../../components/carousel/CarouselItem'

const SectionProjects = styled.section`
    background-color: #F9F9F9;
  padding-top: 65px;
  @media ${props => props.theme.screen.desktop}{
    display: flex;
  }
`
const ProjectsDescriptionCover = styled.div`
    position: relative;
  box-sizing: border-box;
  min-height: 571px;
  @media ${props => props.theme.screen.desktop}{
    min-height: 1200px;
  }
`
const ProjectsDescriptionImg = styled.img`
  position: absolute;
  left: 0;
  width: 80.5%;
  
  @media ${props => props.theme.screen.desktop}{
    width: 552px;
  }
`
const ProjectDescription = styled.article`
  background-color: rgba(237, 53, 86, 0.8);
  color: #ffffff;
  padding-top: 55px;
  padding-left: 24px;
  position: relative;
  z-index: 1;
  margin-right: 24px;
  top: 45px;
  left: 45px;
  height: 400px;
  width: 300px;
  
  text-align: left;
  @media ${props => props.theme.screen.desktop}{
    height: 690px;
    width: 460px;
    left: 145px;
    top: 70px;
  }
`
const ProjectDescriptionHeader = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 24px;
  line-height: 29px;
  font-family: "TiemposRegular",serif;
  text-align: left;
  font-weight: normal;
  width: 170px;
  margin-bottom: 24px;
  @media ${props => props.theme.screen.desktop}{
    font-size: 48px;
    width: 290px;
    line-height: 57px;
  }
`
const ProjectDescriptionParagraph = styled.p`
  font-size: 12px;
  line-height: 15px;
  text-align: left;
  width: 170px;
  position: relative;
  @media ${props => props.theme.screen.desktop}{
    width: 280px;
    font-size: 21px;
    line-height: 33px;
  }
  &::after{
    position: absolute;
    content: '';
    display: block;
    width: 12px;
    height: 12px;
    background-image: url("./img/utils/arrow.png");
    background-size: contain;
    background-repeat: no-repeat;
    bottom: 0px;
    right: -20px;
  }
`
const ProjectDescriptionButton = styled(NavLink)`
  color: #ffffff;
  text-decoration: none;
  display: inline-block;
  text-transform: uppercase;
  padding: 10px 20px;
  font-size: 12px;
  line-height: 14px;
  background-color: ${props => props.theme.colors.blue};
  margin-top: 60px;
  &:hover{
    background-color: #ffffff;
    color: ${props => props.theme.colors.blue};
  }
  @media ${props => props.theme.screen.desktop}{
    padding: 20px 30px;
    font-size: 24px;
    line-height: 11px;
  }
`

const CardsCover = styled.div`
  display: flex;
  margin-left: 24px;
  @media ${props => props.theme.screen.desktop}{
    flex-direction: row;
    padding-left: 125px;
    padding-top: 70px;
  }
`
const Card = styled.article`
  color: ${props => props.theme.colors.blue};
  background-color: #ffffff;
  text-align: left;
  padding-left: 45px;
  padding-top: 58px;
  padding-bottom: 54px;
  @media ${props => props.theme.screen.desktop}{
    height: 535px;
  }
`
const CardHeader = styled.h2`
  font-size: 18px;
  line-height: 21px;
  min-height: 84px;
  font-family: "TiemposBold";
  font-weight: bold;
`
const CardParagraph = styled.p`
  font-size: 12px;
  line-height: 15px;
  margin-bottom: auto;
  @media ${props => props.theme.screen.desktop}{
    font-size: 15px;
    line-height: 17px;
  }
`
const CardButton = styled(ProjectDescriptionButton)`
background-color: ${props => props.theme.colors.blue};
  color: #ffffff;
  text-decoration: none;  
  display: block;
  text-align: center;
  max-width: 170px;
  &:visited{
    color: #ffffff;
  }
  &:hover {
    background-color: ${props => props.theme.colors.red};
    color: #ffffff;
  }
`
const Projects = () => {
  return (
        <SectionProjects id={'projects'}>
            <ProjectsDescriptionCover>
                <ProjectsDescriptionImg src={'./img/about-us/projects.jpg'}/>
                <ProjectDescription>
                    <ProjectDescriptionHeader>
                        The projects
                        that we are
                        very proud of
                    </ProjectDescriptionHeader>
                    <ProjectDescriptionParagraph>
                        Projects are an important part of
                        Upgraded’s operations and helping
                        the startups. At the moment we are
                        involved in the following projects
                    </ProjectDescriptionParagraph>
                    <ProjectDescriptionButton to={'/'}>Get in touch</ProjectDescriptionButton>
                </ProjectDescription>
            </ProjectsDescriptionCover>

                <Carousel isWidthFixed={true} widthNumber={350} className={'carousel-about'}>
                    <CarouselItem className={'carousel-about__item'}>
                        <Card>
                        <CardHeader>
                            The Future of Healthcare
                            Sustainable and Smart today
                        </CardHeader>
                        <CardParagraph>
                            Upgraded joined a 1,5 year project funded by
                            Nordic Innovation to target Nordic sustainable
                            and smart healthcare.The project consists of
                            several Nordic and international events aimed
                            to bring Nordic knowledge on sustainable
                            healthcare and smart healthtech solutions
                            to a global market.
                        </CardParagraph>
                        <CardButton to={''}>
                            Read more
                        </CardButton>
                    </Card>
                    </CarouselItem>
                    <CarouselItem className={'carousel-about__item'}>
                        <Card>
                            <CardHeader>
                                The Future of Healthcare
                                Sustainable and Smart today
                            </CardHeader>
                            <CardParagraph>
                                Upgraded joined a 1,5 year project funded by
                                Nordic Innovation to target Nordic sustainable
                                and smart healthcare.The project consists of
                                several Nordic and international events aimed
                                to bring Nordic knowledge on sustainable
                                healthcare and smart healthtech solutions
                                to a global market.
                            </CardParagraph>
                            <CardButton to={''}>
                                Read more
                            </CardButton>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className={'carousel-about__item'}>
                        <Card>
                            <CardHeader>
                                The Future of Healthcare
                                Sustainable and Smart today
                            </CardHeader>
                            <CardParagraph>
                                Upgraded joined a 1,5 year project funded by
                                Nordic Innovation to target Nordic sustainable
                                and smart healthcare.The project consists of
                                several Nordic and international events aimed
                                to bring Nordic knowledge on sustainable
                                healthcare and smart healthtech solutions
                                to a global market.
                            </CardParagraph>
                            <CardButton to={''}>
                                Read more
                            </CardButton>
                        </Card>
                    </CarouselItem>
                    <CarouselItem className={'carousel-about__item'}>
                        <Card>
                        <CardHeader>
                            Health Ecosystem
                            Maps for Startups
                        </CardHeader>
                        <CardParagraph>
                            The health startup industry is exceptionally diverse –
                            and so are the supporting, regulatory, funding etc.
                            entities – the core objective of those metro maps is
                            to gather the most important players of the industry,
                            who provide support for startups specifically focusing
                            on the health and wellness sector.
                        </CardParagraph>
                        <CardButton to={''}>
                            Read more
                        </CardButton>
                    </Card>
                    </CarouselItem>
                </Carousel>
        </SectionProjects>
  )
}

export default Projects
