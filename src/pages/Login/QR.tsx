/*
 * @Author: Giaruei
 * @Date: 2022-08-03 20:09:37
 * @LastEditTime: 2022-08-09 09:21:48
 * @LastEditors: DZR
 * @Description: 二维码登录界面
 * @FilePath: \less-music\src\pages\Login\QR.tsx
 */

import { useQRCodeKeyQuery } from "@/services"
import { IRes, METHODS } from "@/types"
import { useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import { Flex, Text, Box, Image, useToast, toast } from "@chakra-ui/react"
import { LoadingTwo } from "@/components"
import request from "@/services/request"

/**
 * @description: 判断二维码的扫描状态
 * @param {string} key
 * @return {*}
 */
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

export const QrCode = () => {
    const navigate = useNavigate()
    const toast = useToast()

    //获取当前时间的时间戳
    const timestamp = Date.parse(new Date().toString())

    // 检测二维码的key值
    const { data: info, isLoading: keyIsLoading } = useQRCodeKeyQuery(timestamp)
    const keyResult = useMemo(() => {
        if (info) {
            return (info as IRes).key
        }
    }, [info]) as string[]
    const key = useMemo(() => {
        if (keyResult) {
            return keyResult[0]
        }
    }, [keyResult])

    // 轮询检查二维码扫描状态
    useEffect(() => {
        let timer = setInterval(async () => {
            const statusRes = await checkStatus(key!)
            if (statusRes.code === 801) {
                toast({
                    title: "等待扫码",
                    description: "qaq宝宝快点扫我哟~",
                    variant: "subtle",
                    position: "top-left",
                    duration: 3000,
                    isClosable: true
                })
            }
            if (statusRes.code === 800) {
                clearInterval(timer)
                toast({
                    title: "二维码已失效",
                    description: "请稍等片刻，等待二维码刷新哦~",
                    variant: "subtle",
                    position: "top-left",
                    status: "warning",
                    duration: 3000,
                    isClosable: true
                })
            }
            if (statusRes.code === 803) {
                toast({
                    title: "宝，登录成功qaq",
                    variant: "subtle",
                    position: "top",
                    status: "success",
                    duration: 3000,
                    isClosable: true
                })
                // 这一步会返回cookie 并将其储存
                clearInterval(timer)
                localStorage.setItem("cookie", statusRes.cookie)
                navigate("/")
            }
        }, 4000)
        return () => clearInterval(timer)
    }, [key, navigate, toast])

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
