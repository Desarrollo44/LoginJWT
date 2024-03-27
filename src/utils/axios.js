import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080',
  withCredentials: true,
  credentials: 'include',
});

export default api;

// import axios from 'axios';

// const api = axios.create({
//   baseURL: 'http://localhost:8080', // Actuliza al puerto correcto (8080) donde está corriendo el servidor
//   withCredentials: true,
//   credentials: 'include',
// });

// export default api;