/*
 * @Author: Ride-pig
 * @Date: 2022-08-05 09:50:26
 * @LastEditTime: 2022-08-05 10:02:05
 * @LastEditors: Ride-pig
 * @Description:
 * @FilePath: \eee\less-music\src\services\services\useAlbumCommentQuery.ts
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

/**
 * @description: 获取专辑评论
 * @param {number} id:歌手id
 * @return {*}
 */

const useAlbumCommentQuery = (id: number, enabled = false) => {
    const queryKey = ["albumComment"]
    const fetchData = () => {
        return request<IRes>("/comment/album", { id }, METHODS.GET).then(
            res => res.data.code === 200 && res.data
        )
    }
    return useQuery(queryKey, fetchData, { enabled })
}

export default useAlbumCommentQuery
