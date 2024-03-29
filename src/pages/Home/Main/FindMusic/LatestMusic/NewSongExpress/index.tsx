/*
 * @Author: Ride-pig 327796210@qq.com
 * @Date: 2022-07-25 20:41:56
 * @LastEditors: Ride-pig
 * @LastEditTime: 2022-08-05 16:07:39
 * @FilePath: \eee\less-music\src\pages\Home\Main\FindMusic\LatestMusic\NewSongExpress\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useCtxValue } from "@/hooks"
import { useTopSongQuery } from "@/services"
import { IRes } from "@/types"
import { Box, Center, Circle, Flex } from "@chakra-ui/react"
import React, { useMemo, useState } from "react"
import { BsFillPlayFill } from "react-icons/bs"
import Images from "../lazyLoad"

export const NewSongExpress = () => {
    const { data: topSong, isLoading: topSongIsLoading } = useTopSongQuery(0)
    const topSongResult: any = useMemo(() => {
        if (topSong) {
            return (topSong as IRes).data
        }
    }, [topSong])

    // 将毫秒转化成分跟秒的函数
    function formatDuring(mss: number) {
        let minuteString = (mss % (1000 * 60 * 60)) / (1000 * 60)
        let secondString = (mss % (1000 * 60)) / 1000
        let minutes = parseInt(minuteString.toString())
        let seconds = parseInt(secondString.toString())
        if (minuteString >= 0 && minuteString < 10) {
            if (secondString >= 10) {
                return "0" + minutes + ":" + seconds
            } else {
                return "0" + minutes + ":0" + seconds
            }
        } else {
            return "0" + minutes + ":" + seconds
        }
    }

    // 引入封装的播放音乐的hooks
    const { playMusic } = useCtxValue()

    const play = (item: any) => {
        playMusic({
            id: item.id,
            name: item.name,
            cover: item.album.picUrl,
            duration: item.duration,
            artists: item.artists
        })
    }

    return (
        <Box display="flex" flexWrap="wrap" h="30em" justifyContent="center">
            {topSongIsLoading ? (
                <Box color="red.400" fontSize="2xl" fontWeight="bold">
                    Loading ...
                </Box>
            ) : (
                (topSong as IRes).data?.map((item: any, index: number) => (
                    <Box
                        _hover={{ bgColor: "#6eaff4" }}
                        alignItems="center"
                        bgColor="#8fc1f7"
                        borderRadius="1em"
                        cursor="pointer"
                        display="flex"
                        height="5.625em"
                        justifyContent="center"
                        key={item.id}
                        marginTop="1em"
                        onClick={() => play(item)}
                        transition="all .3s"
                        width="75em"
                    >
                        <Box fontSize="0.875em" fontWeight="900" textAlign="center" w="4em">
                            {index + 1}
                        </Box>
                        <Flex
                            alignItems="center"
                            columnGap="1em"
                            fontSize="0.875em"
                            overflow="hidden"
                            textOverflow="ellipsis"
                            w="45em"
                            whiteSpace="nowrap"
                        >
                            <Center position="relative">
                                <Images className="image" src={item.album.picUrl}></Images>

                                <Circle bgColor="#fff" position="absolute" size="2em">
                                    <BsFillPlayFill color="#f06e97" />
                                </Circle>
                            </Center>
                            {item.name}
                            <Box
                                color="#f06e97"
                                overflow="hidden"
                                textOverflow="ellipsis"
                                whiteSpace="nowrap"
                            >
                                {item.alias[0] ? "(" + item.alias[0] + ")" : ""}
                            </Box>
                        </Flex>
                        <Box
                            fontSize="0.875em"
                            overflow="hidden"
                            textAlign="start"
                            textOverflow="ellipsis"
                            w="18em"
                            whiteSpace="nowrap"
                        >
                            {item.artists.map((singer: any, index: number) => (
                                <Box display="inline-block" key={singer.name}>
                                    {singer.name}
                                    {index === item.artists.length - 1 ? "" : "/"}
                                </Box>
                            ))}
                        </Box>
                        <Box
                            fontSize="0.875em"
                            overflow="hidden"
                            textAlign="start"
                            textOverflow="ellipsis"
                            w="16em"
                            whiteSpace="nowrap"
                        >
                            {item.album.name}
                        </Box>
                        <Box fontSize="0.875em" w="4em">
                            {formatDuring(Number(item.duration))}
                        </Box>
                    </Box>
                ))
            )}
        </Box>
    )
}

export default NewSongExpress
