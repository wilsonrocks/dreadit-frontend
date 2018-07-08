export const BASE_URL = 
  process.env.NODE_ENV === 'production'
  ? 'https://immense-spire-53107.herokuapp.com/api'
  : 'http://localhost:3000/api';
  