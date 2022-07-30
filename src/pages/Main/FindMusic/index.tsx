/*
 * @Author: DZR
 * @Date: 2022-07-22 11:06:37
 * @LastEditTime: 2022-07-25 16:34:56
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\index.tsx
 */
import { Box, Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import "../../../../style/index.css"
import Recommendation from "./Recommendation"

const FindMusic = () => {
    return (
        <Box bg="white" h="52em">
            <Tabs h="52em" w="100%">
                <TabList bg="#ffffff" h="2.5em">
                    <Tab _focus={{ outline: "none" }}>个性推荐</Tab>
                    <Tab _focus={{ outline: "none" }}>专属定制</Tab>
                    <Tab _focus={{ outline: "none" }}>歌单</Tab>
                    <Tab _focus={{ outline: "none" }}>排行榜</Tab>
                    <Tab _focus={{ outline: "none" }}>歌手</Tab>
                    <Tab _focus={{ outline: "none" }}>最新音乐</Tab>
                </TabList>

                <TabPanels h="49.5em">
                    <TabPanel bg="white" className="tabPage" padding="0">
                        <Recommendation></Recommendation>
                    </TabPanel>
                    <TabPanel bg="lightblue" className="tabPage" padding="0">
                        <p>two!</p>
                    </TabPanel>
                    <TabPanel bg="lightpink" className="tabPage" padding="0">
                        <p>three!</p>
                    </TabPanel>
                    <TabPanel bg="lightyellow" className="tabPage" padding="0">
                        <p>four!</p>
                    </TabPanel>
                    <TabPanel bg="red.200" className="tabPage" padding="0">
                        <p>five!</p>
                    </TabPanel>
                    <TabPanel bg="lightgreen" className="tabPage" padding="0">
                        <p>six!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}

export default FindMusic
