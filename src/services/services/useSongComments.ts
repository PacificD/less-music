/*
 * @Author: DZR
 * @Date: 2022-08-05 15:47:48
 * @LastEditTime: 2022-08-05 15:50:16
 * @LastEditors: DZR
 * @Description: 获取歌曲评论
 * @FilePath: \less-music\src\services\services\useSongComments.ts
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

/**
 * @description: 获取歌曲评论
 * @param {number} id:歌曲id
 * @return {*}
 */

const useSongComments = (id: number) => {
    const queryKey = ["comment", "music"]
    const fetchData = () => {
        return request<IRes>("/comment/music", { id: id }, METHODS.GET).then(
            res => res.data.code === 200 && res.data
        )
    }
    return useQuery(queryKey, fetchData)
}

export default useSongComments
