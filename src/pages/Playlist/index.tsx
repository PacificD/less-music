/*
 * @Author: Giaruei
 * @Date: 2022-07-25 15:24:11
 * @LastEditTime: 2022-07-30 11:03:11
 * @LastEditors: Pacific_D
 * @Description: 歌单的详情页面
 * @FilePath: \less-music\src\pages\Playlist\index.tsx
 */

import {
    usePlaylistCommentQuery,
    usePlaylistDetailQuery,
    usePlaylistTrackAllQuery,
    usePlaylistSubscribers
} from "@/services"
import { IRes } from "@/types"
import { Box, Grid, HStack } from "@chakra-ui/react"
import { FC, useMemo, useState } from "react"
import PlaylistDetail from "./PlaylistDetail"
import Songlist from "./Songlist"
import Comments from "@/pages/Comments"
import Subscriber from "./Subscriber"

function changePage(
    index: number,
    tracks: any,
    songIsLoading: boolean,
    comments: any,
    commentIsLoading: boolean,
    subscribers: any,
    subscriberIsLoading: boolean
) {
    switch (index) {
        case 0:
            return <Songlist detailIsLoading={songIsLoading} tracks={tracks}></Songlist>
        case 1:
            return <Comments comment={comments} detailIsLoading={commentIsLoading}></Comments>
        case 2:
            return (
                <Subscriber
                    detailIsLoading={subscriberIsLoading}
                    subscribers={subscribers}
                ></Subscriber>
            )
        default:
            return
    }
}

interface IProps {
    playlistId: string
}
const Playlist: FC<IProps> = ({ playlistId }) => {
    playlistId = !playlistId ? "610040691" : playlistId
    const { data: info, isLoading: detailIsLoading } = usePlaylistDetailQuery(
        parseInt(playlistId),
        true
    )
    const { data: track, isLoading: songIsLoading } = usePlaylistTrackAllQuery(parseInt(playlistId))
    const { data: comment, isLoading: commentIsLoading } = usePlaylistCommentQuery(
        parseInt(playlistId)
    )
    const { data: subscriber, isLoading: subscriberIsLoading } = usePlaylistSubscribers(
        parseInt(playlistId)
    )

    const playlist = useMemo(() => {
        if (info) {
            return (info as IRes).playlist
        }
    }, [info])

    const tracks = useMemo(() => {
        if (track) {
            return (track as IRes).songs
        }
    }, [track])

    const comments = useMemo(() => {
        if (comment) {
            return comment as IRes
        }
    }, [comment])

    const subscribers = useMemo(() => {
        if (subscriber) {
            return (subscriber as IRes).subscribers
        }
    }, [subscriber])

    // console.log(subscribers)

    const [state, setState] = useState(0)

    return (
        <Grid mb="70px" overflowX="hidden" w="full">
            <PlaylistDetail
                detailIsLoading={detailIsLoading}
                playlist={playlist}
                tracks={tracks}
            ></PlaylistDetail>
            <HStack fontSize="20px" h="50px" ml="30px" mt="20px">
                {["歌曲列表", "评论", "收藏者"].map((item, index) => (
                    <Box
                        _hover={{
                            cursor: "pointer"
                        }}
                        borderBottom={index === state ? "4px solid #2B6CB0" : ""}
                        fontSize={index === state ? "2xl" : "xl"}
                        fontWeight={index === state ? "black" : "medium"}
                        key={item}
                        onClick={() => setState(index)}
                        textAlign="center"
                    >
                        {item}
                    </Box>
                ))}
            </HStack>
            <Box>
                {changePage(
                    state,
                    tracks,
                    songIsLoading,
                    comments,
                    commentIsLoading,
                    subscribers,
                    subscriberIsLoading
                )}
            </Box>
        </Grid>
    )
}

export default Playlist
