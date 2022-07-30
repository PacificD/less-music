/*
 * @Author: Ride-pig 327796210@qq.com
 * @Date: 2022-07-29 15:41:21
 * @LastEditors: Pacific_D
 * @LastEditTime: 2022-07-30 11:36:59
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\LatestMusic\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Box, Flex } from "@chakra-ui/react"
import "../index.css"
import { Outlet, useNavigate } from "react-router-dom"
import React, { useState } from "react"

export const LatestMusic = () => {
    const navigate = useNavigate()
    const ToNewSongExpress = () => navigate("newsongexpress")
    const ToNewDiscs = () => navigate("newdiscs")

    return (
        <Box
            css={{
                "&::-webkit-scrollbar": {
                    width: "0.5em"
                },
                "&::-webkit-scrollbar-track": {
                    width: "1em"
                },
                "&::-webkit-scrollbar-thumb": {
                    height: "8em",
                    background: "#6eaff4",
                    borderRadius: "24px"
                }
            }}
            h="49em"
            overflow="auto"
        >
            <Flex
                alignItems="center"
                cursor="pointer"
                fontSize="1.1em"
                h="5em"
                justifyContent="center"
            >
                <Box onClick={ToNewSongExpress} w="8.125em">
                    新歌速递
                </Box>
                <Box onClick={ToNewDiscs} w="8.125em">
                    新碟上架
                </Box>
            </Flex>

            <Box>
                <Outlet />
            </Box>
        </Box>
    )
}

export default LatestMusic
