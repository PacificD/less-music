/*
 * @Author: Pacific_D
 * @Date: 2022-07-22 20:08:10
 * @LastEditTime: 2022-08-04 16:18:35
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\services\services\usePlaylistDetailQuery.ts
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

/**
 * @description: 获取歌单详情
 * @param {number} id - 歌单id
 * @param {boolean} enabled - 控制是否请求的参数
 * @return {*}
 */
const usePlaylistDetailQuery = (id: number, enabled = false) => {
    const queryKey = ["playlist", "detail", id]
    const fetchData = () =>
        request<IRes>(
            "/playlist/detail",
            {
                id
            },
            METHODS.GET
        ).then(res => res.data.code === 200 && res.data)

    return useQuery(queryKey, fetchData, { enabled })
}

export default usePlaylistDetailQuery
