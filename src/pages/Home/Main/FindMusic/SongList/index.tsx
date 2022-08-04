/*
 * @Author: DZR
 * @Date: 2022-07-22 17:45:40
 * @LastEditTime: 2022-08-04 10:32:06
 * @LastEditors: Giaruei
 * @Description: 歌单页面
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\SongList\index.tsx
 */
import { useHighqualityPlaylistQuery, useTopPlaylistQuery } from "@/services"
import { IRes } from "@/types"
import { Box, Image, Grid, Flex, Text } from "@chakra-ui/react"
import { useMemo } from "react"
import { RiVipCrownLine } from "react-icons/ri"
import { useNavigate } from "react-router-dom"
export const SongList = () => {
    const navigate = useNavigate()

    const { data: info, isLoading: playlistIsLoading } = useTopPlaylistQuery()
    const playlist = useMemo(() => {
        if (info) {
            return (info as IRes).playlists
        }
    }, [info])
    const { data: highInfo, isLoading: highPlaylistIsLoading } = useHighqualityPlaylistQuery()
    const highPlaylist = useMemo(() => {
        if (highInfo) {
            return (highInfo as IRes).playlists
        }
    }, [highInfo])

    return (
        <Box h="47em" overflowY="scroll" px="100px">
            <Flex
                cursor="pointer"
                h="200px"
                mb="20px"
                onClick={() => navigate("/findmusic/highplaylist")}
                pos="relative"
            >
                {highPlaylistIsLoading ? (
                    <h2>sb</h2>
                ) : (
                    <>
                        <Box
                            bg={`url(${highPlaylist[0].coverImgUrl}) center`}
                            bgSize="cover"
                            borderRadius="20px"
                            h="200px"
                            style={{
                                filter: "blur(4px)"
                            }}
                            w="100%"
                            zIndex="1"
                        ></Box>
                        <Flex h="180px" mt="5px" position="absolute" zIndex="2">
                            <Image
                                borderRadius="10px"
                                h="180px"
                                ml="10px"
                                mt="5px"
                                src={highPlaylist[0].coverImgUrl}
                            />
                            <Box ml="20px">
                                <Flex
                                    alignItems="center"
                                    border="1px solid #F6AD55"
                                    borderRadius="20px"
                                    color="orange.300"
                                    h="35px"
                                    justifyContent="space-evenly"
                                    lineHeight="35px"
                                    my="25px"
                                    w="110px"
                                    whiteSpace="nowrap"
                                >
                                    <RiVipCrownLine />
                                    精品歌单
                                </Flex>
                                <Text color="white" fontSize="25px">
                                    {highPlaylist[0].name}
                                </Text>
                            </Box>
                        </Flex>
                    </>
                )}
            </Flex>
            <Grid columnGap="10px" gap={6} pt="5px" templateColumns="repeat(5, 1fr)">
                {playlistIsLoading ? (
                    <h2>你是大傻逼</h2>
                ) : (
                    playlist.map((item: any) => (
                        <Flex direction="column" h="100%" key={item.id} w="100%">
                            <Image
                                _hover={{
                                    transform: "translateY(-5px)"
                                }}
                                borderRadius="10px"
                                h="200px"
                                mx="auto"
                                onClick={() => {
                                    navigate(`/playlist/${item.id}`)
                                }}
                                src={item.coverImgUrl}
                                transition="all .3s"
                                w="200px"
                            />
                            <Box mx="auto" w="200px">
                                <Text
                                    _hover={{ color: "gray.700" }}
                                    color="gray.600"
                                    fontSize="20px"
                                >
                                    {item.name}
                                </Text>
                                <Text color="gray.400">{item.creator.nickname}</Text>
                            </Box>
                        </Flex>
                    ))
                )}
            </Grid>
        </Box>
    )
}

export default SongList
