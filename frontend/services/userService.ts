import axios from 'axios';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000'}/api`;

export const getUserData = async (userId: string) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.get(`${API_URL}/user/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch user data');
  }
};

export const updateUserAddress = async (userId: string, address: any) => {
  try {
    const token = localStorage.getItem('token');
    const response = await axios.post(
      `${API_URL}/user/${userId}/address`,
      address,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to update address');
  }
};