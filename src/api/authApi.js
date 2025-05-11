import client from './client.js';

export const register = async ({ name, email, password }) => {
  try {
    const response = await client.post('/auth/register', { name, email, password });
    return response.data;
  } catch (err) {
    const message = err.response?.data?.error || 'Something went wrong';
    throw new Error(message);
  }
};

export async function login({ email, password }) {
  try {
    const response = await client.post('/auth/login', {
      email,
      password,
    });
    return response.data;
  } catch (err) {
    const message = err.response?.data?.error || 'Something went wrong';
    throw new Error(message);
  }
}

export async function getProfile() {
  const response = await client.get('/auth/profile');
  return response.data;
}
