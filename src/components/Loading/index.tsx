/*
 * @Author: Ride-pig 327796210@qq.com
 * @Date: 2022-07-23 12:01:37
 * @LastEditors: Ride-pig 327796210@qq.com
 * @LastEditTime: 2022-07-26 16:03:16
 * @FilePath: \less-music\src\components\Loading\index.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from "react"
import Lottie from "lottie-react"
import animationDataTwo from "../../lotties/lf30_editor_u1ttggqp.json"
import animationData from "../../lotties/lf30_editor_wiys1jhr.json"
import { Box, Center } from "@chakra-ui/react"

export const Loading = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    const defaultOptionsTwo = {
        loop: true,
        autoplay: true,
        animationData: animationDataTwo,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    return (
        <Box>
            <Center position="fixed" w="100%" zIndex="100">
                <Box h="100vh" transform="scale(0.8)">
                    <Lottie {...defaultOptionsTwo} />
                    <Lottie {...defaultOptions} />
                </Box>
            </Center>
            <Box
                bgColor="pink"
                filter="blur(400px)"
                h="100vh"
                position="fixed"
                w="100%"
                zIndex="99"
            ></Box>
        </Box>
    )
}

export default Loading
