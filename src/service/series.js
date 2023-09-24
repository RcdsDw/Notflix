import { get } from './api'

export async function SeriesGet() {
    let res = await get(`/series`)
    if (res.ok) {
        const data = await res.json()
        return await data
    } else {
        return false;
    }
}