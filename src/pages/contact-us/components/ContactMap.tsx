import React from 'react'
import styled from 'styled-components'

const MapSection = styled.section`
  padding-bottom: 72px;
  padding-top: 63px;
  width: 100%;
  @media ${props => props.theme.screen.desktop} {
    padding-top: 0;
    width: 656px;

  }
`
const MapCaption = styled.p`
  font-family: "TiemposRegular", serif;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  margin: 0;
  color: ${props => props.theme.colors.blue};
  margin-bottom: 25px;
  @media ${props => props.theme.screen.desktop} {
    margin-bottom: 30px;
    padding-top: 20px;
  }
`
const SmallDescriptionCover = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
  @media ${props => props.theme.screen.desktop} {
    margin-top: 36px;
  }
`
const GoogleMap = styled.iframe`
  border: 0;
  width: 100%;
  height: 300px;
  @media ${props => props.theme.screen.desktop} {
    min-width: 500px;
    height: 400px;
  }
`
const SmallDescription = styled.p`
  font-size: 8px;
  line-height: 10px;
  font-family: "Avenir", sans-serif;
  color: #ADADAD;
  padding-right: 13px;
  @media ${props => props.theme.screen.desktop} {
    font-size: 14px;
    line-height: 17px;
  }
`
const ContactMap = () => {
  return (
        <MapSection>
            <MapCaption>Drop us a message and give us a visit, we’re happy to meet you!</MapCaption>
            <GoogleMap
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d590.0969048142065!2d24.921301182494528!3d60.16680295612227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920a35c5e18a89%3A0xe53eb9d6eee730d2!2sMaria%2001!5e0!3m2!1sen!2sfi!4v1654523468626!5m2!1sen!2sfi"
                allowFullScreen loading="lazy"/>
            <SmallDescriptionCover>
                <SmallDescription>
                    Lapinlahdenkatu 16, 00180 Helsinki<br/>
                    Finland
                </SmallDescription>
                <SmallDescription>
                    Email: info@upgraded.fi<br/>
                    Phone number: +358 40 589 7819
                </SmallDescription>
            </SmallDescriptionCover>
        </MapSection>
  )
}

export default ContactMap
