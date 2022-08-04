/*
 * @Author: DZR
 * @Date: 2022-08-02 20:45:31
 * @LastEditTime: 2022-08-02 20:48:13
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\services\services\useMVComments.ts
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

/**
 * @description: 获取MV评论
 * @param {number} mvid
 * @return {*}
 */

const useMVComments = (id: number) => {
    const queryKey = ["comment", "mv"]
    const fetchData = () => {
        return request<IRes>("/comment/mv", { id: id }, METHODS.GET).then(
            res => res.data.code === 200 && res.data
        )
    }
    return useQuery(queryKey, fetchData)
}

export default useMVComments
