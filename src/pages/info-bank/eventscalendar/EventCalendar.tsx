import React from 'react'
import TopPart from './TopPart'
import SelectedEventsSection from './SelectedEventsSection'
import PastEventsSection from './PastEventsSection'

const EventCalendar = () => {
  return (
        <>
            <TopPart />
            <SelectedEventsSection />
            <PastEventsSection />
        </>
  )
}

export default EventCalendar
