/*
 * @Author: Pacific_D
 * @Date: 2022-07-18 10:28:37
 * @LastEditTime: 2022-07-27 20:58:06
 * @LastEditors: Giaruei
 * @Description:
 * @FilePath: \less-music\src\pages\Login\index.tsx
 */
import { useLocalStorage } from "@/hooks"
import { useHighqualityPlaylistQuery, usePlaylistDetailQuery } from "@/services"
import { IRes } from "@/types"
import { VStack, StackDivider, Box, Flex, Image, Text, Spacer } from "@chakra-ui/react"
import { FC, useMemo, useState } from "react"
import { useNavigate } from "react-router-dom"
// import { Playlist } from "./Playlist"

const Login: FC = () => {
    const { data: playlist, isLoading: playlistIsLoading } = useHighqualityPlaylistQuery(),
        [playlistId, setPlaylistId] = useState<number>(512953021),
        { data: info, isLoading: detailIsLoading } = usePlaylistDetailQuery(
            playlistId,
            // 第二个参数 `enabled` 为控制是否请求的布尔变量
            !!(playlist as IRes)?.playlists
        )

    const playlistDetails = useMemo(() => {
        if (info) {
            return JSON.stringify((info as IRes).playlist)
        }
    }, [info])

    const navigate = useNavigate()

    return (
        <Box h="full" px="12" py="8" w="full">
            <Flex h="full" w="90%">
                <VStack
                    align="stretch"
                    divider={<StackDivider borderColor="gray.200" />}
                    spacing={2}
                >
                    {playlistIsLoading ? (
                        <Text color="red.400" fontSize="2xl" fontWeight="bold">
                            Loading ...
                        </Text>
                    ) : (
                        (playlist as IRes).playlists?.map((item: any) => (
                            <Flex
                                align="center"
                                cursor="pointer"
                                key={item.id}
                                onClick={() => {
                                    setPlaylistId(item.id)
                                    localStorage.setItem("id", item.id)
                                    navigate("/playlist")
                                }}
                            >
                                <Image src={item.coverImgUrl} w="10%"></Image>
                                <Text>
                                    {item.name}
                                    <br></br>
                                    主题：{item.tag}
                                    <br />
                                    {item.description}
                                </Text>
                            </Flex>
                        ))
                    )}
                </VStack>
                <Spacer></Spacer>
                <VStack
                    align="stretch"
                    divider={<StackDivider borderColor="gray.200" />}
                    maxH="96"
                    spacing={1}
                >
                    {detailIsLoading ? (
                        <Text color="blue.400" fontSize="2xl" fontWeight="bold">
                            Loading ...
                        </Text>
                    ) : (
                        <Text maxW={64}>{playlistDetails}</Text>
                    )}
                </VStack>
            </Flex>
        </Box>
    )
}

export default Login
