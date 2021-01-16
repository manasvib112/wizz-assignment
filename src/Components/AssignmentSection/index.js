import React from 'react'
import Assignment from '../Assignment'
import Section from '../Section'
import './style.css'

export default function AssignmentSection() {
  return (
    <div className='assignment-section-wrapper'>
      <Section title='Assignments' />
      <div className='assignment-section-container'>
        <Assignment />
        <Assignment />
      </div>
    </div>
  )
}
