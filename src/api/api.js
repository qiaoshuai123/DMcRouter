import axios from 'axios'
axios.interceptors.request.use(
    config => {
        config.headers['authorization']='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzaWduVGltZSI6MTU3MDY5MjE5MTQ4MSwidXNlcl9pZCI6ImJzejg4Zy0wNzFyNSIsInVzZXJfbmFtZSI6InJlbnl1bGlhbmciLCJpZGVudGl0eV9pZCI6InVmODF5bi1odjh1dnYiLCJpZGVudGl0eV90ZXh0Ijoi5Ye66aKY6ICFIiwiaWF0IjoxNTcwNjkyMTkxfQ.Aokp7iaYowjilTMd_nIneab4M57Aj96RZG6eoZCPGEM'
        return config;
    }, error => {
        return Promise.reject(error);
    });

export default axios