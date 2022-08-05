/*
 * @Author: Ride-pig
 * @Date: 2022-08-05 09:26:27
 * @LastEditTime: 2022-08-05 15:24:23
 * @LastEditors: Ride-pig
 * @Description: 专辑的歌曲详情
 * @FilePath: \eee\less-music\src\pages\Album\AlbumSongList\index.tsx
 */
import { useCtxValue } from "@/hooks"
import { Box, Flex, VStack, Text } from "@chakra-ui/react"
import React, { FC } from "react"
import { AiOutlineDownload, AiOutlineHeart } from "react-icons/ai"

interface IProps {
    albumContentSongs: any
    albumContentIsLoading: boolean
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

const AlbumSongList: FC<IProps> = ({ albumContentSongs, albumContentIsLoading }) => {
    let songName: string
    let arName: string
    let alName: string

    const { playMusic } = useCtxValue()

    const play = (item: any) => {
        playMusic({
            id: item.id,
            name: item.name,
            cover: item.al.picUrl,
            duration: item.dt,
            artists: item.ar
        })
    }

    return (
        <Box>
            <VStack>
                {albumContentIsLoading ? (
                    <Text color="blue.400" fontSize="2xl" fontWeight="bold">
                        Loading ...
                    </Text>
                ) : (
                    <Flex cursor="default" direction="column" mt="10px">
                        <Flex h="30px" textAlign="center" w="1500px">
                            <Box ml="50px" w="50px">
                                操作
                            </Box>
                            <Box w="25%">标题</Box>
                            <Box w="15%">歌手</Box>
                            <Box w="25%">专辑</Box>
                            <Box w="10%">时间</Box>
                        </Flex>
                        <VStack>
                            {albumContentSongs.map((item: any, index: number) => (
                                <Flex
                                    _hover={{
                                        bg: "blue.200"
                                    }}
                                    alignItems="center"
                                    bg={index % 2 === 0 ? "blue.50" : "gray.100"}
                                    h="35px"
                                    key={item.id}
                                    onClick={() => play(albumContentSongs[index])}
                                    overflow="hidden"
                                    textAlign="center"
                                    textOverflow="ellipsis"
                                    transition="all .3s"
                                    w="100%"
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
                                        w="25%"
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

export default AlbumSongList
