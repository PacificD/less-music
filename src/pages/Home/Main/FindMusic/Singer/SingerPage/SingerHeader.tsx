/*
 * @Author: DZR
 * @Date: 2022-07-28 15:20:56
 * @LastEditTime: 2022-08-02 20:35:51
 * @LastEditors: DZR
 * @Description:歌手详情页中的上面部分（歌手照片以及粗略介绍）
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\Singer\SingerPage\SingerHeader.tsx
 */
import { Box, Flex, Text, Image } from "@chakra-ui/react"
import { Link, Outlet, useLocation } from "react-router-dom"
import { AiOutlineFolderAdd } from "react-icons/ai"
import Album from "./Album"
type myType = {
    msg: any
}

const SingerHeader = () => {
    const location = useLocation()
    const { msg } = location.state as myType
    const text = msg.alias.length === 2 ? msg.alias[0] + " ; " + msg.alias[1] : msg.alias[0]
    return (
        <Box>
            <Box padding="2em">
                <Flex>
                    <Box bg="lightgray" fontSize={20} h="200px" w="200px">
                        <Image alt="pic" sizes="100%" src={msg.img1v1Url}></Image>
                    </Box>
                    <Box h="200px" paddingLeft="10px">
                        <Text fontSize={18} fontWeight="bold">
                            {msg.name}
                        </Text>
                        <Text>{text}</Text>
                        <button className="singerCollectButton">
                            <AiOutlineFolderAdd color="rgb(199, 199, 199)" fontSize="1.5em" />
                            收藏
                        </button>
                        <Text display="inline" fontSize="xs">
                            单曲数：{msg.musicSize}
                        </Text>
                        <Text display="inline" fontSize="xs" ml="15px">
                            专辑数：{msg.albumSize}
                        </Text>
                    </Box>
                </Flex>
            </Box>
        </Box>
    )
}

export default SingerHeader
