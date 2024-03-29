/*
 * @Author: DZR
 * @Date: 2022-07-26 23:09:45
 * @LastEditTime: 2022-07-30 11:20:02
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\services\services\useBanner.ts
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

/**
 * @description: 获取轮播图
 * @param {number} type 资源类型，默认为0：PC端
 * @return {*}
 */

const useBanner = () => {
    const queryKey = ["banner"]
    const fetchData = () => {
        return sessionStorage.getItem("banner")
            ? JSON.parse(sessionStorage.getItem("banner") as string)
            : request<IRes>("/banner", { type: 0 }, METHODS.GET).then(
                  res => res.data.code === 200 && res.data
              )
    }
    return useQuery(queryKey, fetchData as any)
}

export default useBanner
