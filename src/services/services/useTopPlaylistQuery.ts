/*
 * @Author: Giaruei
 * @Date: 2022-08-01 17:06:31
 * @LastEditTime: 2022-08-01 17:15:28
 * @LastEditors: Giaruei
 * @Description: 获取歌单
 * @FilePath: \less-music\src\services\services\useTopPlaylistQuery.ts
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

type TopPrams = {
    limit?: number // 取出的歌单数量
    before?: number // 分页参数，取上一页最后一个歌单的id
    cat?: number // 歌单相关标签的id
}

const useTopPlaylistQuery = (prams?: TopPrams) => {
    const queryKey = ["top", "playlist"]
    const fetchData = async () => {
        const res = await request<IRes>("/top/playlist", prams ?? {}, METHODS.GET)
        return res.data.code === 200 && res.data
    }
    return useQuery(queryKey, fetchData)
}

export default useTopPlaylistQuery
