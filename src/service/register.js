import { post } from './api'

export async function RegisterPost(email, plainPassword) {
    let res = await post(`/register`, { email, plainPassword }, false)
    if (res.ok) {
        return await res.json()
    } else {
        return false;
    }
}