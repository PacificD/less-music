/*
 * @Author: DZR
 * @Date: 2022-08-02 11:38:46
 * @LastEditTime: 2022-08-02 14:39:26
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\services\services\useSingerDescription.ts
 */

import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"
/**
 * @description: 获取歌手描述
 * @param {number} id 歌手id
 * @return {*}
 */

const useSingerDescription = (id: number) => {
    const queryKey = ["artist", "desc"]
    const fetchData = () => {
        return request<IRes>("/artist/desc", { id: id }, METHODS.GET).then(
            res => res.data.code === 200 && res.data
        )
    }
    return useQuery(queryKey, fetchData)
}

export default useSingerDescription
