/*
 * @Author: Ride-pig 327796210@qq.com
 * @Date: 2022-07-25 20:41:56
 * @LastEditors: Ride-pig 327796210@qq.com
 * @LastEditTime: 2022-07-29 21:12:12
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\NewMusci\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useTopSongQuery } from "@/services"
import { IRes } from "@/types"
import { Box, Center, Circle, Flex } from "@chakra-ui/react"
import React, { useMemo, useState } from "react"
import { BsFillPlayFill } from "react-icons/bs"
import Images from "../lazyLoad"

export const NewSongExpress = () => {
    // const [type, setType] = useState<number>(0)
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
                        key={index}
                        marginTop="1em"
                        transition="all .3s"
                        width="86em"
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
                            w="52em"
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
                            {item.artists[1]
                                ? item.artists[0].name + "/" + item.artists[1].name
                                : item.artists[0].name}
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
                        <Box fontSize="0.875em" w="8em">
                            {formatDuring(Number(item.duration))}
                        </Box>
                    </Box>
                ))
            )}
        </Box>
    )
}

export default NewSongExpress
