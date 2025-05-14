// src/api/spotApi.js
import client from './client.js';

export async function fetchAllSpots(id) {
  try {
    const res = await client.get(`/spots/${id}`);
    return res.data;
  } catch (err) {
    console.error('Error fetching all spots:', err);
    throw err.response?.data || { error: 'Failed to fetch spots' };
  }
}

export async function fetchSpotById(id) {
  try {
    const res = await client.get(`/spots/${id}`);
    return res.data;
  } catch (err) {
    console.error(`Error fetching spot ${id}:`, err);
    throw err.response?.data || { error: 'Failed to fetch spot' };
  }
}
