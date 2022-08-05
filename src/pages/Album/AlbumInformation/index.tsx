/*
 * @Author: Ride-pig
 * @Date: 2022-08-05 09:26:41
 * @LastEditTime: 2022-08-05 15:20:27
 * @LastEditors: Ride-pig
 * @Description: 专辑评论的制作
 * @FilePath: \eee\less-music\src\pages\Album\AlbumInformation\index.tsx
 */
import { Box } from "@chakra-ui/react"
import React, { FC } from "react"

interface IProps {
    albumContentAlbum: any
    albumContentIsLoading: boolean
}

const AlbumInformation: FC<IProps> = ({ albumContentAlbum, albumContentIsLoading }) => {
    return (
        <Box w="1500px">
            <Box fontSize="1.3em" fontWeight="bold">
                专辑介绍
            </Box>
            <p style={{ color: "gray", marginTop: "1em", textIndent: "2em" }}>
                {albumContentAlbum.description}
            </p>
        </Box>
    )
}

export default AlbumInformation
