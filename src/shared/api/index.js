import { API } from "./api-client"

export const $getRequest = (url, param) => {
    return API.get(url, param)
}