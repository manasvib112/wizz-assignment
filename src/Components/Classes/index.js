import React from 'react'
import Section from '../Section'
import './style.css'

export default function Classes() {
  return (
    <div className='classes-wrapper'>
      <Section title='Upcoming Classes' />
      <div className='classes-container'>
        <span className='subtitle'>
          It Looks like you don't have any upcoming classes for today!
        </span>
      </div>
    </div>
  )
}
