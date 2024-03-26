import axios from "axios";
import MockAdapter from "axios-mock-adapter";

const axiosInt=axios.create({
    baseURL:'http://localhost:8080'
});

export const mock=new AxiosMockAdapter(axiosInt,{delayResponse:0});

export default axiosInt;