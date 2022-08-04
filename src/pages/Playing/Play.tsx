/*
 * @Author: DZR
 * @Date: 2022-08-03 11:07:29
 * @LastEditTime: 2022-08-04 09:58:57
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\pages\Playing\Play.tsx
 */

import { useMVComments } from "@/services"
import { Box, Center, Circle, Flex, Spacer, Text } from "@chakra-ui/react"
import { useMemo } from "react"
import { AiOutlineDown } from "react-icons/ai"
import { BsArrowsAngleExpand } from "react-icons/bs"
import { Navigate, useLocation, useParams } from "react-router-dom"
import Comments from "../Comments"
import "../../style/index.css"

const Play = () => {
    const { id } = useParams()
    const { data: mvComments, isLoading: mvCommentsIsLoading } = useMVComments(
        parseInt(id as string)
    )
    const comments = useMemo(() => {
        if (mvComments) {
            return mvComments
        }
    }, [mvComments])
    return (
        <Center>
            <Box h="55em" w="130em">
                <Flex>
                    <Text color="gray" cursor="pointer" margin="20px 30px">
                        <AiOutlineDown />
                    </Text>
                    <Spacer />
                    <Box color="gray" cursor="pointer" margin="20px 30px">
                        <Flex>
                            <Box mt="5px">
                                <BsArrowsAngleExpand fontSize="15" />
                            </Box>
                            <Text>全屏纯享</Text>
                        </Flex>
                    </Box>
                </Flex>
                <Center>
                    <Box position="relative" w="60em">
                        <Flex>
                            <Box h="25em" mt="8em" w="25em">
                                <Circle className="playingAlbum" size="20em">
                                    <Circle bg="#333" size="18em">
                                        <Circle bg="white" size="14em">
                                            A
                                        </Circle>
                                    </Circle>
                                </Circle>
                            </Box>
                            <Box fontSize={30} ml="2em">
                                春泥
                            </Box>
                            <Box
                                bg="skyblue"
                                h="25em"
                                mt="5em"
                                position="absolute"
                                right="0"
                                w="20em"
                            ></Box>
                        </Flex>
                    </Box>
                    {/* {mvCommentsIsLoading ? <Box></Box> : <Comments comment={comments} />} */}
                </Center>
            </Box>
        </Center>
    )
}

export default Play
