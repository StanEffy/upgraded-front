import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

type HistoryYear = {
    year: string | number,
    events: string[],
    index: number
}
type Props = {
    history: Array<HistoryYear>,
}

const SliderCover = styled.div`
  text-align: left;
`
const SliderArrowBack = styled.button`
  border-radius: 50%;
  background-color: transparent;
  position: relative;
  border-color: rgba(255, 255, 255, 0.4);
  width: 56px;
  height: 56px;
  margin-right: 10px;

  &:before {
    display: block;
    content: '';
    position: absolute;
    width: 15px;
    height: 15px;
    border: 2px solid rgba(255, 255, 255, 0.4);
    border-top: none;
    border-right: none;
    left: 20px;
    top: 17px;
    transform: rotate(45deg);
  }
`
const SliderArrowForward = styled(SliderArrowBack)`
  margin-right: 0;
  margin-left: 10px;

  &:before {
    transform: rotate(225deg);
    left: 15px;
  }
`
const SliderLineProgressCover = styled.div`
  width: 100%;
  position: relative;
`

const SliderLineProgress = styled.div`
  width: 100%;
  background-color: rgba(255, 255, 255, 0.4);
  opacity: 0.3;
  height: 6px;
`
const SliderLineProgressCurrent = styled.div`
  position: absolute;
  top: 0;
`
const SliderControllersCover = styled.div`
  display: flex;
  align-items: center;
`

const SliderHistoryCover = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`
const HistoryYearList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 30px;
  list-style: none;
  margin: 0 64px;
  padding: 0;
  width: 100%;
  justify-content: space-between;
`

const HistoryYearItem = styled.li`
  position: relative;
  flex-grow: 1;
`
const YearItself = styled.p`
  font-weight: bold;
  font-family: "TiemposBold";
  font-size: 20px;
  color: ${props => props.theme.colors.red};
  @media ${props => props.theme.screen.desktop} {
    font-size: 22px;
  }
`
const YearEvents = styled.ul`
  margin: 0;
  padding: 0;
  font-size: 10px;
  line-height: 12px;
  max-width: 320px;

  li {
    margin-bottom: 15px;
  }

  @media ${props => props.theme.screen.desktop} {
    font-size: 18px;
    line-height: 24px;
  }

`
const HistorySlider: React.FC<Props> = ({ history }) => {
  const [activeSlide, setActiveSlider] = useState(0)

  const [slidesAmount, setSlidesAmount] = useState(1)

  const [arrayDimensions, setArrayDimensions] = useState({
    start: 0,
    end: slidesAmount
  })

  const historyTrunc = history.slice(arrayDimensions.start, arrayDimensions.end)

  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight
  })

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight
    })
  }

  useEffect(() => {
    window.addEventListener('resize', detectSize)

    if (windowDimenion.winWidth >= 1200) {
      setSlidesAmount(5)
      setArrayDimensions({ start: 0, end: 5 })
    } else if (windowDimenion.winWidth >= 992) {
      setSlidesAmount(3)
      setArrayDimensions({ start: 0, end: 3 })
    } else if (windowDimenion.winWidth >= 768) {
      setSlidesAmount(2)
      setArrayDimensions({ start: 0, end: 2 })
    } else {
      setSlidesAmount(1)
      setArrayDimensions({ start: 0, end: 1 })
    }
    return () => {
      window.removeEventListener('resize', detectSize)
    }
  }, [windowDimenion])

  const increaseSlider = () => {
    if (activeSlide < history.length - 1) {
      if (activeSlide + 1 === arrayDimensions.end) {
        setArrayDimensions({ start: activeSlide + 1, end: activeSlide + 1 + slidesAmount })
      }
      setActiveSlider(activeSlide + 1)
    } else {
      console.log('You have reached the end of history')
    }
    console.log(activeSlide, arrayDimensions.end)
  }
  const decreaseSlider = () => {
    if (activeSlide > 0) {
      if (activeSlide - 1 < arrayDimensions.start) {
        const start = activeSlide - 1 - slidesAmount > 0 ? activeSlide - 1 - slidesAmount : 0
        setArrayDimensions({ start: start, end: activeSlide })
      }
      setActiveSlider(activeSlide - 1)
    }
  }
  return (
        <SliderCover>
            <SliderControllersCover>
                <SliderArrowBack onClick={() => decreaseSlider()}/>
                <SliderLineProgressCover>
                    <SliderLineProgress/>
                    <SliderLineProgressCurrent/>
                </SliderLineProgressCover>
                <SliderArrowForward onClick={() => increaseSlider()}/>
            </SliderControllersCover>
            <SliderHistoryCover>
                <HistoryYearList>
                    {historyTrunc.map((y) =>
                        <HistoryYearItem key={y.year}
                                         className={y.index === activeSlide ? 'history-slide__active' : ''}>
                            <YearItself>
                                {y.year}
                            </YearItself>
                            <YearEvents>
                                {y.events.map((evnt, i) => <li key={`${y.year.toString() + i}`}>{evnt}</li>)}
                            </YearEvents>
                        </HistoryYearItem>
                    )}
                </HistoryYearList>
            </SliderHistoryCover>
        </SliderCover>
  )
}

export default HistorySlider
