import { $getRequest } from "../../../shared/api"

export const fetchUsers = async () => {
    try {
        const res = await $getRequest('users')
        if (res.status !== 200) console.log('error');

        return res

    } catch (e) {
        console.log(e)
    }
}