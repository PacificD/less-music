/*
 * @Author: Ride-pig
 * @Date: 2022-08-08 09:46:33
 * @LastEditTime: 2022-08-08 11:44:49
 * @LastEditors: Ride-pig
 * @Description: 推荐音乐的接口
 * @FilePath: \eee\less-music\src\services\services\usePersonalizedQuery.ts
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

/**
 * @description:获取推荐歌单
 * @param {number} limit
 * @return {*}
 */
const usePersonalizedQuery = (limit = 9) => {
    const queryKey = ["personalized"]
    const fetchData = () => {
        return request<IRes>(
            "/personalized",
            {
                limit
            },
            METHODS.GET
        ).then(res => res.data.code === 200 && res.data)
    }

    return useQuery(queryKey, fetchData)
}

export default usePersonalizedQuery
