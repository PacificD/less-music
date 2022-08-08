/*
 * @Author: DZR
 * @Date: 2022-07-22 17:44:11
 * @LastEditTime: 2022-08-08 16:42:58
 * @LastEditors: Ride-pig
 * @Description: 个性推荐页面的制作
 * @FilePath: \eee\less-music\src\pages\Home\Main\FindMusic\Recommendation\index.tsx
 */
import { Box } from "@chakra-ui/react"
import PopularBlog from "./PopularBlog"
import RecommendationList from "./RecommendationList"
import Swiper from "./Swiper"

const Recommendation = () => {
    return (
        <Box height="50em" overflowY="scroll" w="100%">
            <Swiper></Swiper>
            <RecommendationList />
            <PopularBlog></PopularBlog>
        </Box>
    )
}

export default Recommendation
