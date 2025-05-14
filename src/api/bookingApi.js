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

