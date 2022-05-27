import React from 'react'
import styled from 'styled-components'
import HeaderAdmin from './HeaderAdmin'
const HomeCoverStyled = styled.div`
  padding: 100px;
  text-align: left;
`
const HomePage = function () {
  return (
    <HomeCoverStyled>
        <HeaderAdmin />
      <p>
        This admin panel has been designed by Stan Efimov aka
        holydonk@gmail.com. Feel free to reach out and tell me what could be
        better in it or on this mangled planet in general. We`&apos;`ll figure
        it out! (About the planet - can`&apos;`t give you a promise though)
      </p>
      <p>
        Some important stuff: better to use the same format for pictures. But if
        not - both jpg and png are cool. Why no webp? Yeah, it is better and
        lighter, though some browsers don`&apos;`t support it yet. Of course we
        could do multi-formating with several resolutions for retina and
        fallbacks to tag img from picture, but isn`&apos;`t it an overkill? We
        are not selling any goods, so being neaty is our only goal.
      </p>
        <p>
            Also I compress images on backend so no need to worry about sending too big pictures. I guess no big deal there but it would be better not to send anything bigger than 5Mb
        </p>
        <p>
        I also think that newsletter is basically a link to the outer resource. It goes to the top of the stack of links of previous newsletters and here you go
        </p>
    </HomeCoverStyled>
  )
}

export default HomePage
