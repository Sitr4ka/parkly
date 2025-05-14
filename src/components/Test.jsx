import React from 'react'
import parking1 from '../assets/parkings/parking1.jpg'
import { FiClock } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

function Test({parking}) {

    const navigate = useNavigate()

    return (        
                <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition">
                    <div className="h-48 overflow-hidden">
                        <img src={parking1} alt="Downtown Parking" class="w-full h-full object-cover object-top"/>
                    </div>
                    <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                            <h3 className="text-xl font-bold text-gray-800">{parking.name}</h3>
                            <div className="flex items-center bg-green-200 rounded-3xl text-green-800 px-2 py-1 text-sm font-medium">
                                <i className="ri-parking-box-line mr-1"></i>
                                {parking.totalSpots} spots
                            </div>
                        </div>
                        <p className="text-gray-600 mb-3 flex items-center">
                            <i className="ri-map-pin-line mr-1"></i>
                            {parking.address}
                        </p>
                        <p className="text-gray-600 mb-4 flex items-center text-sm">
                                  <FiClock className="mr-1" />
                                  Ouvert: {parking.openTime} - {parking.closeTime}
                        </p>
                        
                        <div className="flex justify-between items-center">
                            <div>
                                <span className="text-2xl font-bold text-gray-800">{parking.pricePerHour}Ar</span>
                                <span className="text-gray-600">/hour</span>
                            </div>
                            <button onClick={() => navigate(`/parkings/${parking.id}`)} className="bg-primary cursor-pointer rounded-md hover:bg-primary/90 text-white font-semibold py-2 px-4  whitespace-nowrap">
                                Consulter
                            </button>
                        </div>
                    </div>
                </div>
  )
}

export default Test
