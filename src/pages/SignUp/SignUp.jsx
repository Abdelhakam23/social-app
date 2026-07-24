import React from 'react'
import SignUpHero from '../../components/AuthHero/AuthHero'
import SignUpForm from '../../components/SignUpForm/SignUpForm'

export default function SignUp() {
  return (
    <>
      <div className='grid lg:grid-cols-2 p-4 gap-6 min-h-screen items-center '>
        
      <div className='left-side'>
      <SignUpHero />
      </div>
      <div className="right-side">
        <SignUpForm/>
      </div>
      </div>
    </>
  )
}
