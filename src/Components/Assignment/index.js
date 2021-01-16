import React from 'react'
import './style.css'
export default function Assignment({
  title = 'Assignment',
  submission = 0,
  total = 20,
  subject = 'Maths',
  summary = 'This is the summary',
  due = Date.now()
}) {
  return (
    <div className='assignment-wrapper'>
      <div className='assignment-container'>
        <div className='assignment-header'>
          <h1 className='title'>{title}</h1>
          <div>
            Submitted:
            <span>
              {submission}/{total}
            </span>
          </div>
        </div>
        <h3>{subject}</h3>
        <div className='assignment-summary'>{summary}</div>
        <div className='assignment-due-date'>Due Date: {due}</div>
      </div>
    </div>
  )
}
