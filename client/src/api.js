const http = (url) => fetch(url);

const api = {
  getAllContent: () => http(`${process.env.REACT_APP_API_URL}/content`),
};

export default api;
