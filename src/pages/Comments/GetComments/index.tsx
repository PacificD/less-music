/*
 * @Author: Giaruei
 * @Date: 2022-07-29 15:45:08
 * @LastEditTime: 2022-07-29 15:49:18
 * @LastEditors: Giaruei
 * @Description: 获取评论（热门评论/最新评论）
 * @FilePath: \less-music\src\pages\Comments\GetComments\index.tsx
 */

import { FC } from "react"
import { Box, Flex, Image } from "@chakra-ui/react"

interface IProps {
    comments: any[]
}
const GetComments: FC<IProps> = ({ comments }) => {
    // const hotComments = comment.hotComments as any[]
    // const newComments = comment.comments as any[]
    return (
        <Flex direction="column">
            {comments.map(item => (
                <Box borderBottom="1px solid #E2E8F0" key={item.commentId} mb="10px">
                    <Flex alignItems="center">
                        <Image
                            borderRadius="50%"
                            cursor="pointer"
                            h="40px"
                            mr="1em"
                            src={item.user.avatarUrl}
                        />
                        <Box
                            _hover={{ color: "blue.500", cursor: "pointer" }}
                            color="blue.300"
                            mr="1em"
                        >
                            {item.user.nickname}
                        </Box>
                        <Box>{item.timeStr}</Box>
                    </Flex>
                    <Box mb="10px" ml="60px">
                        {item.content}
                        {!item.beReplied.length ? (
                            ""
                        ) : (
                            <Flex
                                bg="gray.200"
                                borderRadius="10px"
                                direction="column"
                                mt="5px"
                                p="10px"
                            >
                                <Box
                                    _hover={{ color: "blue.500" }}
                                    color="blue.300"
                                    cursor="pointer"
                                    w="max-content"
                                >
                                    {item.beReplied[0].user.nickname}
                                </Box>
                                <Box>{item.beReplied[0].content}</Box>
                            </Flex>
                        )}
                    </Box>
                </Box>
            ))}
        </Flex>
    )
}
export default GetComments
