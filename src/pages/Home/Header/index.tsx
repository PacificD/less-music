/*
 * @Author: DZR
 * @Date: 2022-07-20 09:30:37
<<<<<<< HEAD
<<<<<<< HEAD
 * @LastEditTime: 2022-08-09 09:21:25
 * @LastEditors: DZR
 * @Description:
=======
 * @LastEditTime: 2022-08-08 19:35:57
 * @LastEditors: Giaruei
 * @Description: 页面的Header 判断登录的状态
>>>>>>> feature-cjr
 * @FilePath: \less-music\src\pages\Home\Header\index.tsx
=======
 * @LastEditTime: 2022-08-08 19:36:08
 * @LastEditors: Ride-pig
 * @Description:
 * @FilePath: \eee\less-music\src\pages\Home\Header\index.tsx
>>>>>>> feature-ljp
 */
import { lastMsgContext, setMsgContext } from ".."

import {
    Box,
    Button,
    Center,
    chakra,
    Circle,
    Flex,
    Image,
    Input,
    Spacer,
    Square,
    Text,
    useToast
} from "@chakra-ui/react"
import { FC, useContext, useEffect, useMemo } from "react"
import { RiLoginBoxLine, RiNeteaseCloudMusicFill } from "react-icons/ri"
import { AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { ColorModeSwitcher } from "@/components"
import request from "@/services/request"
import { IRes, METHODS } from "@/types"
import { useUserStatusQuery } from "@/services"

const CloudMusic = chakra(RiNeteaseCloudMusicFill)

/**
 * @description: 清除本地cookie 退出登录状态（好像没啥用）
 * @return {*}
 */
async function logout() {
    const res = request<IRes>("/logout", { cookie: localStorage.getItem("cookie") }, METHODS.POST)
    localStorage.removeItem("cookie")
    localStorage.removeItem("userId")
    return await res
}

const Header: FC = () => {
    const lastMsg = useContext(lastMsgContext)
    const setMsg = useContext(setMsgContext)
    const navigate = useNavigate()
    const toast = useToast()

    // 检测登录状态
    const cookie = localStorage.getItem("cookie") ? localStorage.getItem("cookie") : ""

    const { data, isLoading } = useUserStatusQuery(cookie as string)
    const info = useMemo(() => {
        if (data) {
            return (data as IRes).data
        }
    }, [data])

    let profile: any
    if (!isLoading) {
        if (!info.account.anonimousUser) {
            profile = info.profile
            localStorage.setItem("userId", profile.userId)
        } else if (info.account.anonimousUser) {
            localStorage.setItem("userId", info.account.id)
        }
    }
    useEffect(() => {
        if (!cookie) {
            toast({
                title: "还没登录捏",
                description: "快点击按钮去登录吧！",
                variant: "subtle",
                position: "top",
                status: "warning",
                duration: 3000,
                isClosable: true
            })
        }
    }, [cookie, toast])

    return (
        <Center>
            <Box bg="#2b6cb0" h="4em" w="100%">
                <Center>
                    <CloudMusic
                        color="white"
                        cursor="pointer"
                        display="inline"
                        fontSize="2em"
                        m="0.5em"
                    />
                    <Text
                        color="white"
                        cursor="pointer"
                        fontSize="xl"
                        marginBottom="4px"
                        marginRight="3em"
                        onClick={() => navigate("/")}
                    >
                        网易云音乐
                    </Text>
                    <Circle bg="blackAlpha.200">
                        <AiOutlineLeft
                            color="white"
                            cursor="pointer"
                            fontSize="1.5em"
                            onClick={() => {
                                navigate(-1)
                                setMsg(lastMsg[lastMsg.length - 2])
                                lastMsg.pop()
                            }}
                            style={{ padding: "4px" }}
                        ></AiOutlineLeft>
                    </Circle>
                    <Box w="10px"></Box>
                    <Circle bg="blackAlpha.200">
                        <AiOutlineRight
                            color="white"
                            cursor="pointer"
                            fontSize="1.5em"
                            onClick={() => {
                                navigate(+1)
                            }}
                            style={{ padding: "4px", transition: "all .3s" }}
                        ></AiOutlineRight>
                    </Circle>
                    <Box w="2em"></Box>
                    <Square bg="blackAlpha.100" borderRadius="24px 0 0 24px" size="24px">
                        <AiOutlineSearch color="white"></AiOutlineSearch>
                    </Square>
                    <Input
                        _focus={{ outline: "none" }}
                        bg="blackAlpha.100"
                        border="none"
                        borderRadius="0 24px 24px 0"
                        color="white"
                        placeholder="如何上班摸鱼"
                        size="xs"
                        type="search"
                        w="12em"
                    />
                    <Spacer></Spacer>
                    {cookie ? (
                        isLoading ? (
                            <Box color="white">你是傻逼</Box>
                        ) : profile ? (
                            <Flex alignItems="center">
                                <Image
                                    borderRadius="50%"
                                    h="40px"
                                    mr="10px"
                                    src={profile.avatarUrl}
                                />
                                <Box color="white">{profile.nickname}</Box>
                            </Flex>
                        ) : (
                            <Box color="white">你是低等的游客状态</Box>
                        )
                    ) : (
                        <Button mr="3em" onClick={() => navigate("login")}>
                            点我登录
                        </Button>
                    )}
                    <ColorModeSwitcher />
                    <Center bg="transparent" className="logout" cursor="pointer" h="3em" w="3em">
                        <RiLoginBoxLine
                            color="white"
                            cursor="pointer"
                            fontSize="1.5em"
                            onClick={() => {
                                logout()
                                navigate("/")
                            }}
                        ></RiLoginBoxLine>
                    </Center>
                    <Center
                        bg="#fff"
                        borderRadius="1em"
                        className="show"
                        h="2em"
                        opacity="0"
                        position="fixed"
                        right="3em"
                        w="6em"
                        zIndex="44"
                    >
                        退出登录
                    </Center>
                </Center>
            </Box>
        </Center>
    )
}

export default Header
