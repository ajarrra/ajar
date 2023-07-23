import { generalSettings } from '../constants'

export const API = {
    get: async (url, param) => {
        const res = await fetch(`${generalSettings.api}/${url}`)

        return res
    } 
}
