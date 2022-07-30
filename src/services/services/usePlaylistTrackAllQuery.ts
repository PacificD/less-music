/*
 * @Author: Giaruei
 * @Date: 2022-07-28 11:09:32
 * @LastEditTime: 2022-07-28 15:47:45
 * @LastEditors: Giaruei
 * @Description: 获取歌单所有歌曲的请求
 * @FilePath: \less-music\src\services\services\usePlaylistTrackAllQuery.ts
 */
import { METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

/**
 * @description: 获取歌单所有歌曲
 * @param {number} id
 * @return {*}
 */
const usePlaylistTrackAllQuery = (id: number) => {
    const queryKey = ["playlist", "track", "all"]
    const fetchData = async () => {
        const res = await request("/playlist/track/all", { id }, METHODS.GET)
        return res.data.code === 200 && res.data
    }
    return useQuery(queryKey, fetchData)
}

export default usePlaylistTrackAllQuery
