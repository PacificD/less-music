/*
 * @Author: DZR
 * @Date: 2022-08-05 11:31:54
 * @LastEditTime: 2022-08-05 11:34:24
 * @LastEditors: DZR
 * @Description: 获取歌曲详情
 * @FilePath: \less-music\src\services\services\useSongDetail.ts
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

/**
 * @description: 获取歌曲详情
 * @param {number} id:歌曲id
 * @return {*}
 */

const useSongDetail = (id: number) => {
    const queryKey = ["song", "detail"]
    const fetchData = () => {
        return request<IRes>("/song/detail", { ids: id }, METHODS.GET).then(
            res => res.data.code === 200 && res.data
        )
    }
    return useQuery(queryKey, fetchData)
}

export default useSongDetail
