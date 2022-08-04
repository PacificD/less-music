/*
 * @Author: DZR
 * @Date: 2022-07-29 21:06:36
 * @LastEditTime: 2022-07-30 11:20:21
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\services\services\useSingerAlbum.tsx
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"
/**
 * @description: 获取歌手专辑
 * @return {*}
 */
type param = {
    id: number
    limit?: number
}

const useSingerAlbum = (Param: param) => {
    const queryKey = ["artist", "album"]
    const fetchData = () => {
        return request<IRes>("/artist/album", Param, METHODS.GET).then(
            res => res.data.code === 200 && res.data
        )
    }
    return useQuery(queryKey, fetchData)
}

export default useSingerAlbum
