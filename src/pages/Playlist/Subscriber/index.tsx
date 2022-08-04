/*
 * @Author: Giaruei
 * @Date: 2022-07-29 17:15:34
 * @LastEditTime: 2022-08-01 20:25:56
 * @LastEditors: Giaruei
 * Description: 歌单详情页的收藏页
 * @FilePath: \less-music\src\pages\Playlist\Subscriber\index.tsx
 */
import { FC } from "react"
import { Box, Flex, Image, Grid, Text } from "@chakra-ui/react"

interface IProps {
    subscribers: any[]
    detailIsLoading: boolean
}
const Subscriber: FC<IProps> = ({ detailIsLoading, subscribers }) => {
    // console.log(subscribers)

    return (
        <Box>
            {detailIsLoading ? (
                <Text color="blue.400" fontSize="2xl" fontWeight="bold">
                    Loading ...
                </Text>
            ) : (
                <Grid gap={6} p="25px" templateColumns="repeat(4, 1fr)">
                    {subscribers.map((item: any) => (
                        <Flex alignItems="center" key={item.userId} w="300px">
                            <Image
                                borderRadius="50%"
                                cursor="pointer"
                                h="100px"
                                mr="10px"
                                src={item.avatarUrl}
                            ></Image>
                            <Box>
                                <Box
                                    _hover={{ color: "blue.300", cursor: "pointer" }}
                                    title={item.nickname}
                                    w="max-content"
                                >
                                    {item.nickname}
                                </Box>
                                <Box fontSize="14px">{item.signature}</Box>
                            </Box>
                        </Flex>
                    ))}
                </Grid>
            )}
        </Box>
    )
}
export default Subscriber
