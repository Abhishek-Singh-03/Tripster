import React from 'react'

const VehiclePanel = (props) => {
  return (
    <div>
        <h5 className='p-1 text-center w-[93%] absolute top-0 ' onClick={()=>{
          props.setVehiclePanel(false)
        }}><i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a vehicle</h3>
        <div onClick={()=>{
            props.setConfirmRidePanel(true);
        }} className='flex items-center justify-between w-full p-3 border-2 active:border-black rounded-xl mb-2'>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1682350114/assets/c2/296eac-574a-4a81-a787-8a0387970755/original/UberBlackXL.png" alt=""></img>
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>TripsterGo <span><i className="ri-user-3-fill">4</i></span></h4>
            <h5 className='font-medium text-sm'>2 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$193.20</h2>
        </div>

        <div onClick={()=>{
            props.setConfirmRidePanel(true);
        }} className='flex items-center justify-between w-full p-3 border-2 active:border-black rounded-xl mb-2'>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt=""></img>
          <div className='-ml-2 w-1/2'>
            <h4 className='font-medium text-base'>Moto <span><i className="ri-user-3-fill">1</i></span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$65</h2>
        </div>

        <div onClick={()=>{
            props.setConfirmRidePanel(true);
        }} className='flex items-center justify-between w-full p-3 border-2 active:border-black rounded-xl mb-2'>
          <img className='h-10' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt=""></img>
          <div className='ml-2 w-1/2'>
            <h4 className='font-medium text-base'>TripsterAuto <span><i className="ri-user-3-fill">3</i></span></h4>
            <h5 className='font-medium text-sm'>3 mins away</h5>
            <p className='font-normal text-xs text-gray-600'>Affordable, Auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$118.86</h2>
        </div>
    </div>
  )
}

export default VehiclePanel