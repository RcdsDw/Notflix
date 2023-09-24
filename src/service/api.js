

async function send_(method, path, data, useToken = true) {

    let headers = {
        "Content-Type": "application/json",
    };
    if (localStorage.getItem("userToken") && useToken) {
        headers.Authorization =
            "Bearer " + localStorage.getItem("userToken");
    }
    return await fetch(`${process.env.REACT_APP_API}${path}`, {
        method: method,
        headers,
        body: JSON.stringify(data),
    });
}

export async function post(path, data, useToken) {
    return await send_("POST", path, data, useToken);
}

export async function get(path, data, useToken) {
    return await send_("GET", path, data, useToken);
}

export async function remove(path, data, useToken) {
    return await send_("DELETE", path, data, useToken);
}

export async function put(path, data, useToken) {
    return await send_("PUT", path, data, useToken);
}