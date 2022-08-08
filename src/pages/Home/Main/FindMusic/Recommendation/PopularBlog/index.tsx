/*
 * @Author: Ride-pig
 * @Date: 2022-08-08 11:11:33
 * @LastEditTime: 2022-08-08 11:32:56
 * @LastEditors: Ride-pig
 * @Description: 热门播客组件的制作
 * @FilePath: \eee\less-music\src\pages\Home\Main\FindMusic\Recommendation\PopularBlog\index.tsx
 */
import { Box, Flex } from "@chakra-ui/react"
import React, { FC } from "react"
import { MdKeyboardArrowRight } from "react-icons/md"

const PopularBlog: FC = () => {
    return (
        <Box h="14em">
            <Flex
                alignItems="center"
                cursor="pointer"
                fontWeight="700"
                h="3em"
                lineHeight="3em"
                margin="auto"
                w="68em"
            >
                热门播客
                <Box mt="3px">
                    <MdKeyboardArrowRight fontSize="1.5em" />
                </Box>
            </Flex>
        </Box>
    )
}

export default PopularBlog
