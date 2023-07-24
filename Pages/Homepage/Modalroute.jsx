import React from 'react'
import LoginModal from '../../src/components/modals/authModals/SignupModal'
import SignupModal from '../../src/components/modals/authModals/LoginModal'
import AirtimeModal from '../../src/components/modals/subscriptionModals/Airtime/AirtimeModal'
import ForgotpasswordModal from '../../src/components/modals/authModals/ForgotpasswordModal'
import DataModal from '../../src/components/modals/subscriptionModals/Data/DataModal'
import ElectricityModal from '../../src/components/modals/subscriptionModals/Electricity/ElectricityModal'

const Modalroute = () => {
  return (
    <div>
      <LoginModal />
      <SignupModal />
      <AirtimeModal />
      <ForgotpasswordModal />
      <DataModal />
      <ElectricityModal />
    </div>
  )
}

export default Modalroute