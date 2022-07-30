/*
 * @Author: DZR
 * @Date: 2022-07-29 22:37:09
 * @LastEditTime: 2022-07-30 11:19:07
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\services\services\useAlbumDetails.tsx
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"
/**
 * @description: 获取专辑内容
 * @return {*}
 */
type param = {
    id: number
}

const useAlbumDetails = (Param: param) => {
    const queryKey = ["album"]
    const fetchData = () => {
        return request<IRes>("/album", Param, METHODS.GET).then(
            res => res.data.code === 200 && res.data
        )
    }
    return useQuery(queryKey, fetchData)
}

export default useAlbumDetails
