/*
 * @Author: DZR
 * @Date: 2022-07-20 09:30:37
 * @LastEditTime: 2022-08-08 19:36:08
 * @LastEditors: Ride-pig
 * @Description:
 * @FilePath: \eee\less-music\src\pages\Home\Header\index.tsx
 */
import { lastMsgContext, msgContext, setLastMsgContext, setMsgContext } from ".."

import {
    Box,
    Center,
    chakra,
    Circle,
    Input,
    Spacer,
    Square,
    Text,
    Image,
    Flex
} from "@chakra-ui/react"
import { FC, useContext } from "react"
import { RiLoginBoxLine, RiNeteaseCloudMusicFill } from "react-icons/ri"
import { AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { ColorModeSwitcher } from "@/components"
import { BiMicrophone } from "react-icons/bi"
import request from "@/services/request"
import { IRes, METHODS } from "@/types"

const CloudMusic = chakra(RiNeteaseCloudMusicFill)

const Header: FC = () => {
    const lastMsg = useContext(lastMsgContext)
    const msg = useContext(msgContext)
    const setMsg = useContext(setMsgContext)
    const setLastMsg = useContext(setLastMsgContext)
    const navigate = useNavigate()

    function Logout() {
        request<IRes>("/logout", {}, METHODS.GET).then(res => res.data.code === 200 && res.data)
    }

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
                        placeholder="周杰伦"
                        size="xs"
                        type="search"
                        w="12em"
                    />
                    <Spacer>
                        <Flex alignItems="center" h="100%" justifyContent="space-between">
                            <Circle bg="rgba(0,0,0,.2)" cursor="pointer">
                                <BiMicrophone color="#fff" fontSize="1.5em" />
                            </Circle>
                            <Flex alignItems="center" columnGap="10px">
                                <Circle bg="green.100" cursor="pointer" size="2.5em">
                                    {/* 这里面放着用户的头像
                            <Image /> */}
                                </Circle>
                                <Box
                                    _hover={{ color: "#fff" }}
                                    color="gray"
                                    cursor="pointer"
                                    fontSize="14px"
                                >
                                    用户名称
                                </Box>
                            </Flex>
                        </Flex>
                    </Spacer>
                    <ColorModeSwitcher />
                    <Center bg="transparent" className="logout" cursor="pointer" h="3em" w="3em">
                        <RiLoginBoxLine color="white" fontSize="1.5em"></RiLoginBoxLine>
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
