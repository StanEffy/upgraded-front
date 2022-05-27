import React from 'react'
import styled from 'styled-components'

type HistoryYear = {
    year: string | number,
    events: [string]
}
type Props = {
    history: Array<HistoryYear>,
}

const SliderCover = styled.div`
  
`
const SliderArrowBack = styled.button`
  border-radius: 50%;
  background-color: transparent;
  position: relative;
  border-color: ${props => props.theme.colors.blue};
  width: 56px;
  height: 56px;
  margin-right: 10px;
  &:before {
    display: block;
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border: 2px solid ${props => props.theme.colors.blue};
    border-top: none;
    border-right: none;
    transform: rotate(45deg);
  }
`
const SliderArrowForward = styled(SliderArrowBack)`
  margin-right: 0;
  margin-left: 10px;
  &:before {
    transform: rotate(135deg);
  }
`
const SliderLineProgressCover = styled.div`
  width: 100%;
  position: relative;
`

const SliderLineProgress = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.blue};
  opacity: 0.3;
  height: 6px;
`
const SliderLineProgressCurrent = styled.div`
  position: absolute;
  top: 0;
`
const SliderControllersCover = styled.div`

`

const SliderHistoryCover = styled.div`
  display: flex;
  flex-direction: row;
`
const HistoryYearList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  margin: 0;
  padding: 0;
`

const HistoryYearItem = styled.li`
  
`
const YearItself = styled.p`
  
`
const YearEvents = styled.ul`
  margin: 0;
  padding: 0;
`
const Slider:React.FC<Props> = ({ history }) => {
  return (
        <SliderCover>
            <SliderControllersCover>
                <SliderArrowBack />
                <SliderLineProgressCover>
                    <SliderLineProgress />
                    <SliderLineProgressCurrent />
                </SliderLineProgressCover>
                <SliderArrowForward />
            </SliderControllersCover>
            <SliderHistoryCover>
                <HistoryYearList>
                    {history.map(y =>
                        <HistoryYearItem key={y.year}>
                            <YearItself>
                                {y.year}
                            </YearItself>
                            <YearEvents>
                                {y.events.map((evnt, i) => <li key={i}>{evnt}</li>)}
                            </YearEvents>
                        </HistoryYearItem>

                    )}
                </HistoryYearList>
            </SliderHistoryCover>
        </SliderCover>
  )
}

export default Slider
