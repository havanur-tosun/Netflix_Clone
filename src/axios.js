import axios from "axios";

const instance = axios.create( {
    baseURL: "https://www.themoviedb.org/3",
});

// instance.get('/foo-bar');

// https://www.themoviedb.org/3/foo-bar

export default instance;