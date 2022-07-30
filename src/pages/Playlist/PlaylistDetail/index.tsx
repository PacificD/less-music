/*
 * @Author: Giaruei
 * @Date: 2022-07-26 20:09:43
 * @LastEditTime: 2022-07-30 11:22:56
 * @LastEditors: Pacific_D
 * @Description: 歌单详情页的歌单信息
 * @FilePath: \less-music\src\pages\Playlist\PlaylistDetail\index.tsx
 */
import { useCtxValue } from "@/hooks"
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react"
import { FC, useState } from "react"

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
    playlist: any
    detailIsLoading: boolean
    tracks: any
}

const PlaylistDetail: FC<IProps> = ({ detailIsLoading, playlist, tracks }) => {
    const [display, setDisplay] = useState<boolean>(false)

    const { playMusic, playlistDispatch } = useCtxValue()

    const playAll = () => {
        playlistDispatch({
            type: "ADD",
            payload: tracks.map((item: any) => {
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
            id: tracks[0].id,
            name: tracks[0].name,
            cover: tracks[0].al.picUrl,
            duration: tracks[0].dt,
            artists: tracks[0].ar
        })
    }

    return (
        <Flex padding="20px" w="110.5em">
            {detailIsLoading ? (
                <Text color="blue.400" fontSize="2xl" fontWeight="bold">
                    Loading ...
                </Text>
            ) : (
                <Flex>
                    <Image
                        borderRadius="12px"
                        h="200px"
                        mr="20px"
                        src={playlist.coverImgUrl}
                        w="200px"
                    />
                    <Flex direction="column" w="600px">
                        <Text fontSize="23px" fontWeight="extrabold" mb="5px">
                            {playlist.name}
                        </Text>
                        <Flex align="center" mb="5px">
                            <Image
                                borderRadius="50%"
                                h="30px"
                                marginRight="10px"
                                src={playlist.creator.avatarUrl}
                            />
                            <Text
                                _hover={{
                                    color: "blue.500"
                                }}
                                color="blue.200"
                                cursor="pointer"
                                marginRight="10px"
                            >
                                {playlist.creator.nickname}
                            </Text>
                            {changeTime(playlist.createTime)}创建
                        </Flex>

                        <Flex mb="5px">
                            {["播放全部", "收藏", "分享", "下载全部"].map((item, index) => (
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
                            <Flex>
                                标签：
                                {playlist.tags.map((item: string, index: number) => (
                                    <Text
                                        _hover={{
                                            color: "blue.500"
                                        }}
                                        color="blue.200"
                                        cursor="pointer"
                                        key={index}
                                    >
                                        {item}&nbsp;&nbsp;
                                    </Text>
                                ))}
                            </Flex>
                            <Box>
                                歌曲：{playlist.trackCount} &nbsp;&nbsp;播放数量：
                                {playlist.playCount}
                            </Box>
                            <Box position="relative">
                                简介：
                                <Box
                                    fontSize="14px"
                                    h={display ? "" : "20px"}
                                    overflow={display ? "none" : "hidden"}
                                    w="560px"
                                    whiteSpace="pre-wrap"
                                >
                                    {playlist.description}
                                </Box>
                                <Box
                                    _hover={{
                                        cursor: "pointer"
                                    }}
                                    borderColor="#90cdf4 transparent transparent transparent"
                                    borderWidth="7px"
                                    h="0"
                                    onClick={() => (display ? setDisplay(false) : setDisplay(true))}
                                    position="absolute"
                                    right="0"
                                    top="15px"
                                    transform={display ? "rotate(180deg)" : " "}
                                    transformOrigin="50% 25%"
                                    transition="all .5s"
                                    w="0"
                                ></Box>
                            </Box>
                        </Box>
                    </Flex>
                </Flex>
            )}
        </Flex>
    )
}
export default PlaylistDetail
