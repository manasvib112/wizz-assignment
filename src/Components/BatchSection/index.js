import React from 'react'
import Batch from '../Batch'
import Section from '../Section'
import './style.css'
export default function BatchSection() {
  return (
    <div className='batch-section-wrapper'>
      <Section title='All Batches' />
      <div className='batch-section-container'>
        <Batch />
        <Batch />
      </div>
    </div>
  )
}
