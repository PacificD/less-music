/*
 * @Author: DZR
 * @Date: 2022-07-29 17:02:30
 * @LastEditTime: 2022-07-30 09:21:01
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\Singer\SingerPage\Album.tsx
 */
import { Box, Flex, Text, Image } from "@chakra-ui/react"
import { AiOutlineFolderAdd, AiOutlinePlayCircle, AiOutlineHeart } from "react-icons/ai"
import "@/style/index.css"
import { BsDownload } from "react-icons/bs"
import { useLocation } from "react-router-dom"
import { useAlbumDetails, useSingerAlbum, useSingerHotFiftySongs } from "@/services"
import { useMemo } from "react"

type myType = {
    msg: any
}
const singerDetails = [
    { id: "01", song: "新地球", time: "04:37" },
    { id: "02", song: "美人鱼", time: "04:14" },
    { id: "03", song: "不为谁而作的歌", time: "04:29" },
    { id: "04", song: "可惜没有如果", time: "04:58" },
    { id: "05", song: "修炼爱情", time: "04:47" },
    { id: "06", song: "我怀念的", time: "05:12" },
    { id: "07", song: "江南", time: "04:27" },
    { id: "08", song: "过", time: "03:23" },
    { id: "09", song: "浪漫血液", time: "04:32" },
    { id: "10", song: "手心的蔷薇", time: "04:40" }
]

const Album = () => {
    const location = useLocation()
    const { msg } = location.state as myType
    //const text = msg.alias.length === 2 ? msg.alias[0] + " ; " + msg.alias[1] : msg.alias[0]
    //console.log(msg)
    // console.log(msg.id)
    const { data: songs, isLoading: songsIsloading } = useSingerHotFiftySongs({ id: msg.id })
    const Details = useMemo(() => {
        if (songs) {
            //console.log(songs)
            return songs.songs
        }
    }, [songs])

    const { data: album, isLoading: albumIsLoading } = useSingerAlbum({ id: msg.id })
    const albumNames = useMemo(() => {
        if (album) {
            return album.hotAlbums
        }
    }, [album])
    //console.log(albumNames)
    //const {data:albumDetails,isLoading:albumDetailsIsLoading}=useAlbumDetails()

    return (
        <Box>
            <Flex>
                <Box bg="skyblue" fontSize={20} h="170px" w="190px">
                    <Image
                        alt="top50"
                        src="https://gitee.com/deng-zirong-Git/imgs/raw/master/top50.png"
                    ></Image>
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
                        {songsIsloading ? (
                            <Box fontSize={200}>Loading</Box>
                        ) : (
                            Details.map((item: any, index: number) => {
                                if (index % 2 === 0) {
                                    return (
                                        <Flex
                                            bg="#fafafa"
                                            className="topFiftySong"
                                            fontSize={14}
                                            key={index}
                                        >
                                            <Text color="gray" marginRight="15px">
                                                {index < 9 ? "0" + (index + 1) : index + 1}
                                            </Text>
                                            <AiOutlineHeart className="heartIcon" fontSize={17} />
                                            <BsDownload className="heartIcon" fontSize={17} />
                                            {item.name}
                                            <Text color="gray" position="absolute" right="200px">
                                                {/* {item.time} */}
                                            </Text>
                                        </Flex>
                                    )
                                }
                                return (
                                    <Flex className="topFiftySong" fontSize={14} key={index}>
                                        <Text color="gray" marginRight="15px">
                                            {index < 9 ? "0" + (index + 1) : index + 1}
                                        </Text>
                                        <AiOutlineHeart className="heartIcon" fontSize={17} />
                                        <BsDownload className="heartIcon" fontSize={17} />
                                        {item.name}
                                        <Text color="gray" position="absolute" right="200px">
                                            {/* {item.time} */}
                                        </Text>
                                    </Flex>
                                )
                            })
                        )}
                    </Box>
                </Box>
            </Flex>
            {/* {albumIsLoading ? (
                <Box fontSize={200}>Loading</Box>
            ) : (
                albumNames.map((item: any, index: number) => {
                    return (
                        <Flex key={index} mt="50px">
                            <Box bg="skyblue" fontSize={20} h="170px" w="190px">
                                <Image sizes="100%" src={item.blurPicUrl}></Image>
                            </Box>
                        </Flex>
                    )
                })
            )} */}
        </Box>
    )
}

export default Album
