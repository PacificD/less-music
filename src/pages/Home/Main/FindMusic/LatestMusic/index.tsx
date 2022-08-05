/*
 * @Author: Ride-pig 327796210@qq.com
 * @Date: 2022-07-29 15:41:21
 * @LastEditors: Ride-pig
 * @LastEditTime: 2022-08-05 16:29:44
 * @FilePath: \eee\less-music\src\pages\Home\Main\FindMusic\LatestMusic\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Box, Center, Flex } from "@chakra-ui/react"
import "../index.css"
import { Outlet, useNavigate } from "react-router-dom"
import React, { useState } from "react"

export const LatestMusic = () => {
    const navigate = useNavigate()

    const [num, setNum] = useState(0)

    const arr = [
        { id: 0, name: "新歌速递", path: "newsongexpress" },
        { id: 1, name: "新碟上架", path: "newdiscs" }
    ]

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
                fontSize="1em"
                h="3em"
                justifyContent="center"
            >
                {arr.map((item: any, index: number) => (
                    <Center
                        color={num === index ? "blue.500" : "black"}
                        fontWeight={num === index ? "700" : "400"}
                        key={item.id}
                        onClick={() => {
                            setNum(item.id)
                            navigate(item.path)
                        }}
                        w="8.125em"
                    >
                        {item.name}
                    </Center>
                ))}
            </Flex>

            <Box>
                <Outlet />
            </Box>
        </Box>
    )
}

export default LatestMusic
