/*
 * @Author: Giaruei
 * @Date: 2022-08-05 10:17:23
 * @LastEditTime: 2022-08-08 17:14:29
 * @LastEditors: Giaruei
 * @Description:
 * @FilePath: \less-music\src\services\services\useUserStatusQuery.ts
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

const useUserStatusQuery = (cookie: string) => {
    const queryKey = ["login", "status"]
    const fetchData = async () => {
        const res = request<IRes>(
            `/login/status?timerstamp=${Date.now()}`,
            { cookie },
            METHODS.POST
        )
        return (await res).data
    }
    return useQuery(queryKey, fetchData)
}

export default useUserStatusQuery
