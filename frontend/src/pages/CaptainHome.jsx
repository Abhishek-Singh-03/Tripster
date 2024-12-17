import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap';
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';

const CaptainHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true);
  const [confimRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
  const ridepopupPanelRef = useRef(null);
  const confimRidepopupPanelRef = useRef(null);

  useGSAP(function () {
    if (ridePopupPanel) {
      gsap.to(ridepopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(ridepopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [ridePopupPanel])

  useGSAP(function () {
    if (confimRidePopupPanel) {
      gsap.to(confimRidepopupPanelRef.current, {
        transform: 'translateY(0)'
      })
    }
    else {
      gsap.to(confimRidepopupPanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [confimRidePopupPanel])


  return (
    <div className='h-screen'>

      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to="/home" className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="ri-logout-box-r-line text-lg font-medium"></i>
        </Link>
      </div>

      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt=""></img>
      </div>

      <div className='h-2/5 p-6'>
        <CaptainDetails />
      </div>
      <div ref={ridepopupPanelRef} className='fixed z-10 bottom-0 px-3 py-10 bg-white w-full pt-12 translate-y-full'>
        <RidePopUp setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>

      <div ref={confimRidepopupPanelRef} className='fixed z-10 h-screen bottom-0 px-3 py-10 bg-white w-full pt-12 translate-y-full'>
        <ConfirmRidePopUp setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
      </div>
    </div>
  )
}

export default CaptainHome