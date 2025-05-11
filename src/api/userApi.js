import client from './client.js';


export async function fetchAllUsers() {
  try {
    const res = await client.get('/users');
    return res.data;
  } catch (err) {
    console.error('Error fetching all users:', err);
    throw err.response?.data || { error: 'Failed to fetch users' };
  }
}


export async function fetchCurrentUser() {
  try {
    const res = await client.get('/users/me'); // ou '/users/profile'
    return res.data;
  } catch (err) {
    console.error('Error fetching current user:', err);
    throw err.response?.data || { error: 'Failed to fetch user' };
  }
}


export async function updateUser(data) {
  try {
    const res = await client.put('/users/me', data);
    return res.data;
  } catch (err) {
    console.error('Error updating user:', err);
    throw err.response?.data || { error: 'Failed to update user' };
  }
}
