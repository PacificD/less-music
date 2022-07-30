/*
 * @Author: DZR
 * @Date: 2022-07-22 17:44:11
 * @LastEditTime: 2022-07-29 22:55:34
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\Recommendation\index.tsx
 */
import { Box } from "@chakra-ui/react"
import Swiper from "./Swiper"

const Recommendation = () => {
    return (
        <Box h="13em" overflow="hidden" w="100%">
            <Swiper></Swiper>
        </Box>
    )
}

export default Recommendation
