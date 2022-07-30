/*
 * @Author: DZR
 * @Date: 2022-07-22 17:44:11
 * @LastEditTime: 2022-07-30 11:37:47
 * @LastEditors: Pacific_D
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
