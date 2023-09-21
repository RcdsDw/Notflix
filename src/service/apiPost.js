import { post } from './api'

async function apiPost(email, password) {
    let res = await post(`${process.env.REACT_APP_API}/register/`, { email, password })
    if (res.ok) {
        console.log(res)
        return await res.json()
    } else {
        return false;
    }
}

export default apiPost