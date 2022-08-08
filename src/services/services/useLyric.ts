/*
 * @Author: DZR
 * @Date: 2022-08-05 10:03:17
 * @LastEditTime: 2022-08-05 11:34:11
 * @LastEditors: DZR
 * @Description: 获取歌词
 * @FilePath: \less-music\src\services\services\useLyric.ts
 */

import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

/**
 * @description: 获取歌词
 * @param {number} id:音乐id
 * @return {*}
 */

const useLyric = (id: number) => {
    const queryKey = ["lyric"]
    const fetchData = () => {
        return request<IRes>("/lyric", { id: id }, METHODS.GET).then(
            res => res.data.code === 200 && res.data
        )
    }
    return useQuery(queryKey, fetchData)
}

export default useLyric
