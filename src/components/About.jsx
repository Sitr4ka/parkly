import parking from './../assets/parking.jpg'
const About = () => {
    return (
        <>
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-10 md:mb-0">
                            
                            <img src={parking}  alt="Modern Parking Facility" className="rounded-lg shadow-lg object-cover w-full h-auto" />
                        </div>
                        <div className="md:w-1/2 md:pl-12">
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose Parking Zone</h2>
                            <p className="text-lg text-gray-600 mb-8">We're revolutionizing the way people find and book parking spaces with technology-driven solutions.</p>
                            
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full mr-4 mt-1">
                                        <i className="ri-time-line text-primary"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Save Time</h3>
                                        <p className="text-gray-600">Our users save an average of 15 minutes per parking session by booking in advance.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full mr-4 mt-1">
                                        <i className="ri-money-dollar-circle-line text-primary"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Effective</h3>
                                        <p className="text-gray-600">Enjoy competitive rates and exclusive discounts for regular users and long-term bookings.</p>
                                    </div>
                                </div>
                                
                                <div className="flex items-start">
                                    <div className="w-10 h-10 flex items-center justify-center bg-primary/10 rounded-full mr-4 mt-1">
                                        <i className="ri-user-heart-line text-primary"></i>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-2">Customer Satisfaction</h3>
                                        <p className="text-gray-600">With a 4.8/5 rating from over 50,000 users, our service quality speaks for itself.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;