/*
 * @Author: Ride-pig 327796210@qq.com
 * @Date: 2022-08-01 16:21:32
 * @LastEditors: Ride-pig
 * @LastEditTime: 2022-08-03 20:06:15
 * @FilePath: \整合\less-music\src\services\services\usePhoneLoginQuery.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

/**
 * @description:手机密码登录
 * @param {number} 手机号
 * @param {string} password 密码
 * @return {*}
 */

type PhoneLogin = {
    phone: string
    password: string
    timestamp: any
}

const usePhoneLoginQuery = (params: PhoneLogin) => {
    const queryKey = ["phoneLogin"]
    const fetchData = () => {
        return request<IRes>("/login/cellphone", params, METHODS.POST).then(
            res => res.data.code === 200 && res.data
        )
    }

    return useQuery(queryKey, fetchData)
}

export default usePhoneLoginQuery
