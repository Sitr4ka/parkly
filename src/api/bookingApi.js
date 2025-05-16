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
export async function createBooking(data) {
  try {
    const res = await client.post('/bookings', data);
    return res.data;
  } catch (err) {
    console.error('Error creating booking:', err);
    throw err.response?.data || { error: 'Failed to create booking' };
  }
}

export async function updateBooking(id, data) {
  try {
    const res = await client.put(`/bookings/${id}`, data);
    return res.data;
  } catch (err) {
    console.error(`Error updating booking ${id}:`, err);
    throw err.response?.data || { error: 'Failed to update booking' };
  }
}

export async function deleteBooking(id) {
  try {
    await client.delete(`/bookings/${id}`);
  } catch (err) {
    console.error(`Error deleting booking ${id}:`, err);
    throw err.response?.data || { error: 'Failed to delete booking' };
  }
}

