/*
 * @Author: DZR
 * @Date: 2022-07-29 17:02:30
 * @LastEditTime: 2022-08-05 11:50:50
 * @LastEditors: DZR
 * @Description:歌手详情页中的专辑页面（显示热门50首歌的组件）
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\Singer\SingerPage\Album.tsx
 */
import { Box, Flex, Text, Image } from "@chakra-ui/react"
import {
    AiOutlineFolderAdd,
    AiOutlinePlayCircle,
    AiOutlineHeart,
    AiOutlineRight
} from "react-icons/ai"
import "@/style/index.css"
import { BsDownload } from "react-icons/bs"
import { useLocation } from "react-router-dom"
import { useSingerHotFiftySongs } from "@/services"
import { useMemo, useState } from "react"
import AlbumList from "./AlbumList"
import { calculateDuration } from "@/utils"
import { useCtxValue } from "@/hooks"

type myType = {
    msg: any
}

const Album = () => {
    const location = useLocation()
    const { msg } = location.state as myType
    const { data: songs, isLoading: songsIsloading } = useSingerHotFiftySongs({ id: msg.id })
    const Details = useMemo(() => {
        if (songs) {
            //console.log(songs.songs)
            return songs.songs
        }
    }, [songs])
    const [on, setOn] = useState(true)
    const { playMusic } = useCtxValue()

    //console.log(playMusic)
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
            <Flex>
                <Box fontSize={20} h="170px" w="190px">
                    <Image
                        borderRadius="5px"
                        sizes="100%"
                        src="https://s1.ax1x.com/2022/08/04/veqDG4.png"
                    />
                </Box>
                <Box ml="70px" w="100%">
                    <Flex>
                        <Text fontWeight="bold" mr="20px">
                            热门50首
                        </Text>
                        <Text>
                            <AiOutlinePlayCircle className="singerPlayCircle" />
                        </Text>
                        <span className="singerTransparentLine"></span>
                        <AiOutlineFolderAdd color="gray" fontSize="1.5em" />
                    </Flex>
                    <Box>
                        {songsIsloading || !Details ? (
                            <Box fontSize={100}>Loading</Box>
                        ) : (
                            Details.map((item: any, index: number) => {
                                return (
                                    <Flex
                                        bg={index % 2 === 0 ? "#fafafa" : "white"}
                                        className="topFiftySong"
                                        display={index > 9 && on ? "none" : "flex"}
                                        fontSize={14}
                                        key={index}
                                        onDoubleClick={() => {
                                            play(item)
                                        }}
                                    >
                                        <Text color="gray" marginRight="15px">
                                            {index < 9 ? "0" + (index + 1) : index + 1}
                                        </Text>
                                        <AiOutlineHeart className="heartIcon" fontSize={17} />
                                        <BsDownload className="heartIcon" fontSize={17} />
                                        {item.name}
                                        <Text color="gray" position="absolute" right="200px">
                                            {calculateDuration(item.dt)}
                                        </Text>
                                    </Flex>
                                )
                            })
                        )}
                        <Flex
                            bg="#fafafa"
                            display={on ? "flex" : "none"}
                            fontSize="xs"
                            h="30px"
                            padding="5px"
                            position="relative"
                        >
                            <Box
                                bg="pink"
                                cursor="pointer"
                                onClick={() => {
                                    setOn(false)
                                }}
                            >
                                {songsIsloading ? (
                                    <Box>loading</Box>
                                ) : (
                                    <Text color="gray" position="absolute" right="30px">
                                        查看全部{Details.length}首
                                    </Text>
                                )}
                                <Text color="gray" padding="3px" position="absolute" right="13px">
                                    <AiOutlineRight />
                                </Text>
                            </Box>
                        </Flex>
                    </Box>
                </Box>
            </Flex>
            <AlbumList msg={msg.id}></AlbumList>
        </Box>
    )
}

export default Album
