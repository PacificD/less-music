/*
 * @Author: Pacific_D
 * @Date: 2022-07-22 20:08:10
 * @LastEditTime: 2022-07-26 11:47:59
 * @LastEditors: Giaruei
 * @Description:
 * @FilePath: \less-music\src\services\services\usePlaylistDetailQuery.ts
 */
import { METHODS } from "@/types"
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
    const fetchData = async () => {
        const res = await request(
            "/playlist/detail",
            {
                id,
                cookie: cookie
            },
            METHODS.GET
        )
        return res.data.code === 200 && res.data
    }

    return useQuery(queryKey, fetchData, { enabled })
}

const cookie = ""

export default usePlaylistDetailQuery
