/*
 * @Author: Ride-pig
 * @Date: 2022-08-05 09:54:20
 * @LastEditTime: 2022-08-05 10:04:15
 * @LastEditors: Ride-pig
 * @Description:
 * @FilePath: \eee\less-music\src\services\services\useAlbumContentQuery.ts
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

/**
 * @description: 获取专辑评论
 * @param {number} id:歌手id
 * @return {*}
 */

const useAlbumContentQuery = (id: number, enabled = false) => {
    const queryKey = ["albumContent"]
    const fetchData = () => {
        return request<IRes>("/album", { id }, METHODS.GET).then(
            res => res.data.code === 200 && res.data
        )
    }
    return useQuery(queryKey, fetchData, { enabled })
}

export default useAlbumContentQuery
