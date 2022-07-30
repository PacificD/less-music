/*
 * @Author: DZR
 * @Date: 2022-07-20 09:30:37
 * @LastEditTime: 2022-07-25 11:20:31
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\pages\Home\Header\index.tsx
 */
import { Box, Center, chakra, Circle, Input, Spacer, Square, Text } from "@chakra-ui/react"
import { FC } from "react"
import { RiLoginBoxLine, RiNeteaseCloudMusicFill } from "react-icons/ri"
import { AiOutlineLeft, AiOutlineRight, AiOutlineSearch } from "react-icons/ai"
const CloudMusic = chakra(RiNeteaseCloudMusicFill)

const Header: FC = () => {
    return (
        <>
            <Center>
                <Box bg="#2b6cb0" h="4em" w="100%">
                    <Center>
                        <CloudMusic
                            color="white"
                            cursor="pointer"
                            display="inline"
                            fontSize="2em"
                            m="0.5em"
                        />
                        <Text color="white" cursor="pointer" fontSize="xl" marginRight="3em">
                            网易云音乐
                        </Text>
                        <Circle bg="blackAlpha.200">
                            <AiOutlineLeft
                                color="white"
                                cursor="pointer"
                                fontSize="1.5em"
                                style={{ padding: "4px" }}
                            ></AiOutlineLeft>
                        </Circle>
                        <Box w="10px"></Box>
                        <Circle bg="blackAlpha.200">
                            <AiOutlineRight
                                color="white"
                                cursor="pointer"
                                fontSize="1.5em"
                                style={{ padding: "4px" }}
                            ></AiOutlineRight>
                        </Circle>
                        <Box w="2em"></Box>
                        <Square bg="blackAlpha.100" borderRadius="24px 0 0 24px" size="24px">
                            <AiOutlineSearch color="white"></AiOutlineSearch>
                        </Square>
                        <Input
                            _focus={{ outline: "none" }}
                            bg="blackAlpha.100"
                            border="none"
                            borderRadius="0 24px 24px 0"
                            placeholder="周杰伦"
                            size="xs"
                            type="search"
                            w="12em"
                        />
                        <Spacer></Spacer>
                        <RiLoginBoxLine color="white" fontSize="1.5em"></RiLoginBoxLine>
                    </Center>
                </Box>
            </Center>
        </>
    )
}

export default Header