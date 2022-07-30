/*
 * @Author: Ride-pig 327796210@qq.com
 * @Date: 2022-07-26 19:17:56
 * @LastEditors: Ride-pig 327796210@qq.com
 * @LastEditTime: 2022-07-26 19:34:11
 * @FilePath: \less-music\src\services\services\useTopSongQuery.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

/**
 * @description:获取热门话题
 * @param {number} type
 * @return {*}
 */
const useTopSongQuery = (type=0) => {
    const queryKey = ["topSong"]
    const fetchData = () => {
        return request(
            "/top/song",
            {
               type
            },
            METHODS.GET
        ).then(res => res.data.code === 200 && res.data)
    }

    return useQuery(queryKey, fetchData)
}

export default useTopSongQuery 