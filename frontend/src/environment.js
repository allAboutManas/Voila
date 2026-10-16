let IS_PROD = true;

const server = process.env.REACT_APP_BACKEND_URL || (IS_PROD ?
    "https://voila-oa1x.onrender.com" :
    "http://localhost:8000");

export default server;