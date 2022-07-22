/*
 * @Author: Pacific_D
 * @Date: 2022-03-30 22:10:06
 * @LastEditTime: 2022-07-22 15:15:11
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\services\services\user.api.ts
 */
import request from "../axios"
import { ILogin } from "../model/user"
import { AxiosResponse } from "axios"

/**
 * @description: 用户登录
 * @params {ILogin} params
 * @return {Promise}
 */
const Login = (params: ILogin): Promise<AxiosResponse> => {
    return request()
        .post("/user/login", params)
        .then(res => res.data)
}

const test = (): Promise<AxiosResponse> => {
    return request()
        .get("/hot/topic")
        .then(res => res)
}

export default {
    Login,
    test
}
