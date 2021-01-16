import { Avatar } from '@material-ui/core'
import React from 'react'
import './style.css'

export default function Header({ user = 'Martin', pic = '' }) {
  return (
    <div className='header-wrapper'>
      <div className='header-container'>
        <div className='header left'>Hi, {user}</div>
        <Avatar src={pic} style={{ height: '60px', width: '60px' }}></Avatar>
      </div>
    </div>
  )
}
