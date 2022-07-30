/*
 * @Author: Giaruei
 * @Date: 2022-07-28 15:46:29
 * @LastEditTime: 2022-07-30 10:32:04
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\services\services\usePlaylistCommentQuery.ts
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

const usePlaylistCommentQuery = (id: number) => {
    const queryKey = ["comment", "playlist"]
    const fetchData = async () => {
        const res = await request<IRes>("/comment/playlist", { id }, METHODS.GET)
        return res.data.code === 200 && res.data
    }
    return useQuery(queryKey, fetchData)
}

export default usePlaylistCommentQuery
