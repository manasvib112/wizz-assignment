import React from 'react'
import './style.css'

export default function Batch({
  name = 'Morning',
  subject = 'Maths',
  grade = '1st',
  schedule = ['Monday', 'Tuesday', 'Thursday']
}) {
  return (
    <div className='batch-wrapper'>
      <div className='batch-container'>
        <div className='batch-header'>
          <span>{subject}</span>
        </div>
        <div className='batch-details'>
          <span className='title'>{name}</span>
          <div className='batch-grade'>
            Grade:<span>{grade}</span>
          </div>
        </div>
        <div className='batch-schedule'>
          {schedule.map((day, index) => (
            <span key={index} className='batch-day'>
              {day.slice(0, 3) + ' '}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
