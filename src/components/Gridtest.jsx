import React from 'react'
import Test from './Test'
import { useState , useEffect } from 'react';
import { fetchAllParkings } from '../api/parking';
import { formatHour } from '../utils/formatHour';

function Gridtest() {
    const [parkings, setParkings] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState('');
    
      useEffect(() => {
        async function loadParkings() {
          try {
            const data = await fetchAllParkings(); 
            setParkings(data);
            
          } catch (err) {
            setError(err.error || 'Failed to load parkings');
          } finally {
            setLoading(false);
          }
        }
        console.log(parkings);
        loadParkings();
      }, []);
  return (
    <div>   
        <section class="py-12 bg-white">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                    <h2 class="text-3xl font-bold text-gray-800 mb-2">Available Parking Locations</h2>
                    <p class="text-gray-600">Find the perfect spot for your vehicle</p>
                </div>
                
                <div class="flex items-center space-x-4 mt-4 md:mt-0">
                    <div class="relative">
                        <select class="appearance-none bg-gray-100 border-none rounded-lg py-2 pl-4 pr-10 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary">
                            <option>Sort by: Recommended</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Distance</option>
                            <option>Availability</option>
                        </select>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                            <i class="ri-arrow-down-s-line text-gray-500"></i>
                        </div>
                    </div>
                    
                    <button class="bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-2 px-4 !rounded-button whitespace-nowrap flex items-center">
                        <i class="ri-filter-3-line mr-2"></i>
                        Filters
                    </button>
                </div>
            </div>
            
                {loading && <p>Loading parkings...</p>}
                {error && <p className="text-red-600">{error}</p>}
                {!loading && !error && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {parkings.map(p => (
                      <Test
                        key={p.id}
                        parking={
                          {
                            id: p.id,
                            name: p.name,
                            address: p.address,
                            totalSpots: p.spots.length,
                            pricePerHour: p.pricePerHour || 0,
                            openTime: formatHour(p.openTime),
                            closeTime: formatHour(p.closeTime),
                          }
                        }
                        onBook={() => {
                         
                        }}
                      />
                    ))}
                  </div>
                )}
                </div>
            </section>
    </div>
  )
}

export default Gridtest
