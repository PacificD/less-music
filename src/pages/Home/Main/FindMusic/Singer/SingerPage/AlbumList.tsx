/*
 * @Author: DZR
 * @Date: 2022-07-30 15:49:51
 * @LastEditTime: 2022-08-05 11:51:29
 * @LastEditors: DZR
 * @Description: 歌手详情页中的专辑页面（热门50首歌下的专辑组件）
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\Singer\SingerPage\AlbumList.tsx
 */

import { useCtxValue } from "@/hooks"
import { useAlbumDetails } from "@/services"
import { IRes } from "@/types"
import { Box, Flex, Image, Text } from "@chakra-ui/react"
import { resolve } from "dns"
import { useMemo } from "react"
import { AiOutlineFolderAdd, AiOutlineHeart, AiOutlinePlayCircle } from "react-icons/ai"
import { BsDownload } from "react-icons/bs"
import { calculateDuration } from "@/utils"

const AlbumList = (props: any) => {
    const { data: albumDetails, isLoading: albumIsLoading } = useAlbumDetails(props.msg)
    const Albums = useMemo(() => {
        if (albumDetails) {
            //console.log((albumDetails as IRes).albums)
            return (albumDetails as IRes).albums
        }
    }, [albumDetails])
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
            {albumIsLoading || !Albums ? (
                <Box fontSize={50}>loading</Box>
            ) : (
                Albums.map((item: any, index: number) => {
                    return (
                        <Flex key={index} mt="50px">
                            <Box fontSize={20} h="170px" w="190px">
                                <Image sizes="100%" src={item.album.blurPicUrl} />
                            </Box>
                            <Box ml="70px" w="100%">
                                <Flex>
                                    <Text fontWeight="bold" mr="20px">
                                        {item.album.name}
                                    </Text>
                                    <Text>
                                        <AiOutlinePlayCircle className="singerPlayCircle" />
                                    </Text>
                                    <span className="singerTransparentLine"></span>
                                    <AiOutlineFolderAdd color="gray" fontSize="1.5em" />
                                </Flex>
                                {item.songs.map((item: any, index: number) => {
                                    return (
                                        <Flex
                                            bg={index % 2 === 0 ? "#fafafa" : "white"}
                                            className="topFiftySong"
                                            fontSize={14}
                                            key={index}
                                            onDoubleClick={() => play(item)}
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
                                })}
                            </Box>
                        </Flex>
                    )
                })
            )}
        </Box>
    )
}

export default AlbumList
