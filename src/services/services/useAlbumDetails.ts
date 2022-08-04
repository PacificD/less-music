/*
 * @Author: DZR
 * @Date: 2022-07-29 22:37:09
 * @LastEditTime: 2022-08-02 14:35:02
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\services\services\useAlbumDetails.ts
 */
import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"
/**
 * @description: 获取专辑内容
 * @param {number} 专辑id
 * @return {*}
 */

const useAlbumDetails = (param: number) => {
    const queryKey = ["artist", "album"]
    let Albums: IRes[] = []
    const idArr: Array<number> = []

    const fetchData = () =>
        request<IRes>("/artist/album", { id: param }, METHODS.GET)
            .then(res => {
                if (res.data.code === 200) {
                    res.data.hotAlbums.forEach((album: any) => idArr.push(album.id))
                    return res.data
                } else {
                    return res
                }
            })
            .then(async allAlbums => {
                await Promise.all(
                    idArr.map(id =>
                        request("/album", { id: id }).then(res => {
                            if ((res.data as IRes).code === 200) {
                                Albums.push(res.data as IRes)
                            }
                        })
                    )
                ).then(() => Object.assign(allAlbums, { albums: Albums }))
                return allAlbums
            })

    return useQuery(queryKey, fetchData)
}

export default useAlbumDetails
