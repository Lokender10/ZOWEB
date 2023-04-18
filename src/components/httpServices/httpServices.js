import axios from "axios";

const baseApiUrl = "https://zobizapis.el.r.appspot.com/zobiz";

function get(url) {
    return axios.get(baseApiUrl + url);
}

function post (url, obj) {
    return axios.post(baseApiUrl + url, obj);
}

function put(url, obj) {
    return axios.put(baseApiUrl + url, obj);
}

function deleteReq(url) {
    return axios.delete(baseApiUrl + url);
}

export default {
    get,
    post,
    put,
    deleteReq,
};