/*
 * @Author: Giaruei
 * @Date: 2022-07-26 20:07:07
 * @LastEditTime: 2022-07-28 17:24:17
 * @LastEditors: Giaruei
 * @Description: 歌单详情页的歌曲列表
 * @FilePath: \less-music\src\pages\Login\Playlist\Songlist\index.tsx
 */
import { Box, Flex, Text, VStack } from "@chakra-ui/react"
import { FC } from "react"
import { AiOutlineDownload, AiOutlineHeart } from "react-icons/ai"

interface IProps {
    tracks: any
    detailIsLoading: boolean
}

/**
 * @description: 将时间戳转换成分秒的格式
 * @param {number} value
 * @return {*}
 */
function transTime(value: number): string {
    let time = ""
    value = value /= 1000
    let m: string | number = Math.floor(value / 60)
    m = m < 10 ? "0" + m : m
    let s: string | number = Math.floor(value % 60)
    s = s < 10 ? "0" + s : s
    time = m + ":" + s
    return time
}

const Songlist: FC<IProps> = ({ detailIsLoading, tracks }) => {
    let songName: string
    let arName: string
    let alName: string

    return (
        <Box>
            <VStack w="110.5em">
                {detailIsLoading ? (
                    <Text color="blue.400" fontSize="2xl" fontWeight="bold">
                        Loading ...
                    </Text>
                ) : (
                    <Flex cursor="default" direction="column">
                        <Flex h="30px" textAlign="center" w="110.5em">
                            <Box ml="50px" w="50px">
                                操作
                            </Box>
                            <Box w="25%">标题</Box>
                            <Box w="15%">歌手</Box>
                            <Box w="15%">专辑</Box>
                            <Box w="10%">时间</Box>
                        </Flex>
                        <VStack>
                            {(tracks as any[]).map((item: any, index: number) => (
                                <Flex
                                    _hover={{
                                        bg: "blue.200"
                                    }}
                                    alignItems="center"
                                    // bg="blue.50"
                                    bg={index % 2 === 0 ? "blue.50" : "gray.100"}
                                    h="35px"
                                    key={item.id}
                                    overflow="hidden"
                                    textAlign="center"
                                    textOverflow="ellipsis"
                                    transition="all .3s"
                                    w="110.5em"
                                    whiteSpace="nowrap"
                                >
                                    <Box textAlign="center" w="50px">
                                        {index + 1}
                                    </Box>
                                    <Flex justifyContent="space-around" w="50px">
                                        <AiOutlineHeart />
                                        <AiOutlineDownload />
                                    </Flex>
                                    <Box
                                        overflow="hidden"
                                        textAlign="center"
                                        textOverflow="ellipsis"
                                        title={(songName = item.name)}
                                        w="25%"
                                        whiteSpace="nowrap"
                                    >
                                        {songName}
                                    </Box>
                                    <Box
                                        h="30px"
                                        lineHeight="30px"
                                        overflow="hidden"
                                        textAlign="center"
                                        textOverflow="ellipsis"
                                        title={
                                            (arName = item.ar.map(
                                                (it: any, index: number) =>
                                                    it.name +
                                                    (item.ar.length === index + 1 ? "" : "/")
                                            ))
                                        }
                                        w="15%"
                                        whiteSpace="nowrap"
                                    >
                                        {arName}
                                    </Box>
                                    <Box
                                        overflow="hidden"
                                        textOverflow="ellipsis"
                                        title={(alName = item.al.name)}
                                        w="15%"
                                        whiteSpace="nowrap"
                                    >
                                        {alName}
                                    </Box>
                                    <Box w="10%">{transTime(item.dt)}</Box>
                                </Flex>
                            ))}
                        </VStack>
                    </Flex>
                )}
            </VStack>
        </Box>
    )
}

export default Songlist
