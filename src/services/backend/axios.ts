import * as axios from "axios";

type Response<T> = {
    // Custom status code
    status: number,

    error: string,

    message: string,
    payload: T
}
const api = new axios.Axios({
    baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/account`,
    transformRequest: (r) => JSON.stringify(r),
    transformResponse: (r) => JSON.parse(r)
})

export async function getBalance(userAddr: string) {
    return api.post<Response<number>>("/get-balance", { userAddr })
}

export async function transferAmount(fromUserAddr: string, toUserAddr: string, amount: number) {
    return api.post<Response<undefined>>("/transfer-amount", { fromUserAddr, toUserAddr, amount })
}

