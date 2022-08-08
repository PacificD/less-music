/*
 * @Author: Ride-pig
 * @Date: 2022-08-04 20:53:38
 * @LastEditTime: 2022-08-08 16:25:42
 * @LastEditors: Ride-pig
 * @Description: 专辑页面的制作
 * @FilePath: \eee\less-music\src\pages\Album\index.tsx
 */
import { useAlbumCommentQuery, useAlbumContentQuery } from "@/services"
import { IRes } from "@/types"
import { Box, Flex, Grid, HStack, VStack } from "@chakra-ui/react"
import React, { FC, useMemo, useState } from "react"
import { useParams } from "react-router-dom"
import Comments from "../Comments"
import AlbumDetail from "./AlbumDetail"
import AlbumSongList from "./AlbumSongList"
import AlbumInformation from "./AlbumInformation"

// 专辑评论
// /comment/album
// 参数：id

// 专辑内容（包括专辑歌曲和专辑详情）
// /album
// 参数：id
//

function changePage(
    index: number,
    albumComment: any,
    albumCommentIsLoading: boolean,
    albumContentSongs: any,
    albumContentIsLoading: boolean,
    albumContentAlbum: any
) {
    switch (index) {
        case 0:
            return (
                <AlbumSongList
                    albumContentIsLoading={albumContentIsLoading}
                    albumContentSongs={albumContentSongs}
                ></AlbumSongList>
            )
        case 1:
            return (
                <Comments comment={albumComment} detailIsLoading={albumCommentIsLoading}></Comments>
            )
        case 2:
            return (
                <AlbumInformation
                    albumContentAlbum={albumContentAlbum}
                    albumContentIsLoading={albumContentIsLoading}
                ></AlbumInformation>
            )
        default:
            return
    }
}

const Album: FC = () => {
    const { id } = useParams()
    const AlbumId = parseInt(id!)

    const { data: albumComment, isLoading: albumCommentIsLoading } = useAlbumCommentQuery(
        AlbumId,
        true
    )
    const { data: albumContent, isLoading: albumContentIsLoading } = useAlbumContentQuery(
        AlbumId,
        true
    )

    const albumCommentResult = useMemo(() => {
        if (albumComment) {
            return (albumComment as IRes).comments
        }
    }, [albumComment])

    const albumContentSongs = useMemo(() => {
        if (albumContent) {
            return (albumContent as IRes).songs
        }
    }, [albumContent])

    const albumContentAlbum = useMemo(() => {
        if (albumContent) {
            return (albumContent as IRes).album
        }
    }, [albumContent])

    const [state, setState] = useState(0)
    return (
        <VStack h="100%" mb="70px" overflowY="scroll" w="100%">
            <AlbumDetail
                albumContentAlbum={albumContentAlbum}
                albumContentIsLoading={albumContentIsLoading}
                albumContentSongs={albumContentSongs}
            ></AlbumDetail>
            <HStack fontSize="20px" h="50px" ml="30px" w="1500px">
                {["歌曲列表", "评论", "专辑详情"].map((item, index) => (
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
                    albumComment,
                    albumCommentIsLoading,
                    albumContentSongs,
                    albumContentIsLoading,
                    albumContentAlbum
                )}
            </Box>
        </VStack>
    )
}

export default Album
