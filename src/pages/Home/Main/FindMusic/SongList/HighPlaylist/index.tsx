/*
 * @Author: Giaruei
 * @Date: 2022-08-02 10:56:16
 * @LastEditTime: 2022-08-02 11:29:40
 * @LastEditors: Giaruei
 * @Description: 精品歌单页面
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\SongList\HighPlaylist\index.tsx
 */

import { useHighqualityPlaylistQuery } from "@/services"
import { IRes } from "@/types"
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react"
import { FC, useMemo } from "react"
import { useNavigate } from "react-router-dom"

const HighPlaylist: FC = () => {
    const navigate = useNavigate()

    const { data: highInfo, isLoading: highPlaylistIsLoading } = useHighqualityPlaylistQuery()
    const highPlaylist = useMemo(() => {
        if (highInfo) {
            return (highInfo as IRes).playlists
        }
    }, [highInfo])

    return (
        <Box h="48em" overflow="scroll" px="20px">
            <Box fontSize="25px" fontWeight="bold" ml="60px" my="10px">
                精品歌单
            </Box>
            {highPlaylistIsLoading ? (
                <Box>Loading</Box>
            ) : (
                <Grid columnGap="10px" gap={6} templateColumns="repeat(5, 1fr)">
                    {highPlaylist.map((item: any) => (
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
                    ))}
                </Grid>
            )}
        </Box>
    )
}
export default HighPlaylist
