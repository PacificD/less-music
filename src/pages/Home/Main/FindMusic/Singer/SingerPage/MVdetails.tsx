/*
 * @Author: DZR
 * @Date: 2022-08-02 16:29:08
 * @LastEditTime: 2022-08-03 20:52:58
 * @LastEditors: DZR
 * @Description: MV播放页面详情
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\Singer\SingerPage\MVdetails.tsx
 */

import { MV } from "@/pages"
import { Box, Center, Circle, Flex, Square, Text, Image, Button } from "@chakra-ui/react"
import { AiOutlineFolderAdd } from "react-icons/ai"
import { BiLike } from "react-icons/bi"
import { RiShareCircleFill } from "react-icons/ri"
import { useLocation, useNavigate } from "react-router-dom"
import { HiOutlineDownload } from "react-icons/hi"
import { useMVComments } from "@/services"
import { useMemo, useState } from "react"
import Comments from "@/pages/Comments"

type myType = {
    msg: any
}

const MVdetails = () => {
    const thisLocation = useLocation()
    const { msg } = thisLocation.state as myType
    const { data: mvComments, isLoading: mvCommentsIsLoading } = useMVComments(msg.id)
    const comments = useMemo(() => {
        if (mvComments) {
            return mvComments
        }
    }, [mvComments])
    const singers = JSON.parse(sessionStorage.getItem("singer") as string)
    let imgUrl = ""
    for (let i = 0; i < singers.artists.length; i++) {
        if (singers.artists[i].name === msg.artistName) {
            imgUrl = singers.artists[i].picUrl
            break
        }
    }
    return (
        <Box h="50.5em" overflow="scroll" w="100%">
            <Box h="20em" m="auto" w="70em">
                <Flex>
                    <Box>
                        <Text fontSize="large" fontWeight="semibold">
                            MV详情
                        </Text>
                        {mvCommentsIsLoading ? <Box>loading</Box> : <MV />}
                        {/* {window.location.reload()} */}
                        <Flex>
                            <Circle mt="10px" overflow="hidden" size="3em">
                                {imgUrl === "" ? <Box></Box> : <Image h="3em" src={imgUrl} />}
                            </Circle>
                            <Text color="gray" fontSize="s" lineHeight="3em" mt="10px">
                                {msg.artistName}
                            </Text>
                        </Flex>
                        <Text fontSize={20} fontWeight="bold" mt="20px">
                            {msg.name}
                        </Text>
                        <button className="MVbutton">
                            <Flex>
                                <Text fontSize="xl" ml="30px" mt="2px">
                                    <BiLike />
                                </Text>
                                <Text fontSize="s">赞</Text>
                            </Flex>
                        </button>
                        <button className="MVbutton">
                            <Flex>
                                <Text fontSize="xl" ml="20px" mt="2px">
                                    <AiOutlineFolderAdd />
                                </Text>
                                <Text fontSize="s">收藏</Text>
                            </Flex>
                        </button>
                        <button className="MVbutton">
                            <Flex>
                                <Text fontSize="xl" ml="20px" mt="2px">
                                    <RiShareCircleFill />
                                </Text>
                                <Text fontSize="s">分享</Text>
                            </Flex>
                        </button>
                        <button className="MVbutton">
                            <Flex>
                                <Text fontSize="xl" ml="20px" mt="2px">
                                    <HiOutlineDownload />
                                </Text>
                                <Text fontSize="s">下载</Text>
                            </Flex>
                        </button>
                    </Box>
                    {/* <Box ml="20px">
                        <Text fontSize="large" fontWeight="semibold">
                            相关推荐
                        </Text>
                        <Box bg="pink" h="30em" mt={4} w="17em"></Box>
                    </Box> */}
                </Flex>
                {mvCommentsIsLoading ? <Box>loading</Box> : <Comments comment={comments} />}
            </Box>
        </Box>
    )
}

export default MVdetails

{
    /* <Center>

            </Center> */
}
