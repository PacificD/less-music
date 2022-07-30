/*
 * @Author: Ride-pig 327796210@qq.com
 * @Date: 2022-07-29 11:00:41
 * @LastEditors: Ride-pig 327796210@qq.com
 * @LastEditTime: 2022-07-29 11:06:03
 * @FilePath: \3\less-music\src\services\services\useNewDiscsQuery.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"

/**
 * @description:获取推荐新音乐
 * @param {string} area
 * @param {string} type
 * @param {number} year
 * @param {number} month
 * @return {*}
 */
const useNewDiscsQuery = (area="ALl",type="hot") => {
    const queryKey = ["newDiscs"]
    const fetchData = () => {
        return request(
            "/top/album",
            {
                area,
                type
            },
            METHODS.GET
        ).then(res => res.data.code === 200 && res.data)
    }

    return useQuery(queryKey, fetchData)
}

export default useNewDiscsQuery