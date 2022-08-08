/*
 * @Author: Ride-pig
 * @Date: 2022-08-08 11:43:16
 * @LastEditTime: 2022-08-08 22:18:04
 * @LastEditors: Ride-pig
 * @Description: 每日推荐歌曲接口
 * @FilePath: \less-music\src\services\services\useDailySongQuery.ts
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
        return request<IRes>(
            "/recommend/songs",
            { id, cookie: localStorage.getItem("cookie") },
            METHODS.POST
        ).then(res => res.data.code === 200 && res.data)
    }

    return useQuery(queryKey, fetchData)
}

export default useDailySongQuery
