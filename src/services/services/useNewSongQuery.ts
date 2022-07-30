/*
 * @Author: Ride-pig 327796210@qq.com
 * @Date: 2022-07-25 20:49:40
 * @LastEditors: Pacific_D
 * @LastEditTime: 2022-07-30 11:35:23
 * @FilePath: \less-music\src\services\services\useNewSongQuery.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

/**
 * @description:获取推荐新音乐
 * @param {number} limit
 * @return {*}
 */
const useNewSongQuery = (limit = 10) => {
    const queryKey = ["newSong"]
    const fetchData = () => {
        return request<IRes>(
            "/personalized/newsong",
            {
                limit
            },
            METHODS.GET
        ).then(res => res.data.code === 200 && res.data)
    }

    return useQuery(queryKey, fetchData)
}

export default useNewSongQuery
