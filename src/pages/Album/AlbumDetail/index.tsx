/*
 * @Author: Ride-pig
 * @Date: 2022-08-05 09:26:35
 * @LastEditTime: 2022-08-05 15:31:20
 * @LastEditors: Ride-pig
 * @Description: 专辑详情信息制作
 * @FilePath: \eee\less-music\src\pages\Album\AlbumDetail\index.tsx
 */
import { useCtxValue } from "@/hooks"
import { Flex, Text, Image, Box, Center, Button } from "@chakra-ui/react"
import React, { FC, useState } from "react"
import bgc from "../../Home/Main/FindMusic/LatestMusic/NewDiscs/background.png"

/**
 * @description: 将时间戳转换成日期
 * @param {number} time
 * @return {*}
 */
function changeTime(time: number): string {
    const date = new Date(time)
    const [year, month, day] = [
        date.getFullYear() + "-",
        (date.getMonth() + 1 < 10 ? "0" + (date.getMonth() + 1) : date.getMonth() + 1) + "-",
        date.getDate()
    ]
    return year + month + day
}

interface IProps {
    albumContentAlbum: any
    albumContentIsLoading: boolean
    albumContentSongs: any
}

const AlbumDetail: FC<IProps> = ({
    albumContentAlbum,
    albumContentIsLoading,
    albumContentSongs
}) => {
    const [display, setDisplay] = useState<boolean>(false)

    const { playMusic, playlistDispatch } = useCtxValue()

    const playAll = () => {
        playlistDispatch({
            type: "ADD",
            payload: albumContentSongs.map((item: any) => {
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
            id: albumContentSongs[0].id,
            name: albumContentSongs[0].name,
            cover: albumContentSongs[0].al.picUrl,
            duration: albumContentSongs[0].dt,
            artists: albumContentSongs[0].ar
        })
    }

    return (
        <Flex h="14em" padding="20px" w="100%">
            {albumContentIsLoading ? (
                <Text color="blue.400" fontSize="2xl" fontWeight="bold">
                    Loading ...
                </Text>
            ) : (
                <Flex>
                    <Box borderRadius="12px" h="200px" position="relative" w="250px">
                        <Image
                            h="200px"
                            left="15%"
                            position="absolute"
                            src={bgc}
                            w="200px"
                            zIndex="-1"
                        />
                        <Image
                            borderRadius="12px"
                            h="200px"
                            mr="20px"
                            src={albumContentAlbum.blurPicUrl}
                            w="200px"
                        />
                    </Box>
                    <Flex alignItems="start" flexDirection="column" pl="1em">
                        <Center columnGap="1.5em" mb="10px">
                            <Center
                                border="1px solid red"
                                borderRadius="0.3em"
                                color="red"
                                fontSize="sm"
                                h="1.5em"
                                w="3em"
                            >
                                专辑
                            </Center>
                            <Text fontSize="1.5em" fontWeight="bold" paddingBottom="5px">
                                {albumContentAlbum.name}
                            </Text>
                        </Center>
                        <Flex mb="10px">
                            {["播放全部", "收藏", "VIP下载", "分享"].map((item, index) => (
                                <Button
                                    _focus={{ boxShadow: "none" }}
                                    colorScheme="blue"
                                    fontWeight="normal"
                                    key={index}
                                    mr="20px"
                                    onClick={index === 0 ? playAll : () => console.log("other")}
                                >
                                    {item}
                                </Button>
                            ))}
                        </Flex>
                        <Box>
                            <Box color="gray" fontSize="14px">
                                歌手：{albumContentAlbum.artists[0].name}
                            </Box>
                            <Box color="gray" fontSize="14px" pt="10px">
                                时间：{changeTime(albumContentAlbum.publishTime)}
                            </Box>
                        </Box>
                    </Flex>
                </Flex>
            )}
        </Flex>
    )
}

export default AlbumDetail
