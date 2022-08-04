/*
 * @Author: DZR
 * @Date: 2022-07-29 17:00:25
 * @LastEditTime: 2022-08-02 15:33:43
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\Singer\SingerPage\index.tsx
 */

import { Box, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react"
import SingerHeader from "./SingerHeader"
import Album from "./Album"
import { Link, Outlet, Route, Routes } from "react-router-dom"
import SingerDetails from "./SingerDetails"
import MV from "./MV"
import SimilarSinger from "./SimilarSinger"

const SingerPage = () => {
    return (
        <Box>
            <SingerHeader />
            <Box padding="2em" paddingTop="0">
                <Tabs size="md" variant="enclosed">
                    <TabList>
                        <Tab>专辑</Tab>
                        <Tab>MV</Tab>
                        <Tab>歌手详情</Tab>
                        <Tab>相似歌手</Tab>
                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <Album />
                        </TabPanel>
                        <TabPanel>
                            <MV />
                        </TabPanel>
                        <TabPanel>
                            <SingerDetails />
                        </TabPanel>
                        <TabPanel>
                            <SimilarSinger />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </Box>
    )
}

export default SingerPage
