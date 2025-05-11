import client from './client.js';


export async function fetchAllParkings() {
  
  try {
    const response = await client.get('/parking');
    return response.data;
  } catch (err) {
    const message = err.response?.data?.error || 'Something went wrong';
    throw new Error(message);
  }
}


export async function fetchParkingById(id) {
    try {
        const response = await client.get(`/parking/${id}`);
        return response.data;
    } catch (err) {
        const message = err.response?.data?.error || 'Something went wrong';
        throw new Error(message);
    }
  
}