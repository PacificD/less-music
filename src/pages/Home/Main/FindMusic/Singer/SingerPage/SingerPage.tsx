/*
 * @Author: DZR
 * @Date: 2022-07-28 15:20:56
 * @LastEditTime: 2022-07-29 22:48:56
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\Singer\SingerPage\SingerPage.tsx
 */
import { Box, Button, Flex, Text, Image } from "@chakra-ui/react"
import { useLocation } from "react-router-dom"
import { AiOutlineFolderAdd, AiOutlinePlayCircle } from "react-icons/ai"
import { useArtistDetails, useSingerHotFiftySongs } from "@/services"
import { useMemo } from "react"
import Album from "./Album"
type myType = {
    msg: any
}

const SingerPage = () => {
    const location = useLocation()
    const { msg } = location.state as myType
    const text = msg.alias.length === 2 ? msg.alias[0] + " ; " + msg.alias[1] : msg.alias[0]
    //console.log(msg)
    // console.log(msg.id)
    // const { data: songs, isLoading: songsIsloading } = useSingerHotFiftySongs({ id: msg.id })
    // const Details = useMemo(() => {
    //     if (songs) {
    //         //console.log(songs)
    //         return songs.songs
    //     }
    // }, [songs])

    // console.log(Details)
    return (
        <Box padding="2em">
            <Flex>
                <Box bg="lightgray" fontSize={20} h="200px" w="200px">
                    <Image alt="pic" sizes="100%" src={msg.img1v1Url}></Image>
                </Box>
                <Box h="200px" paddingLeft="10px">
                    <Text fontSize={18} fontWeight="bold">
                        {msg.name}
                    </Text>
                    <Text>{text}</Text>
                    <button className="singerCollectButton">
                        <AiOutlineFolderAdd color="rgb(199, 199, 199)" fontSize="1.5em" />
                        收藏
                    </button>
                    <Text display="inline" fontSize="xs">
                        单曲数：{msg.musicSize}
                    </Text>
                    <Text display="inline" fontSize="xs" ml="15px">
                        专辑数：{msg.albumSize}
                    </Text>
                </Box>
            </Flex>
            <Text mb="20px" mt="20px">
                专辑 MV 歌手详情 相似歌手
            </Text>
            <Album />
        </Box>
    )
}

export default SingerPage
