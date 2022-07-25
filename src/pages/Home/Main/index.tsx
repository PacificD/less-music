/*
 * @Author: DZR
 * @Date: 2022-07-20 09:30:50
 * @LastEditTime: 2022-07-25 15:49:20
 * @LastEditors: Ride-pig 327796210@qq.com
 * @Description:
 * @FilePath: \less-music\src\pages\Home\Left\index.tsx
 */

import { Box, Flex, Center } from "@chakra-ui/react"
import { FC, useState } from "react"
import { Attention } from "./Attention"
import { FindMusic } from "./FindMusic"
import { Live } from "./Live"
import { PodCast } from "./PodCast"
import { PrivateFM } from "./PrivateFM"
import { Video } from "./Video"
import "../../../style/main.css"

const Main: FC = () => {
    const [msg, setMsg] = useState(0)

    const arr = [
        { id: 0, name: "发现音乐" },
        { id: 1, name: "播客" },
        { id: 2, name: "视频" },
        { id: 3, name: "关注" },
        { id: 4, name: "直播" },
        { id: 5, name: "私人FM" }
    ]

    function changeComponent(params: number): JSX.Element | undefined {
        switch (params) {
            case 0:
                return <FindMusic></FindMusic>

            case 1:
                return <PodCast></PodCast>

            case 2:
                return <Video></Video>

            case 3:
                return <Attention></Attention>

            case 4:
                return <Live></Live>

            case 5:
                return <PrivateFM></PrivateFM>
        }
    }

    return (
        <Center>
            <Box bg="#fff" borderRight="1px solid lightgray" h="52em" w="19.5em">
                <Flex alignItems="center" flexWrap="wrap" justifyContent="center" rowGap="0.2em">
                    {arr.map(item => (
                        <Box
                            className={item.id === msg ? "selectedList" : "list"}
                            key={item.id}
                            onClick={() => {
                                setMsg(item.id)
                            }}
                        >
                            {item.name}
                        </Box>
                    ))}
                </Flex>
            </Box>
            <Box h="52em" w="110.5em">
                {changeComponent(msg)}
            </Box>
        </Center>
    )
}

export default Main
