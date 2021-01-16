import React from 'react'
import './style.css'
export default function Section({ title = 'Title' }) {
  return (
    <div className='section-wrapper'>
      <div className='section-container'>
        <h1 className='title' style={{ marginTop: '30px' }}>
          {title}
        </h1>
      </div>
    </div>
  )
}
