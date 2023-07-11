import Link from 'next/link'
import React from 'react'
import SignupModal from './authModals/SignupModal'
import LoginModal from './authModals/LoginModal'
import ForgotpasswordModal from './authModals/ForgotpasswordModal'

const Auth = () => {
  return (
    <div>
      <SignupModal />
      <LoginModal />
      <ForgotpasswordModal />
    </div>
  )
}

export default Auth