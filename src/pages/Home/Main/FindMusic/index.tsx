/*
 * @Author: DZR
 * @Date: 2022-07-22 11:06:37
<<<<<<< HEAD
 * @LastEditTime: 2022-07-30 11:29:45
=======
 * @LastEditTime: 2022-07-30 11:38:07
>>>>>>> feature-ljp
 * @LastEditors: Pacific_D
 * @Description:
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\index.tsx
 */
import { Box, Center, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import "../../../../style/index.css"
import { Link, Outlet } from "react-router-dom"

const FindMusic = () => {
    return (
        <Box bg="white" h="50.5em">
            <Center>
                <Link className="recommendationLink" to="recommendation">
                    个性推荐
                </Link>
                <Link className="recommendationLink" to="">
                    专属定制
                </Link>
                <Link className="recommendationLink" to="playlist">
                    歌单
                </Link>
                <Link className="recommendationLink" to="">
                    排行榜
                </Link>
                <Link className="recommendationLink" to="singer/picture">
                    歌手
                </Link>
                <Link className="recommendationLink" to="latestmusic/newsongexpress">
                    最新音乐
                </Link>
            </Center>
            <Box>
                <Outlet />
            </Box>
        </Box>
    )
}

export default FindMusic
