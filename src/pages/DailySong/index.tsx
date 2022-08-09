/*
 * @Author: Ride-pig
 * @Date: 2022-08-08 11:38:44
 * @LastEditTime: 2022-08-09 09:20:36
 * @LastEditors: DZR
 * @Description: 每日推荐歌单的制作
 * @FilePath: \less-music\src\pages\DailySong\index.tsx
 */
import { useCtxValue } from "@/hooks"
import { useDailySongQuery } from "@/services"
import { IRes } from "@/types"
import { Box, Flex, Text } from "@chakra-ui/react"
import React, { FC, useMemo } from "react"
import { BiPlus } from "react-icons/bi"
import { BsFillPlayFill } from "react-icons/bs"
import { FiFolderPlus } from "react-icons/fi"
import { RiCalendarCheckLine } from "react-icons/ri"
import { useParams } from "react-router-dom"
import AlbumSongList from "../Album/AlbumSongList"

const DailySong: FC = () => {
    const { id } = useParams()
    const AlbumId = parseInt(id!)

    const { data: dailySong, isLoading: dailySongIsLoading } = useDailySongQuery(AlbumId)

    const dailySongResult = useMemo(() => {
        if (dailySong) {
            return (dailySong as IRes).data.dailySongs
        }
    }, [dailySong])

    const { playMusic, playlistDispatch } = useCtxValue()

    const playAll = () => {
        playlistDispatch({
            type: "ADD",
            payload: dailySongResult.map((item: any) => {
                return {
                    id: item.id,
                    name: item.name,
                    cover: item.al.picUrl,
                    duration: item.dt,
                    artists: item.ar
                }
            })
        })
        playMusic({
            id: dailySongResult[0].id,
            name: dailySongResult[0].name,
            cover: dailySongResult[0].al.picUrl,
            duration: dailySongResult[0].dt,
            artists: dailySongResult[0].ar
        })
    }

    return (
        <Box>
            <Flex paddingLeft="2em">
                <RiCalendarCheckLine color="#2b6cb0" fontSize="6em" />
                <Flex alignItems="center" flexWrap="wrap" ml="2em">
                    <Text fontSize="20px" fontWeight="bold" w="100%">
                        每日歌曲推荐
                    </Text>
                    <Text color="gray" fontSize="14px">
                        根据你的音乐口味生成,每天6:00更新
                    </Text>
                </Flex>
            </Flex>
            <Flex borderBottom="1px solid gray" columnGap="2em" mt="1em" paddingLeft="2em">
                <Flex
                    _hover={{ bg: "blue.700" }}
                    alignItems="center"
                    bg="#2b6cb0"
                    borderRadius="1em"
                    color="#fff"
                    cursor="pointer"
                    h="3em"
                    justifyContent="space-around"
                    marginBottom="1em"
                    // 点击播放全部能播放列表里的歌曲
                    onClick={() => playAll()}
                    w="10em"
                >
                    <BsFillPlayFill fontSize="1.5em" />
                    播放全部
                    <BiPlus fontSize="1.5em" />
                </Flex>
                <Flex
                    _hover={{ bg: "blue.700" }}
                    alignItems="center"
                    bg="#2b6cb0"
                    borderRadius="1em"
                    color="#fff"
                    cursor="pointer"
                    h="3em"
                    justifyContent="space-around"
                    w="8em"
                >
                    <FiFolderPlus fontSize="1.5em" />
                    收藏全部
                </Flex>
            </Flex>
            <Box height="39em" overflowY="scroll">
                <AlbumSongList
                    albumContentIsLoading={dailySongIsLoading}
                    albumContentSongs={dailySongResult}
                />
            </Box>
        </Box>
    )
}

export default DailySong
