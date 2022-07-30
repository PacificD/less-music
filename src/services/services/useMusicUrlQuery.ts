/*
 * @Author: Pacific_D
 * @Date: 2022-07-27 17:33:09
 * @LastEditTime: 2022-07-30 10:14:42
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\services\services\useMusicUrlQuery.ts
 */
import { METHODS, IRes } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

/**
 * @description: 获取音乐URL
 * @param {number} id - 歌单id
 * @param {number} id - 音乐ID
 * @return {*}
 */
const useMusicUrl = (id: number, enabled = true) => {
    const queryKey = ["song", "url", id]
    const fetchData = () =>
        request<IRes>(
            "/song/url",
            {
                id
            },
            METHODS.GET
        ).then(res => res.data && res.data)

    return useQuery(queryKey, fetchData, { enabled })
}

export default useMusicUrl
