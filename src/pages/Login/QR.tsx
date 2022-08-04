/*
 * @Author: Giaruei
 * @Date: 2022-08-03 20:09:37
 * @LastEditTime: 2022-08-04 11:02:31
 * @LastEditors: Giaruei
 * @Description: 二维码登录界面
 * @FilePath: \less-music\src\pages\Login\QR.tsx
 */

import { useQRCodeKeyQuery } from "@/services"
import { IRes, METHODS } from "@/types"
import { useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { Flex, Text, Box, Image } from "@chakra-ui/react"
import { LoadingTwo } from "@/components"
import request from "@/services/request"

export const QrCode = () => {
    const navigate = useNavigate()
    //获取当前时间的时间戳
    const timestamp = Date.parse(new Date().toString())
    // 检测二维码的key值
    const { data: info, isLoading: keyIsLoading } = useQRCodeKeyQuery(timestamp)
    const keyResult = useMemo(() => {
        if (info) {
            return (info as IRes).key
        }
    }, [info]) as string[]
    console.log(keyResult)
    const key = useMemo(() => {
        if (keyResult) {
            return keyResult[0]
        }
    }, [keyResult])
    console.log(key)

    // 判断扫码状态
    async function checkStatus(key: string) {
        const res = request<IRes>(
            "/login/qr/check",
            {
                key: key,
                timestamp: Date.now()
            },
            METHODS.GET
        )
        return (await res).data
    }
    // console.log(checkStatus(key!))

    let timer = setInterval(async () => {
        const statusRes = await checkStatus(key!)
        // console.log(statusRes)
        if (statusRes.code === 801) {
            console.log("Waiting...")
        }
        if (statusRes.code === 800) {
            clearInterval(timer)
        }
        if (statusRes.code === 803) {
            // 这一步会返回cookie
            clearInterval(timer)
            console.log(statusRes.cookie)
            localStorage.setItem("cookie", statusRes.cookie)
            navigate("/")
        }
    }, 3000)

    return (
        <Flex
            alignItems="center"
            border="1px solid #7ba3ff"
            borderRadius="2em"
            flexDirection="column"
            h="29em"
            position="relative"
            rowGap="1em"
            w="29em"
        >
            <Text color="#7ba3ff" fontSize="1.5em" fontWeight="700" marginTop="1.5em">
                扫码登录
            </Text>
            <Text color="#7ba3ff" fontWeight="700">
                请打开手机网易云扫码登录
            </Text>
            {keyIsLoading ? (
                <Box border="1px solid #7ba3ff" height="230px" width="230px">
                    <LoadingTwo />
                </Box>
            ) : (
                <Image height="230px" src={keyResult[1]} width="230px" />
            )}
            {/* <Box>状态 : {}</Box> */}
            <Flex alignItems="center" justifyContent="space-around" w="18em">
                <Text color="#7ba3ff" fontWeight="700">
                    密码登录
                </Text>
                <Text color="#7ba3ff" fontWeight="700">
                    注册新账号
                </Text>
            </Flex>
        </Flex>
    )
}

export default QrCode
