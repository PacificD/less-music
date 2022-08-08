/*
 * @Author: DZR
 * @Date: 2022-07-22 11:06:37
 * @LastEditTime: 2022-08-08 11:26:59
 * @LastEditors: Giaruei
 * @Description:
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\index.tsx
 */
import { Box, Center } from "@chakra-ui/react"
import "../../../../style/index.css"
import { Outlet, useNavigate } from "react-router-dom"
import { useState } from "react"

const FindMusic = () => {
    const [msg, setMsg] = useState(0)
    const navigate = useNavigate()
    const arr = [
        { id: 0, name: "个性推荐", path: "recommendation" },
        { id: 1, name: "专属定制", path: "" },
        { id: 2, name: "歌单", path: "songlist" },
        { id: 3, name: "排行榜", path: "" },
        { id: 4, name: "歌手", path: "singer/picture" },
        { id: 5, name: "最新音乐", path: "latestmusic/newsongexpress" }
    ]

    return (
        <Box bg="white" h="50.5em">
            <Center>
                {arr.map(item => (
                    <Box
                        className="recommendationLink"
                        color={item.id === msg ? "blue.300" : "black"}
                        cursor="pointer"
                        key={item.id}
                        onClick={() => {
                            setMsg(item.id)
                            navigate(item.path)
                        }}
                    >
                        {item.name}
                    </Box>
                ))}
            </Center>
            <Box>
                <Outlet />
            </Box>
        </Box>
    )
}

export default FindMusic
