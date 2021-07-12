import {GET_PAINTS_URI, GET_RESOURCES_URI, GET_TTFB_URI} from "../constants";

const getData = (url, options) => fetch(url, {...options}).then(res => res.json()).catch(err => err);
const checkStatus = response => {
    if (!response.data) return {status: 500, message: response?.message, data: []}
    return response;
}
export const getTTFB = async (startDate = new Date(), endDate = new Date()) => {
    const response = await getData(`${GET_TTFB_URI}?startDate=${startDate?.toUTCString()}&endDate=${endDate?.toUTCString()}`).then(checkStatus).catch(err => console.log(err));
    return response.data;
}
export const getResources = async (startDate = new Date(), endDate = new Date()) => {
    const response = await getData(`${GET_RESOURCES_URI}?startDate=${startDate?.toUTCString()}&endDate=${endDate?.toUTCString()}`).then(checkStatus).catch(err => console.log(err));
    return response.data;
}
export const getPaints = async (startDate = new Date(), endDate = new Date()) => {
    const response = await getData(`${GET_PAINTS_URI}?startDate=${startDate?.toUTCString()}&endDate=${endDate?.toUTCString()}`).then(checkStatus).catch(err => console.log(err));
    return response.data;
}