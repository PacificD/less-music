/*
 * @Author: DZR
 * @Date: 2022-08-02 15:04:19
 * @LastEditTime: 2022-08-02 15:47:15
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\services\services\useSingerMV.ts
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"
/**
 * @description: 获取歌手MV (获取mvid)
 * @param {number} id 歌手id
 * @param {number} limit
 * @return {*}
 */

const useSingerMV = (id: number, limit = 30) => {
    const queryKey = ["artist", "mv"]
    const fetchData = () => {
        return request<IRes>("/artist/mv", { id: id, limit: limit }, METHODS.GET).then(
            res => res.data.code === 200 && res.data
        )
    }
    return useQuery(queryKey, fetchData)
}

export default useSingerMV
