/*
 * @Author: Ride-pig 327796210@qq.com
 * @Date: 2022-07-29 11:56:57
 * @LastEditors: Ride-pig 327796210@qq.com
 * @LastEditTime: 2022-07-29 11:59:18
 * @FilePath: \3\less-music\src\components\Loading\loadingTwo.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Lottie from "lottie-react"
import animationData from "../../lotties/97111-loading-spinner-dots.json"
import { Box, Center } from "@chakra-ui/react"

export const LoadingTwo = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }
    return <Lottie {...defaultOptions} height="100%" width="100%" />
}

export default LoadingTwo
