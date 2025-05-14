import client from './client';

export async function fetchBookings(status) {
  try {
    const params = status ? { status } : {};
    const res = await client.get('/bookings', { params });
    return res.data;

  } catch (err) {
    console.error('Error fetching bookings:', err);
    throw err.response?.data || { error: 'Failed to fetch bookings' };
  }
}

export async function fetchBookingById(id) {
  try {
    const res = await client.get(`/bookings/${id}`);
    return res.data;
  } catch (err) {
    console.error(`Error fetching booking ${id}:`, err);
    throw err.response?.data || { error: 'Failed to fetch booking' };
  }
}

export const createBooking = async ({ spotId, startTime, endTime , status }) => {
  try {
    const response = await client.post('/bookings', { spotId, startTime, endTime , status });
    console.log(response.data);
    
    return response.data;
  } catch (err) {
    const message = err.response?.data?.error || 'Something went wrong';
    throw new Error(message);
  }
};