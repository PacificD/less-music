/*
 * @Author: Giaruei
 * @Date: 2022-07-28 15:46:29
 * @LastEditTime: 2022-07-28 15:52:37
 * @LastEditors: Giaruei
 * @Description:
 * @FilePath: \less-music\src\services\services\use.ts
 */
import { METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

const usePlaylistCommentQuery = (id: number) => {
    const queryKey = ["comment", "playlist"]
    const fetchData = async () => {
        const res = await request("/comment/playlist", { id }, METHODS.GET)
        return res.data.code === 200 && res.data
    }
    return useQuery(queryKey, fetchData)
}

export default usePlaylistCommentQuery
