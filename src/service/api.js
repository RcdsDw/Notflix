async function send_(method, path, data) {

    let headers = {
        "Content-Type": "application/json",
    };

    /* if (process.env.REACT_APP_LOCALSTORAGE) {
        headers.Authorization =
            "Bearer " + process.env.REACT_APP_LOCALSTORAGE;
    } */
    return await fetch(`${process.env.REACT_APP_API}${path}`, {
        method: method,
        headers,
        body: JSON.stringify(data),
    });
}

export async function post(path, data) {
    return await send_("POST", path, data);
}

export async function get(path, data) {
    return await send_("GET", path, data);
}

export async function remove(path, data) {
    return await send_("DELETE", path, data);
}

export async function put(path, data) {
    return await send_("PUT", path, data);
}

async function apiPost(email, plainPassword) {
    let res = await post(`/register`, { email, plainPassword })
    if (res.ok) {
        console.log(res)
        return await res.json()
    } else {
        return false;
    }
}

export default apiPost