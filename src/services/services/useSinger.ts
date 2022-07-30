/*
 * @Author: DZR
 * @Date: 2022-07-26 09:46:16
 * @LastEditTime: 2022-07-30 11:20:13
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\services\services\useSinger.ts
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

type SingerParams = {
    limit?: number //返回数量 默认30
    offset?: number //偏移数量，用于分页
    initial?: string //按字母索引查找参数
    type?: number //-1：全部歌手  1：男歌手  2：女歌手  3：乐队
    area?: number //-1：全部  7：华语  96：欧美  8：日本  16：韩国  0：其他
}
/**
 * @description: 获取歌手分类列表
 * @para {SingerParams} params
 * @return {*}
 */

const useSinger = (params?: SingerParams) => {
    const queryKey = ["artist", "list"]
    const fetchData = () => {
        return sessionStorage.getItem("singer")
            ? JSON.parse(sessionStorage.getItem("singer") as string)
            : request<IRes>("/artist/list", params ?? {}, METHODS.GET).then(
                  res => res.data.code === 200 && res.data
              )
    }
    return useQuery(queryKey, fetchData)
}

export default useSinger
