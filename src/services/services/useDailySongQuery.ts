/*
 * @Author: Ride-pig
 * @Date: 2022-08-08 11:43:16
 * @LastEditTime: 2022-08-08 16:25:08
 * @LastEditors: Ride-pig
 * @Description: 每日推荐歌曲接口
 * @FilePath: \eee\less-music\src\services\services\useDailySongQuery.ts
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

/**
 * @description:获取每日推荐歌曲
 * @param {number} 用户的id
 * @return {*}
 */

const useDailySongQuery = (id: number) => {
    const queryKey = ["recommendsongs"]
    const fetchData = () => {
        return request<IRes>("/recommend/songs", { id }, METHODS.GET).then(
            res => res.data.code === 200 && res.data
        )
    }

    return useQuery(queryKey, fetchData)
}

export default useDailySongQuery
