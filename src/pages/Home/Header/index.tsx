/*
 * @Author: DZR
 * @Date: 2022-07-20 09:30:37
 * @LastEditTime: 2022-08-03 15:24:38
 * @LastEditors: Giaruei
 * @Description:
 * @FilePath: \less-music\src\pages\Home\Header\index.tsx
 */
import { lastMsgContext, msgContext, setLastMsgContext, setMsgContext } from ".."

import { Box, Center, chakra, Circle, Input, Spacer, Square, Text } from "@chakra-ui/react"
import { FC, useContext } from "react"
import { RiLoginBoxLine, RiNeteaseCloudMusicFill } from "react-icons/ri"
import { AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import { ColorModeSwitcher } from "@/components"
const CloudMusic = chakra(RiNeteaseCloudMusicFill)

const Header: FC = () => {
    const lastMsg = useContext(lastMsgContext)
    const msg = useContext(msgContext)
    const setMsg = useContext(setMsgContext)
    const setLastMsg = useContext(setLastMsgContext)
    const navigate = useNavigate()
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
                    <Text color="white" cursor="pointer" fontSize="xl" marginRight="3em">
                        网易云音乐
                    </Text>
                    <Circle bg="blackAlpha.200">
                        <AiOutlineLeft
                            color="white"
                            cursor="pointer"
                            fontSize="1.5em"
                            onClick={() => {
                                console.log(msg, lastMsg)
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
                    <Spacer></Spacer>
                    <ColorModeSwitcher />
                    <RiLoginBoxLine color="white" fontSize="1.5em"></RiLoginBoxLine>
                </Center>
            </Box>
        </Center>
    )
}

export default Header
