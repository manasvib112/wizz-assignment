import React, { useState } from 'react'
import firebase from '../../config/firebase'
import Section from '../../Components/Section'
import './style.css'
import { useHistory } from 'react-router-dom'

export default function Login() {
  const [error, setError] = useState('')
  const history = useHistory()

  const loginWithGithub = () => {
    let provider = new firebase.auth.GithubAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(({ user }) => {
        localStorage.setItem('user', user.displayName)
        localStorage.setItem('profilePic', user.photoURL)
        history.push('/home')
      })
      .catch((error) => {
        console.log(Object.assign([], error))
        setError('Failed signing in with Github')
      })
  }

  const loginWithFacebook = () => {
    let provider = new firebase.auth.FacebookAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(({ user }) => {
        localStorage.setItem('user', user.displayName)
        localStorage.setItem('profilePic', user.photoURL)
        history.push('/home')
      })
      .catch((error) => {
        setError('Failed signing in with Google')
      })
  }
  const loginWithGoogle = () => {
    let provider = new firebase.auth.GoogleAuthProvider()
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(({ user }) => {
        localStorage.setItem('user', user.displayName)
        localStorage.setItem('profilePic', user.photoURL)
        history.push('/home')
      })
      .catch((error) => {
        setError('Failed signing in with Google')
      })
  }
  return (
    <div className='login-wrapper'>
      <div className=' login-container '>
        {/* <div className='illustration'>W</div> */}
        <div>
          <Section title='Sign In' />
          <span>
            Enter your email ID and login to your account or choose the login
            with Google option to login through your Gmail account
          </span>
        </div>
        <div className='user-authentication'>
          <span className='error-container'>{error !== '' ? error : null}</span>
          <div className='google-auth button large' onClick={loginWithGoogle}>
            <img
              class='google-icon'
              src='https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg'
            />{' '}
            <span>Sign in with Google</span>
          </div>
          <div className='google-auth button large' onClick={loginWithFacebook}>
            <img
              class='google-icon'
              src='https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg'
            />{' '}
            <span>Sign in with Facebook</span>
          </div>
          <div className='google-auth button large' onClick={loginWithGithub}>
            <img
              class='google-icon'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Font_Awesome_5_brands_github.svg/800px-Font_Awesome_5_brands_github.svg.png'
            />{' '}
            <span>Sign in with Github</span>
          </div>
        </div>
      </div>
    </div>
  )
}
