/*
 * @Author: DZR
 * @Date: 2022-07-28 11:23:12
 * @LastEditTime: 2022-07-29 21:15:00
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\services\services\useSingerHotFiftySongs.ts
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"
/**
 * @description: 获取歌手热门50首歌曲
 * @param {number}id:歌手id
 * @return {*}
 */
type param = {
    id: number
}
const useSingerHotFiftySongs = (Param: param) => {
    const queryKey = ["artist", "top", "song"]
    const fetchData = () => {
        return request("/artist/top/song", Param, METHODS.GET).then(
            res => res.data.code === 200 && res.data
        )
    }
    return useQuery(queryKey, fetchData)
}

export default useSingerHotFiftySongs
