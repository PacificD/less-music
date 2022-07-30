/*
 * @Author: Ride-pig 327796210@qq.com
 * @Date: 2022-07-22 15:23:25
 * @LastEditors: Ride-pig 327796210@qq.com
 * @LastEditTime: 2022-07-25 15:13:10
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react"
import React, { FC } from "react"

export const FindMusic: FC = () => {
    return (
        <Tabs>
            <TabList>
                <Tab _focus={{ outline: "none" }}>个性推荐</Tab>
                <Tab _focus={{ outline: "none" }}>专属定制</Tab>
                <Tab _focus={{ outline: "none" }}>歌单</Tab>
                <Tab _focus={{ outline: "none" }}>排行榜</Tab>
                <Tab _focus={{ outline: "none" }}>歌手</Tab>
                <Tab _focus={{ outline: "none" }}>最新音乐</Tab>
            </TabList>

            <TabPanels>
                <TabPanel>
                    <p>one!</p>
                </TabPanel>
                <TabPanel>
                    <p>two!</p>
                </TabPanel>
                <TabPanel>
                    <p>three!</p>
                </TabPanel>
                <TabPanel>
                    <p>four!</p>
                </TabPanel>
                <TabPanel>
                    <p>five!</p>
                </TabPanel>
                <TabPanel>
                    <p>six!</p>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
