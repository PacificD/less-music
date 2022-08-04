/*
 * @Author: DZR
 * @Date: 2022-07-20 09:30:50
 * @LastEditTime: 2022-08-02 10:34:54
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\pages\Home\Main\index.tsx
 */

import { Box, Flex, Center } from "@chakra-ui/react"
import { FC, useState } from "react"
import "../../../style/main.css"
import { Outlet, useNavigate } from "react-router-dom"

const Main: FC = () => {
    const [msg, setMsg] = useState(0)
    const navigate = useNavigate()

    const arr = [
        { id: 0, name: "发现音乐", path: "/findmusic/recommendation" },
        { id: 1, name: "播客", path: "/podcast" },
        { id: 2, name: "视频", path: "/video" },
        { id: 3, name: "关注", path: "/attention" },
        { id: 4, name: "直播", path: "/live" },
        { id: 5, name: "私人FM", path: "/privatefm" }
    ]

    return (
        <Center>
            <Box bg="#fff" borderRight="1px solid lightgray" h="50.5em" w="19.5em">
                <Flex alignItems="center" flexWrap="wrap" justifyContent="center" rowGap="0.2em">
                    {arr.map(item => (
                        <Box
                            className={item.id === msg ? "selectedList" : "list"}
                            key={item.id}
                            onClick={() => {
                                setMsg(item.id)
                                navigate(item.path)
                            }}
                        >
                            {item.name}
                        </Box>
                    ))}
                </Flex>
            </Box>
            <Box h="50.5em" position="relative" w="110.5em">
                <Box>
                    <Outlet />
                </Box>
            </Box>
        </Center>
    )
}

export default Main
