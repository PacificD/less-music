/*
 * @Author: DZR
 * @Date: 2022-07-22 17:44:11
 * @LastEditTime: 2022-08-08 22:54:26
 * @LastEditors: DZR
 * @Description: 个性推荐页面的制作
 * @FilePath: \less-music\src\pages\Home\Main\FindMusic\Recommendation\index.tsx
 */
import request from "@/services/request"
import { IRes, METHODS } from "@/types"
import { Box } from "@chakra-ui/react"
import RecommendationList from "./RecommendationList"
import Swiper from "./Swiper"

const Recommendation = () => {
    return (
        <Box height="50em" overflowY="scroll" w="100%">
            <Swiper></Swiper>
            <RecommendationList />
        </Box>
    )
}

export default Recommendation
