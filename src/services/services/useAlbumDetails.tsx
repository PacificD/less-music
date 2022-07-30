/*
 * @Author: DZR
 * @Date: 2022-07-29 22:37:09
 * @LastEditTime: 2022-07-29 22:38:30
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\services\services\useAlbumDetails.tsx
 */
import { METHODS } from "@/types"
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
        return request("/album", Param, METHODS.GET).then(res => res.data.code === 200 && res.data)
    }
    return useQuery(queryKey, fetchData)
}

export default useAlbumDetails
