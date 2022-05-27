import React from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

const SectionStyled = styled.section`
  padding: 60px 20px;
  @media ${props => props.theme.screen.desktop} {
    padding: 100px 70px;
  }
`
const SectionHeader = styled.h2`
  font-family: "TiemposBold", sans-serif;
  font-size: 24px;
  line-height: 29px;
  text-align: left;
  color: ${props => props.theme.colors.blue};
  @media ${props => props.theme.screen.desktop} {
    font-size: 48px;
    line-height: 57px;
  }
`
const EventCard = styled.div`
  border-bottom: 2px solid #c6c6c6;
  padding: 60px 0;
  @media ${props => props.theme.screen.desktop} {
    display: flex;
    align-items: center;
  }
`
const EventCardTop = styled.div`
  display: flex;
  justify-content: space-between;
`

const EventDate = styled.div`
  color: ${props => props.theme.colors.red};
  background-color: ${props => props.theme.colors.blue};
  width: 100px;
  height: 100px;
  text-transform: uppercase;
  box-sizing: border-box;
  padding: 30px 10px;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  @media ${props => props.theme.screen.desktop} {
    margin-right: 30px;
  }
`
const EventDay = styled.p`
  margin: 0;
  font-weight: bold;
`
const EventYear = styled.p`
  color: #ffffff;
  margin: 0;
`

const EventImg = styled.img`
  height: 100px;
  width: 200px;
  @media ${props => props.theme.screen.desktop} {
    margin-right: 30px;
  }
`

const EventBottom = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

const EventHeader = styled.h2`
  color: ${props => props.theme.colors.red};
  width: 100%;
  text-align: left;
  @media ${props => props.theme.screen.desktop} {
    margin-top: 0px;
  }
`
const EventBottomLeft = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  width: 100%;

`
const EventBottomDate = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`
const EventParagraph = styled.p`
  color: ${props => props.theme.colors.blue};
  margin: 0;
  text-align: left;

  img {
    padding-right: 10px;
  }
`
const EventPin = styled.span`
  width: 20px;
  height: 35px;
  background-position: left;
  padding-right: 30px;
  background-image: url("./img/utils/pin.png");
  background-size: contain;
  background-repeat: no-repeat;
`
const EventLink = styled(NavLink)`
  display: block;
  color: #ffffff;
  background-color: ${props => props.theme.colors.blue};
  text-decoration: none;
  text-align: center;
  padding: 10px 20px;
  max-width: 150px;
  text-transform: uppercase;

  &:visited {
    color: #ffffff;
  }

  &:hover {
    background-color: ${props => props.theme.colors.red};
  }
`
const CardsContainer = styled.div`
  @media ${props => props.theme.screen.desktop} {
    display: flex;
  }
`

const jsonFile = {
  ad: 'Andorra',
  ae: 'United Arab Emirates',
  af: 'Afghanistan',
  ag: 'Antigua and Barbuda',
  ai: 'Anguilla',
  al: 'Albania',
  am: 'Armenia',
  ao: 'Angola',
  aq: 'Antarctica',
  ar: 'Argentina',
  as: 'American Samoa',
  at: 'Austria',
  au: 'Australia',
  aw: 'Aruba',
  ax: 'Åland Islands',
  az: 'Azerbaijan',
  ba: 'Bosnia and Herzegovina',
  bb: 'Barbados',
  bd: 'Bangladesh',
  be: 'Belgium',
  bf: 'Burkina Faso',
  bg: 'Bulgaria',
  bh: 'Bahrain',
  bi: 'Burundi',
  bj: 'Benin',
  bl: 'Saint Barthélemy',
  bm: 'Bermuda',
  bn: 'Brunei',
  bo: 'Bolivia',
  bq: 'Caribbean Netherlands',
  br: 'Brazil',
  bs: 'Bahamas',
  bt: 'Bhutan',
  bv: 'Bouvet Island',
  bw: 'Botswana',
  by: 'Belarus',
  bz: 'Belize',
  ca: 'Canada',
  cc: 'Cocos (Keeling) Islands',
  cd: 'DR Congo',
  cf: 'Central African Republic',
  cg: 'Republic of the Congo',
  ch: 'Switzerland',
  ci: "Côte d'Ivoire (Ivory Coast)",
  ck: 'Cook Islands',
  cl: 'Chile',
  cm: 'Cameroon',
  cn: 'China',
  co: 'Colombia',
  cr: 'Costa Rica',
  cu: 'Cuba',
  cv: 'Cape Verde',
  cw: 'Curaçao',
  cx: 'Christmas Island',
  cy: 'Cyprus',
  cz: 'Czechia',
  de: 'Germany',
  dj: 'Djibouti',
  dk: 'Denmark',
  dm: 'Dominica',
  do: 'Dominican Republic',
  dz: 'Algeria',
  ec: 'Ecuador',
  ee: 'Estonia',
  eg: 'Egypt',
  eh: 'Western Sahara',
  er: 'Eritrea',
  es: 'Spain',
  et: 'Ethiopia',
  eu: 'European Union',
  fi: 'Finland',
  fj: 'Fiji',
  fk: 'Falkland Islands',
  fm: 'Micronesia',
  fo: 'Faroe Islands',
  fr: 'France',
  ga: 'Gabon',
  gb: 'United Kingdom',
  'gb-eng': 'England',
  'gb-nir': 'Northern Ireland',
  'gb-sct': 'Scotland',
  'gb-wls': 'Wales',
  gd: 'Grenada',
  ge: 'Georgia',
  gf: 'French Guiana',
  gg: 'Guernsey',
  gh: 'Ghana',
  gi: 'Gibraltar',
  gl: 'Greenland',
  gm: 'Gambia',
  gn: 'Guinea',
  gp: 'Guadeloupe',
  gq: 'Equatorial Guinea',
  gr: 'Greece',
  gs: 'South Georgia',
  gt: 'Guatemala',
  gu: 'Guam',
  gw: 'Guinea-Bissau',
  gy: 'Guyana',
  hk: 'Hong Kong',
  hm: 'Heard Island and McDonald Islands',
  hn: 'Honduras',
  hr: 'Croatia',
  ht: 'Haiti',
  hu: 'Hungary',
  id: 'Indonesia',
  ie: 'Ireland',
  il: 'Israel',
  im: 'Isle of Man',
  in: 'India',
  io: 'British Indian Ocean Territory',
  iq: 'Iraq',
  ir: 'Iran',
  is: 'Iceland',
  it: 'Italy',
  je: 'Jersey',
  jm: 'Jamaica',
  jo: 'Jordan',
  jp: 'Japan',
  ke: 'Kenya',
  kg: 'Kyrgyzstan',
  kh: 'Cambodia',
  ki: 'Kiribati',
  km: 'Comoros',
  kn: 'Saint Kitts and Nevis',
  kp: 'North Korea',
  kr: 'South Korea',
  kw: 'Kuwait',
  ky: 'Cayman Islands',
  kz: 'Kazakhstan',
  la: 'Laos',
  lb: 'Lebanon',
  lc: 'Saint Lucia',
  li: 'Liechtenstein',
  lk: 'Sri Lanka',
  lr: 'Liberia',
  ls: 'Lesotho',
  lt: 'Lithuania',
  lu: 'Luxembourg',
  lv: 'Latvia',
  ly: 'Libya',
  ma: 'Morocco',
  mc: 'Monaco',
  md: 'Moldova',
  me: 'Montenegro',
  mf: 'Saint Martin',
  mg: 'Madagascar',
  mh: 'Marshall Islands',
  mk: 'North Macedonia',
  ml: 'Mali',
  mm: 'Myanmar',
  mn: 'Mongolia',
  mo: 'Macau',
  mp: 'Northern Mariana Islands',
  mq: 'Martinique',
  mr: 'Mauritania',
  ms: 'Montserrat',
  mt: 'Malta',
  mu: 'Mauritius',
  mv: 'Maldives',
  mw: 'Malawi',
  mx: 'Mexico',
  my: 'Malaysia',
  mz: 'Mozambique',
  na: 'Namibia',
  nc: 'New Caledonia',
  ne: 'Niger',
  nf: 'Norfolk Island',
  ng: 'Nigeria',
  ni: 'Nicaragua',
  nl: 'Netherlands',
  no: 'Norway',
  np: 'Nepal',
  nr: 'Nauru',
  nu: 'Niue',
  nz: 'New Zealand',
  om: 'Oman',
  pa: 'Panama',
  pe: 'Peru',
  pf: 'French Polynesia',
  pg: 'Papua New Guinea',
  ph: 'Philippines',
  pk: 'Pakistan',
  pl: 'Poland',
  pm: 'Saint Pierre and Miquelon',
  pn: 'Pitcairn Islands',
  pr: 'Puerto Rico',
  ps: 'Palestine',
  pt: 'Portugal',
  pw: 'Palau',
  py: 'Paraguay',
  qa: 'Qatar',
  re: 'Réunion',
  ro: 'Romania',
  rs: 'Serbia',
  ru: 'Russia',
  rw: 'Rwanda',
  sa: 'Saudi Arabia',
  sb: 'Solomon Islands',
  sc: 'Seychelles',
  sd: 'Sudan',
  se: 'Sweden',
  sg: 'Singapore',
  sh: 'Saint Helena, Ascension and Tristan da Cunha',
  si: 'Slovenia',
  sj: 'Svalbard and Jan Mayen',
  sk: 'Slovakia',
  sl: 'Sierra Leone',
  sm: 'San Marino',
  sn: 'Senegal',
  so: 'Somalia',
  sr: 'Suriname',
  ss: 'South Sudan',
  st: 'São Tomé and Príncipe',
  sv: 'El Salvador',
  sx: 'Sint Maarten',
  sy: 'Syria',
  sz: 'Eswatini (Swaziland)',
  tc: 'Turks and Caicos Islands',
  td: 'Chad',
  tf: 'French Southern and Antarctic Lands',
  tg: 'Togo',
  th: 'Thailand',
  tj: 'Tajikistan',
  tk: 'Tokelau',
  tl: 'Timor-Leste',
  tm: 'Turkmenistan',
  tn: 'Tunisia',
  to: 'Tonga',
  tr: 'Turkey',
  tt: 'Trinidad and Tobago',
  tv: 'Tuvalu',
  tw: 'Taiwan',
  tz: 'Tanzania',
  ua: 'Ukraine',
  ug: 'Uganda',
  um: 'United States Minor Outlying Islands',
  un: 'United Nations',
  us: 'United States',
  'us-ak': 'Alaska',
  'us-al': 'Alabama',
  'us-ar': 'Arkansas',
  'us-az': 'Arizona',
  'us-ca': 'California',
  'us-co': 'Colorado',
  'us-ct': 'Connecticut',
  'us-de': 'Delaware',
  'us-fl': 'Florida',
  'us-ga': 'Georgia',
  'us-hi': 'Hawaii',
  'us-ia': 'Iowa',
  'us-id': 'Idaho',
  'us-il': 'Illinois',
  'us-in': 'Indiana',
  'us-ks': 'Kansas',
  'us-ky': 'Kentucky',
  'us-la': 'Louisiana',
  'us-ma': 'Massachusetts',
  'us-md': 'Maryland',
  'us-me': 'Maine',
  'us-mi': 'Michigan',
  'us-mn': 'Minnesota',
  'us-mo': 'Missouri',
  'us-ms': 'Mississippi',
  'us-mt': 'Montana',
  'us-nc': 'North Carolina',
  'us-nd': 'North Dakota',
  'us-ne': 'Nebraska',
  'us-nh': 'New Hampshire',
  'us-nj': 'New Jersey',
  'us-nm': 'New Mexico',
  'us-nv': 'Nevada',
  'us-ny': 'New York',
  'us-oh': 'Ohio',
  'us-ok': 'Oklahoma',
  'us-or': 'Oregon',
  'us-pa': 'Pennsylvania',
  'us-ri': 'Rhode Island',
  'us-sc': 'South Carolina',
  'us-sd': 'South Dakota',
  'us-tn': 'Tennessee',
  'us-tx': 'Texas',
  'us-ut': 'Utah',
  'us-va': 'Virginia',
  'us-vt': 'Vermont',
  'us-wa': 'Washington',
  'us-wi': 'Wisconsin',
  'us-wv': 'West Virginia',
  'us-wy': 'Wyoming',
  uy: 'Uruguay',
  uz: 'Uzbekistan',
  va: 'Vatican City (Holy See)',
  vc: 'Saint Vincent and the Grenadines',
  ve: 'Venezuela',
  vg: 'British Virgin Islands',
  vi: 'United States Virgin Islands',
  vn: 'Vietnam',
  vu: 'Vanuatu',
  wf: 'Wallis and Futuna',
  ws: 'Samoa',
  xk: 'Kosovo',
  ye: 'Yemen',
  yt: 'Mayotte',
  za: 'South Africa',
  zm: 'Zambia',
  zw: 'Zimbabwe'
}
const finalObj = {}

const keysCon = Object.keys(jsonFile)

keysCon.forEach(key => {
  // @ts-ignore
  const val = jsonFile[key]
  // @ts-ignore
  finalObj[val] = key
})
console.log(finalObj)
const PastEventsSection = () => {
  return (
        <SectionStyled>
            <SectionHeader>Past events</SectionHeader>

            <EventCard>
                <EventCardTop>
                    <EventDate>
                        <EventDay>12 oct</EventDay>
                        <EventYear>2021</EventYear>
                    </EventDate>
                    <EventImg src={'./img/mock/story.jpg'} alt='alt mock info'/>
                </EventCardTop>
                <EventBottom>
                    <EventHeader>Intelligent Health</EventHeader>
                    <EventBottomLeft>
                        <div>
                            <EventBottomDate>
                                <EventParagraph>12 October 2021</EventParagraph>
                                <EventParagraph>Netherlands</EventParagraph>
                            </EventBottomDate>
                            <EventParagraph><EventPin/>Beurs van Berlage, Amsterdam</EventParagraph>
                        </div>
                        <EventLink to={'/eventcalendar/ftitle'}>Event details</EventLink>
                    </EventBottomLeft>
                </EventBottom>
            </EventCard>
            <EventCard>
                <EventCardTop>
                    <EventDate>
                        <EventDay>12 oct</EventDay>
                        <EventYear>2021</EventYear>
                    </EventDate>
                    <EventImg src={'./img/mock/story.jpg'} alt='alt mock info'/>
                </EventCardTop>
                <EventBottom>
                    <EventHeader>Intelligent Health</EventHeader>
                    <EventBottomLeft>
                        <div>
                            <EventBottomDate>
                                <EventParagraph>12 October 2021</EventParagraph>
                                <EventParagraph><img
                                    src="https://flagcdn.com/16x12/nl.png"/>Netherlands</EventParagraph>
                            </EventBottomDate>
                            <EventParagraph><EventPin/>Beurs van Berlage, Amsterdam</EventParagraph>
                        </div>
                        <EventLink to={'/'}>Event details</EventLink>
                    </EventBottomLeft>
                </EventBottom>
            </EventCard>
            <EventCard>
                <EventCardTop>
                    <EventDate>
                        <EventDay>12 oct</EventDay>
                        <EventYear>2021</EventYear>
                    </EventDate>
                    <EventImg src={'./img/mock/story.jpg'} alt='alt mock info'/>
                </EventCardTop>
                <EventBottom>
                    <EventHeader>Intelligent Health</EventHeader>
                    <EventBottomLeft>
                        <div>
                            <EventBottomDate>
                                <EventParagraph>12 October 2021</EventParagraph>
                                <EventParagraph>Netherlands</EventParagraph>
                            </EventBottomDate>
                            <EventParagraph><EventPin/>Beurs van Berlage, Amsterdam</EventParagraph>
                        </div>
                        <EventLink to={'/'}>Event details</EventLink>
                    </EventBottomLeft>
                </EventBottom>
            </EventCard>
            <EventCard>
                <EventCardTop>
                    <EventDate>
                        <EventDay>12 oct</EventDay>
                        <EventYear>2021</EventYear>
                    </EventDate>
                    <EventImg src={'./img/mock/story.jpg'} alt='alt mock info'/>
                </EventCardTop>
                <EventBottom>
                    <EventHeader>Intelligent Health</EventHeader>
                    <EventBottomLeft>
                        <div>
                            <EventBottomDate>
                                <EventParagraph>12 October 2021</EventParagraph>
                                <EventParagraph>Netherlands</EventParagraph>
                            </EventBottomDate>
                            <EventParagraph><EventPin/>Beurs van Berlage, Amsterdam</EventParagraph>
                        </div>
                        <EventLink to={'/'}>Event details</EventLink>
                    </EventBottomLeft>
                </EventBottom>
            </EventCard>
        </SectionStyled>
  )
}

export default PastEventsSection
