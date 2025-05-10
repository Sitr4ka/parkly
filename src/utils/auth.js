export const getUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const getToken = () => localStorage.getItem('token');

export const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('token');
};
