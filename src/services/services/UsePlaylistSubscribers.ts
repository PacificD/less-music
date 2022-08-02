/*
 * @Author: Giaruei
 * @Date: 2022-07-29 17:22:51
 * @LastEditTime: 2022-07-30 12:04:17
 * @LastEditors: Giaruei
 * @Description: 获取歌单的收藏者的请求
 * @FilePath: \less-music\src\services\services\UsePlaylistSubscribers.ts
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"
/**
 * @description: 获取歌单的收藏者
 * @param {number} id
 * @return {*}
 */
const usePlaylistSubscribers = (id: number) => {
    const queryKey = ["playlist", "subscribers"]
    const fetchData = async () => {
        const res = await request<IRes>("/playlist/subscribers", { id }, METHODS.GET)
        return res.data.code === 200 && res.data
    }
    return useQuery(queryKey, fetchData)
}

export default usePlaylistSubscribers
