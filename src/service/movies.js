import { get } from './api'

export async function MoviesGet(publied = true) {
    let res = await get(`/movies?publied=${publied}`)
    if (res.ok) {
        const data = await res.json()
        return await data
    } else {
        return false;
    }
}