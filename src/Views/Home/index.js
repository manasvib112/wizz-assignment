import React from 'react'
import AssignmentSection from '../../Components/AssignmentSection'
import BatchSection from '../../Components/BatchSection'
import Classes from '../../Components/Classes'
import Header from '../../Components/Header'
import './style.css'
export default function Home() {
  const name = localStorage['user'] || 'User'
  const profile = localStorage['profilePic'] || ''
  return (
    <div className='page-wrapper'>
      <div className='page-container'>
        <Header user={name} pic={profile} />
        <h1 className='subtitle '>
          Are you ready to create Batch & Assignment?
        </h1>
        <Classes />
        <BatchSection />
        <AssignmentSection />
      </div>
    </div>
  )
}
