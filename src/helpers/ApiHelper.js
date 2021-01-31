import { apiError } from "../store/actions";

const handleError = (response) => response.status == 200 ? response : apiError("error")

export const post = (url, data) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    return fetch(proxyurl + url, requestOptions)
        .then(response => response.json())
        .then(data => { return handleError(data) });
}

export const get = (url) => {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
    };
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    return fetch(proxyurl + url, requestOptions)
        .then(response => response.json())
        .then(data => { return handleError(data) });
}

export const DELETE = (url, data) => {
    const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    const proxyurl = "https://cors-anywhere.herokuapp.com/";

    return fetch(proxyurl + url, requestOptions)
        .then(response => response.json())
        .then(data => { return handleError(data) });
}

