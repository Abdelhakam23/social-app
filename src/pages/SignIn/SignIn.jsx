import React from 'react'
import AuthHero from '../../components/AuthHero/AuthHero'
import SignInForm from '../../components/signInForm/SignInForm'

export default function SignIn() {
  return (
    <>
      <div className='grid lg:grid-cols-2 p-4 gap-6 min-h-screen items-center '>
        
      <div className='left-side'>
      <AuthHero />
      </div>
      <div className="right-side">
        <SignInForm/>
      </div>
      </div>
    </>
  )
}
