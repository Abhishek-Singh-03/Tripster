import React from 'react'

const LocationSearchPanel = (props) => {

    console.log(props)

    const locations = [
        "10A, New Road, Near A Cafe, Mumbai",
        "11B, New Road, Near B Cafe, Mumbai",
        "12C, New Road, Near C Cafe, Mumbai",
        "13D, New Road, Near D Cafe, Mumbai"
    ]

    return (
        <div>

            {locations.map(function (elem, idx) {
                return <div key={idx} onClick={()=>{
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false);
                }} className='flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start'>
                <h2 className='bg-[#eee] h-12 w-12 flex items-center justify-center rounded-full'><i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>{elem}</h4>
            </div>
            })}
        </div>
    )
}

export default LocationSearchPanel