/*
 * @Author: Pacific_D
 * @Date: 2022-07-18 10:14:40
 * @LastEditTime: 2022-07-26 15:59:42
 * @LastEditors: DZR
 * @Description:
 * @FilePath: \less-music\src\pages\Home\index.tsx
 */

import { FC } from "react"
import Header from "./Header"
import Main from "./Main"
import Footer from "./Footer"
import { Box } from "@chakra-ui/react"

const Home: FC = () => {
    return (
        <Box overflow="hidden">
            <Header></Header>
            <Main></Main>
        </Box>
    )
}

export default Home
