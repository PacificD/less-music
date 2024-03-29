/*
 * @Author: DZR
 * @Date: 2022-07-29 13:32:26
 * @LastEditTime: 2022-08-02 11:26:04
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\services\services\useArtistDetails.ts
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

/**
 * @description: 获取歌手详情
 * @param {number} id:歌手id
 * @return {*}
 */
type param = {
    id: number
}
const useArtistDetails = (Param: param) => {
    const queryKey = ["artist", "detail"]
    const fetchData = () => {
        return request<IRes>("/artist/detail", Param, METHODS.GET).then(
            res => res.data.code === 200 && res.data
        )
    }
    return useQuery(queryKey, fetchData)
}

export default useArtistDetails
