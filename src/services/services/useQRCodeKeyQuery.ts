/*
 * @Author: Giaruei
 * @Date: 2022-08-03 20:11:51
 * @LastEditTime: 2022-08-04 11:44:03
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\services\services\useQRCodeKeyQuery.ts
 */

import { IRes, METHODS } from "@/types"
import { useQuery } from "@tanstack/react-query"
import request from "../request"
/**
 * @description: 二维码key生成接口
 * @param {any} timestamp  时间戳
 * @return {*} 返回一个unikey
 */

const useQRCodeKeyQuery = (timestamp: any) => {
    const keyValue: Array<string> = []

    const queryKey = ["qrkey"]
    const fetchData = () =>
        request<IRes>("/login/qr/key", timestamp, METHODS.GET)
            .then(res => {
                if (res.data.code === 200) {
                    keyValue.push(res.data.data.unikey)
                    return res.data
                } else {
                    return res.data
                }
            })
            .then(async QRCreate => {
                await request(
                    "/login/qr/create",
                    { key: keyValue[0], timestamp: timestamp, qrimg: "qrimg" },
                    METHODS.GET
                )
                    .then(res => {
                        if ((res.data as IRes).code === 200) {
                            keyValue.push((res.data as IRes).data.qrimg)
                        } else {
                            return res.data
                        }
                    })
                    .then(() => {
                        Object.assign(QRCreate, { key: keyValue })
                    })
                return QRCreate
            })

    return useQuery(queryKey, fetchData)
}

export default useQRCodeKeyQuery
