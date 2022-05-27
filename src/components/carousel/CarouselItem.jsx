/* eslint react/prop-types: 0 */
import React, { useState } from 'react'
import { useSwipeable } from 'react-swipeable'

export const CarouselItem = ({ children, width = '350px', className = 'carousel-item' }) => {
  return (
        <div className={`${className}`} style={{ width: width, boxSizing: 'border-box' }}>
            {children}
        </div>
  )
}
export const Carousel = ({ children, innerClass = 'inner', className = 'carousel', isWidthFixed = false, widthNumber = 200, indicator = 'indicator', indicatorsClassname = 'indicators' }) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1
    }
    setActiveIndex(newIndex)
  }

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1)
  })

  const widthProp = isWidthFixed ? widthNumber + 'px' : '100%'
  const widthPlusMargin = widthNumber + 20
  return (
        <div {...handlers} className={`${className}`}>
            <div className={innerClass} style={{ transform: `${isWidthFixed ? `translateX(-${activeIndex * widthPlusMargin}px)` : `translateX(-${activeIndex * 100}%)`}` }}>
                {React.Children.map(children, (child, i) => {
                  return React.cloneElement(child, { width: widthProp })
                })}
            </div>
            <div className={indicatorsClassname}>
                {React.Children.map(children, (child, index) => {
                  return (
                        <button className={`${indicator} ${index === activeIndex ? `${indicator}-active` : ''}`} onClick={() => {
                          updateIndex(index)
                        }}/>
                  )
                })}
            </div>
        </div>
  )
}
