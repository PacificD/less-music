/*
 * @Author: Pacific_D
 * @Date: 2022-07-22 17:16:03
 * @LastEditTime: 2022-07-26 19:42:15
 * @LastEditors: Giaruei
 * @Description:
 * @FilePath: \less-music\src\services\services\useHotTopicQuery.ts
 */
import { METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

/**
 * @description:获取热门话题
 * @param {number} limit
 * @param {number} offset
 * @return {*}
 */
const useHotTopicQuery = (limit = 30, offset = 0) => {
    const queryKey = ["hotTopic"]
    const fetchData = () => {
        return request(
            "/hot/topic",
            {
                limit,
                offset
            },
            METHODS.GET
        ).then(res => res.data.code === 200 && res.data)
    }

    return useQuery(queryKey, fetchData)
}

export default useHotTopicQuery
