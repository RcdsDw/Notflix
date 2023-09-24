import { post } from './api'

export async function LoginPost(username, password) {
    let res = await post(`/login`, { username, password }, false)
    if (res.ok) {
        const data = await res.json()
        localStorage.setItem("userToken", data.token)
        return await data
    } else {
        return false;
    }
}

